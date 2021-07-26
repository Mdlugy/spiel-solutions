import { navigate } from "@reach/router"
import e from "cors"
import React, { useState } from "react"
import EditNavbar from "../components/EditNavBar"
import LinkedFrom from "../components/LinkedFrom"

//usestate  setSpiel axios get by id

const Edit = props => {
    const [spiel,setSpiel]= useState({id:1, scriptName:"test",isHead:false,element:"Page",pageArr:[{id:1,name:"page 1",element:"Page"},{id:2,name:"page 2",element:"Page"},{id:6,name:"page 4",element:"Page"}], modalArr:[{id:4,name:"Modal 1",element:"Modal"},{id:5,name:"Modal 2",element:"Modal"}],snippet:"testsnippet",name:"test"})

    const onChangeHandler = e =>{
        setSpiel({...spiel,[e.target.name]:e.target.value})
    }
    return(

    <div className="editWrapper">
        <main>
        <button className="saveAndQuit" >Save and quit</button>
            <textarea onChange={onChangeHandler} name="snippet" cols="30" rows="10">{spiel.snippet}</textarea>
        <LinkedFrom spiel={spiel} />
        </main>
        <EditNavbar spiel={spiel}/>

    </div>
    );
}
export default Edit