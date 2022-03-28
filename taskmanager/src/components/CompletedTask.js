import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function Completed(){
    const [data , setData] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:8000/api/completed')
        .then(res =>{
            // console.log(res.data)
            setData(res.data)
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
            "completed" : false,
            "completedtime" : ""
        }).then(res =>{
            // console.log(res.data)
            window.location.reload(true)
            
        })
        .catch(err=> console.log(err))

    }


    const arr= data.filter((element)=>element.completed==1  )
    .map((element,index)=>{
            return (
                <tr key={index}>
                    <td style={styleElement}>{element.task}</td>
                    <td style={styleElement}>{element.description}</td>
                    <td style={styleElement}>{String(element.completed)}</td>
                    <td style={styleElement}>{String(element.time).slice(0,10)}</td>
                    <td style={styleElement}>{String(element.time).slice(11,-5)}</td>
                    <td style={styleElement}>{String(element.completedtime).slice(0,10)}</td>
                    <td style={styleElement}>{String(element.completedtime).slice(11,-5)}</td>
                    <td style={styleElement}> <button onClick={()=>change(element._id)}style={{color: 'blue'}}>Not Completed</button></td>
    
                </tr>
            )   
        })

    return(
        <div>
            <h1>Completed Tasks</h1>
            <table >
                <thead>
                <tr style={{color: 'red'}}>
                    <th style={styleElement}>Task Name</th>
                    <th style={styleElement}>Task Description</th>
                    <th style={styleElement}>Task Completed</th>
                    <th style={styleElement}>Started Date</th>
                    <th style={styleElement}>Started Time</th>
                    <th style={styleElement}>Finished Date</th>
                    <th style={styleElement}>Finished Time</th>
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

export default Completed