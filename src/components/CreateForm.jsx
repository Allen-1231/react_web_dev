import { useState } from "react";

function CreateForm({addTodo}) {

    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()       // preventDefault(): 取消事件的預設行為。當表單提交時，預設行為是重新整理網頁
        if (content.trim() === "") return;
        addTodo(content)
        setContent("")           // 輸入完加入後，清空輸入框
    };

    return (                                // onChange: 會在 input 的值發生改變時執行
        <form className="createForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type="submit">加入</button>
        </form>
    );
}

export default CreateForm;