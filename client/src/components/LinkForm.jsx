import React, { useState } from 'react'
const LinkForm=props=>{
    const [newspiel,setNew]=useState("")
    const [options,setoptions]=useState([{name:"test1",id:12},{name:"test2",id:13}])
    const [chosen,setChosen]=useState({})

    // useEffect-setoptions if (props.element==="Modal"){axios.get(element where modal) filter by props.spiel.modalarr} else{axios.get(element where page) filetr by props.spiel.pagearr}
    
    const handleNew= e =>{
        //axios.push ({name:newspiel,scriptname:props.spiel.scriptname})

        //element==="Modal"?.then axios.put({modalArr:[res]}):then axios.put({pageArr:[res]})
    }
    const handleAdd=e=>{
        //props.spiel.(if element=modal)modalArr (if element page )pageArr 
        //axios call set ^ chosen
        //element==="Modal"?.then axios.put({modalArr:[res]}):then axios.put({pageArr:[res]})
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