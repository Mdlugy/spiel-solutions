import { Link } from "@reach/router"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Delete from "../components/Delete"
import EditNavbar from "../components/EditNavBar"
import LinkedFrom from "../components/LinkedFrom"

//usestate  setSpiel axios get by id

const Edit = props => {
    const [spiel,setSpiel]= useState({pageArr: [], modalArr: []})
    const [add, setAdd] = useState(false);
    const[scriptHead,setHead]= useState(null);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/spiels/${props.id}`)
        .then(res =>{ setSpiel(res.data)
            console.log("this is sn "+ res.data.scriptName)
            axios.get(`http://localhost:8000/api/spiels/find/oneHead/${res.data.scriptName}`)
        .then(res => setHead(res.data._id))
        .catch(err => console.log(err))}
        )
        .catch(err => console.log(err))
    },[props.id, add])

        

    const snippetSave = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/spiels/update/${spiel._id}`,
        {snippet:spiel.snippet})
        .then(alert("save successfull"))
        .catch(err => console.log(err))
    }
    const onChangeHandler = e =>{
        setSpiel({...spiel,[e.target.name]:e.target.value})
        console.log(spiel.snippet)
    }
    return(
        <>{spiel?
    <div className="editWrapper">
        <main>
        <button className="saveAndQuit" >Save and quit</button>
        {!spiel.isHead? <div><Delete id={props.id} redirect={scriptHead}/></div>:""}
            <h1>{spiel.name}</h1>
            <form onSubmit={snippetSave}><textarea onChange={onChangeHandler} value={spiel.snippet?spiel.snippet:
        ''} name="snippet" cols="30" rows="10"/><div><input type="submit" value="Save" className="btn btn-info" /></div>
</form>
        <LinkedFrom add={add} setAdd={setAdd} spiel={spiel} />
        </main>
        <EditNavbar spiel={spiel}/>

    </div>
    :"test"}</>);
}
export default Edit

// ({id:1, scriptName:"test",isHead:false,element:"Page",pageArr:[{id:1,name:"page 1",element:"Page"},{id:2,name:"page 2",element:"Page"},{id:6,name:"page 4",element:"Page"}], modalArr:[{id:4,name:"Modal 1",element:"Modal"},{id:5,name:"Modal 2",element:"Modal"}],snippet:"testsnippet",name:"test"})