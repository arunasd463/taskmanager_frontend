import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function Archieved(){
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
                </tr>
            )   
        })

    return(
        <div>
            <h1>Archieved Tasks</h1>
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

                </tr>
                </thead>
                <tbody>
                {arr}
                </tbody>
            </table>
        </div>
    )
}

export default Archieved