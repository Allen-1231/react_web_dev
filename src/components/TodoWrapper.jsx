import { useState } from "react";
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    const [todos, setTodos] = useState([
        { id: Math.random(), content: "洗衣服", isCompleted: false, isEditing: false },  // 用 isCompleted 來切換 css
        { id: Math.random(), content: "吃飯", isCompleted: false, isEditing: false }
    ]);      // 初始值設定陣列，因為要存放多個 todo

    const addTodo = con => {
        setTodos([...todos, {id: Math.random(), content: con, isCompleted: false, isEditing: false}])
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    };

    const toggleEditing = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    };

    const editTodo = (id, newContent) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, content: newContent, isEditing: false} : todo))
    };

    const unFinishedTodos = todos.filter(todo => todo.isCompleted === false)

    const deleteCompletedTodos = () => {
        setTodos(todos.filter(todo => !todo.isCompleted))
    };

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo}/>
            {todos.map(todo => {
                return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} toggleCompleted={toggleCompleted} toggleEditing={toggleEditing}/>
            })}
            <p>剩餘未完成：{unFinishedTodos.length}</p>
            <div className="action">
                <button className="btn" onClick={() => deleteCompletedTodos()}>一鍵刪除已完成</button>
            </div>
        </div>
    );
}

export default TodoWrapper;

