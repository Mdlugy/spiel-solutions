import axios from 'axios'
import React, { useState } from 'react'
const LinkForm=props=>{
    const [newspiel,setNew]=useState("")
    const [options,setoptions]=useState([{name:"test1",id:12},{name:"test2",id:13}])
    const [chosen,setChosen]=useState({})
    // const [error,setError]=useState({})


    // useEffect-setoptions if (props.element==="Modal"){axios.get(element where modal) filter by props.spiel.modalarr} else{axios.get(element where page) filetr by props.spiel.pagearr}
    
    const handleNew= e =>{
        axios.post("http://localhost:8000/api/spiels/create", 
        {
            name:newspiel.name,
            scriptName:props.spiel.scriptName})
            .then(res=>setChosen(res))
            .catch(err => console.log(err))
            axios.put(`http://localhost:8000/api/spiels/update/${props.spiel._id}/${props.spiel.element}/${chosen._id}/${chosen.name}`)
        .then(res=>window.location.reload())
        .catch(err => console.log(err))
    }

    const handleAdd=e=>{
        axios.put(`http://localhost:8000/api/spiels/update/${props.spiel._id}/${props.spiel.element}/${chosen._id}/${chosen.name}`)
        .then(res=>window.location.reload())
        .catch(err => console.log(err))
    }
    const onselectHandler=e =>{
        
        setChosen({id:e.target.value,name:e.target.options[e.target.selectedIndex].text})
        console.log(chosen)
    }
    return(
    

<div>
    {!props.isHidden?<div>
    <form onsubmit={handleNew}>
        <label for="new">create new {props.element} : </label>
        <input name="new" onChange={(e)=>setNew(e.target.value)} type="text" />
    <input type="submit" value="Submit" className="btn btn-info" />
    </form>

    <form onsubmit={handleAdd}>
    <div><input type="submit" value="Submit" className="btn btn-info" /></div>
    <select onChange={onselectHandler}>
    <option/>
    {options.map((option) => (<option value={option.id}>{option.name}</option> ))}
    </select>
    </form></div>:""}
</div> 
   )
}
export default LinkForm