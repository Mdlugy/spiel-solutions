import React, { useState } from "react"
import axios from 'axios';
import { navigate } from "@reach/router"
const Form = props =>{
    const [error,setError]=useState({})
    const [title,setTitle]= useState('')
    const [price,setPrice]= useState('')
    const [description,setDescription]= useState('')
    // if (props.from === "add"){}
    const handleSubmit =e=>{
        e.preventDefault();
        if(props.page ==='Add'){
            axios.post("http://localhost:8000/api/objects/create", {
                title,
                price,
                description
            })
            .then(res=>console.log("Success"), navigate("/"))
            .catch(err=>setError(err.response.data.error.errors))

            
        }
        else if (props.page==='Update'){
            axios.put(`http://localhost:8000/api/objects/update/${props.id}`, {
                title,
                price,
                description
            })
            .then(res=>console.log("Success"), navigate("/"))
            .catch(err=>setError(err.response.data.error.errors))

        }
        }
        console.log(error)
    return(

        <form className="formWrapper" onSubmit= {handleSubmit}>
            <label htmlFor="title">Title</label><input onChange={(e)=>setTitle(e.target.value)}  type="text" name="title" />
                {error.title? <span className="text-danger">{error.title.message}</span>:""}
            <label htmlFor="price">Price: $</label><input onChange={(e)=>setPrice(e.target.value)}  type="number" name="price"/>
            {error.price? <span className="text-danger">{error.price.message}</span>:""}
            <label htmlFor="description">Description</label><textarea onChange={(e)=>setDescription(e.target.value)} name="description" cols="30" rows="10"></textarea>
            {error.description? <span className="text-danger">{error.description.message}</span>:""}
            <div><input type="submit" value="Submit" className="btn btn-info" /></div>
        </form>
    )
}
export default Form