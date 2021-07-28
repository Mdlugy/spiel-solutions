import axios from "axios"
import React, { useEffect, useState } from "react"
import EditNavbar from "../components/EditNavBar"
import LinkedFrom from "../components/LinkedFrom"

//usestate  setSpiel axios get by id

const Edit = props => {
    const [spiel,setSpiel]= useState(null)
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/spiels/${props.id}`)
        .then(res => setSpiel(res.data))
        .catch(err => console.log(err))
    },[props.id])
    

    const snippetSave = ()=>{
        axios.put(`/api/spiels/update/${spiel._id}`,{snippet:spiel.snippet})
    }
    const onChangeHandler = e =>{
        setSpiel({...spiel,[e.target.name]:e.target.value})
    }
    return(
        <>{spiel?
    <div className="editWrapper">
        <main>
            
        <button className="saveAndQuit" >Save and quit</button>
            <h1>{spiel.name}</h1>
            <form onSubmit={snippetSave}><textarea onChange={onChangeHandler} name="snippet" cols="30" rows="10">{spiel.snippet}</textarea><div><input type="submit" value="Save" className="btn btn-info" /></div>
</form>
        <LinkedFrom spiel={spiel} />
        </main>
        <EditNavbar spiel={spiel}/>

    </div>
    :"test"}</>);
}
export default Edit

// ({id:1, scriptName:"test",isHead:false,element:"Page",pageArr:[{id:1,name:"page 1",element:"Page"},{id:2,name:"page 2",element:"Page"},{id:6,name:"page 4",element:"Page"}], modalArr:[{id:4,name:"Modal 1",element:"Modal"},{id:5,name:"Modal 2",element:"Modal"}],snippet:"testsnippet",name:"test"})