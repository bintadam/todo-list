import { useState } from "react";

function AddTodo({onAdd}){
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text) return ;
        onAdd(text)
        setText('');
    }

    return (
        <div className="bg-custom-green-default rounded">
            <form className="bg-custom-green-dark p-2 text-white" onSubmit={handleSubmit}>
                <input className="bg-custom-green-dark font-extralight" value={text} placeholder="Add Items" onChange={(e) => setText(e.target.value)}/>
                <button type="submit" className="bg-teal-400 rounded-full  w-6 h-6 text-base font-bold">+</button>
            </form>
        </div>
    )
}

export default AddTodo;