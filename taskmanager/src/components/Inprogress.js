import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function InProgress(){
    const [data , setData] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:8000/api/getall')
        .then(res =>{
            // console.log(res.data)
            setData(res.data.task)
        })
        .catch(err=> console.log(err))
    },[])

    let styleElement = {
        margin: "auto",
        border: "1px solid black",
        borderCollapse: "collapse",
        padding: "5px",
        
    };

    function  change(id){
        Axios.patch(`http://localhost:8000/api/update/${id}`,{
            "completed" : true,
            "completedtime" : Date.now()
        }).then(res =>{
            // console.log(res.data)
            window.location.reload(true)
            
        })
        .catch(err=> console.log(err))

    }

    const arr = data.map((data,index)=>{
        if(data.completed==0)
       
        return (
            <tr key={index}>
                <td style={styleElement}>{data.task}</td>
                <td style={styleElement}>{data.description}</td>
                <td style={styleElement}>{String(data.completed)}</td>
                <td style={styleElement}>{String(data.time).slice(0,10)}</td>
                <td style={styleElement}>{String(data.time).slice(11,-5)}</td>
                <td style={styleElement}> <button onClick={()=>change(data._id)}style={{color: 'green'}}>Completed</button></td>
            </tr>
            
        )
    })
    return(
        <div>
            <h1>In Progress Tasks</h1>
            <table>
                <thead>
                <tr style={{color: 'red'}}>
                    <th style={styleElement}>Task Name</th>
                    <th style={styleElement}>Task Description</th>
                    <th style={styleElement}>Task Completed</th>
                    <th style={styleElement}>Date</th>
                    <th style={styleElement}>Time</th>
                    <th style={styleElement}>Operation</th>
                </tr>
                </thead>
                <tbody>
                {arr}
                </tbody>
            </table>
        </div>
    )
}

export default InProgress