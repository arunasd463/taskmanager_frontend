import React, { useState } from 'react'
import  Axios  from 'axios'

const Createtask = () => {
    const url ="http://localhost:8000/api/create"
    const [data , setData] = useState({
        task : "",
        description : "",
        date : ""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            task : data.task,
            description : data.description,
            date : data.date,
            // completed:data.completed
        })
        .then(res =>{
            console.log(res.data)
            alert("Task added")
            window.location.reload(true)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div>
       <form onSubmit={(e)=>submit(e)}>
           <input onChange={(e)=>handle(e)} id="task" value={data.task} placeholder='Taskname' type="text"></input>
           <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder='Description' type="text"></input>
           <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder='Date' type="date"></input>
           {/* <input onChange={(e)=>handle(e)} id="completed" value={data.completed}  type="checkbox" ></input> */}
           <button>Submit</button>
       </form>
    </div>
  )
}

export default Createtask