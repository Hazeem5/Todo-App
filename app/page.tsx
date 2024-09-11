'use client'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
interface TodoTypes {
    id: string;
    desc: string;
    completed: boolean;
}
const Todos = () => {
    const [inputText, setInputText] = useState("");
    const [todo,settodo] = useState<TodoTypes[]>([])
    const[editmode,seteditmode]=useState(false)
    const [update,setupdate]=useState(false)
    const [editinfo,seteditinfo]=useState<TodoTypes>({id:"",desc:"",completed:false})
 useEffect(()=>{
     axios.get('/api/todos').then((res)=>{
 settodo(res.data.todos)
     })
},[update] )

    async function addTodo(){
         const data={desc: inputText}
        const res=await axios.post("/api/todos",data)
        setupdate(prev=>!prev)
     //   settodo((prevTodos ) =>[...prevTodos,{desc:inputText,completed:false}])
     }
     async function deleteTodo(todo:TodoTypes)
     {
        const id=todo.id
         const res=await axios.delete(`/api/todos/${id}`)
         setupdate(prev=>!prev)
    }
    async function editTodo(todo:TodoTypes)
    {seteditmode(true)
        seteditinfo({id:todo.id, desc:todo.desc, completed:todo.completed})
    }
   async function updateTodo()
   {
    const data={
        desc:editinfo.desc,
        completed:editinfo.completed
    }
   await axios.put(`/api/todos/${editinfo.id}`,data)
    
    seteditmode(false)
    setupdate(prev=>!prev)
    
   }
     async function clearTodo(){
       const res=await axios.delete("/api/todos")
        settodo([])
        setupdate(prev=>!prev)
    }
    if(editmode){
        return(
        <div className='flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32'>
        <div className='text-2xl'>Edit List Next</div>
        <div className='flex gap-4'>
            <div className='text-lg'>Edit desc</div>
            <input
                className='text-xl rounded-md shadow-md'
                type="text"
                placeholder='enter todo'
                value={editinfo.desc}
                onChange={e=>seteditinfo({...editinfo,desc:e.target.value})}
            />
        </div>
        <div className='flex gap-4'>
            <div className='tex-lg'>Edit Completed</div>
            <input type="checkbox" checked={editinfo.completed} onChange={e=>seteditinfo({...editinfo,completed:!editinfo.completed})}/>
        </div>
        <button onClick={updateTodo} className='text-xl bg-blue-600 shadow-md rounded-md text-white hover:bg-blue-500 px-3 py-1 '>Submit</button>      
    </div>
    )}
    return (
        <div className='flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32'>
            <div className='text-2xl'>Todo List Next</div>
            <div className='flex gap-2'>
                <input
                    className='text-xl rounded-md shadow-md'
                    type="text"
                    placeholder='enter todo'
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <button onClick={addTodo} className='text-xl bg-blue-600 shadow-md rounded-md text-white hover:bg-blue-500 px-3 py-1 '>Add</button>
                <button onClick={clearTodo}className='text-xl bg-grey-600 shadow-md rounded-md text-white hover:bg-yellow-500 px-3 py-1'>Clear</button>
            </div>
            <div className=' w-5/6 flex flex-col gap-2'>
                {todo?.map((item, index) =>
                    <div key={index} className='flex gap-2 bg-violet-600 justify-between items-center p-2 rounded-lg shadow-md'>
                        <div className='flex gap-2'>
                            <input type="checkbox" checked={item.completed} />
                            <div className=''>{item.desc}</div>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={()=>editTodo(item)} className='text-xl bg-green-600 shadow-md rounded-md text-white hover:bg-blue-500 px-1'>Edit</button>
                            <button onClick={()=>deleteTodo(item)} className='text-xl bg-red-600 shadow-md rounded-md text-white hover:bg-blue-500 px-1'>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Todos
