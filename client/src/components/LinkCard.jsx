import axios from 'axios'
import React from 'react'
const LinkCard=props=>{
    
    const handleDelete = e=>
    {   e.preventDefault();
    axios.put(`http://localhost:8000/api/spiels/delete/array/${props.parent._id}`,{
            child_id:props.link.child_id,
            element:props.element
        })
        .then(res => console.log("successfully deleted"))
        .catch(err => console.log(err))
    }


    return(
    <div>
        {props.link.child_name}<>   </> 
        <button onClick={handleDelete}>Unlink</button>
    </div>
    )
}
export default LinkCard