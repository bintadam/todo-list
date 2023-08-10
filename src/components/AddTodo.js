import { useState } from "react";

function AddTodo({onAdd}){
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text) return ;
        onAdd(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="" value={text} placeholder="Add Items" onChange={(e) => setText(e.target.value)}/>
            <button type="submit" className="">+</button>
        </form>
    )
}

export default AddTodo;