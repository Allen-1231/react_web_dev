import { MdEdit, MdDelete } from "react-icons/md";
import EditForm from "./EditForm";

const Todo = ({ todo, deleteTodo, editTodo, toggleCompleted, toggleEditing }) => {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
        <p onClick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
        <div>
            <MdEdit onClick={() => {toggleEditing(todo.id)}} style={{cursor: "pointer", marginRight: "5px"}}/>
            <MdDelete onClick={() => {deleteTodo(todo.id)}} style={{cursor: "pointer"}}/>
        </div>
    </div>
  );
};

export default Todo;

