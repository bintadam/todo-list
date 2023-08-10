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
        <div className="bg-custom-green-dark rounded border rounded-3xl">
            <form className=" p-1 text-white" onSubmit={handleSubmit}>
                <input className="bg-custom-green-dark font-extralight pl-1" value={text} placeholder="Add Items" onChange={(e) => setText(e.target.value)}/>
                <button type="submit" className="ml-36 bg-teal-400 rounded-full  w-8 h-8 text-base font-bold">+</button>
            </form>
        </div>
    )
}

export default AddTodo;