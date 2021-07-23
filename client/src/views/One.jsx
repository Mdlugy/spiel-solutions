import React, { useEffect, useState } from "react"
import axios from "axios"

const One = props => {
    const [Object,setObject]= useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/objects/${props.id}`)
        .then(res => setObject(res.data[0]))
        .catch(err => console.log(err))
    }, [props.id])
    return(

    <div >
        {Object?
        <div>
        <h1>this is the object page for {Object.title}</h1>
        <h3>{Object.description}</h3>
        <p>${Object.price}</p>
        </div>
            : ""}
        
        </div>
    );
}
export default One