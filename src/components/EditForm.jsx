import { useState } from "react";

function EditForm({todo, editTodo}) {

    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        e.preventDefault()       // preventDefault(): 取消事件的預設行為。當表單提交時，預設行為是重新整理網頁
        editTodo(todo.id, content)
    };

    return (                                // onChange: 會在 input 的值發生改變時執行
        <form className="createForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type="submit">完成</button>
        </form>
    );
}

export default EditForm;