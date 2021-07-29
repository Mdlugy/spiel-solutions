import axios from 'axios'
import React from 'react'
const LinkCard=props=>{
    const { add, setAdd } = props;
    const handleDelete = e=>
    
    {
        axios.put(`http://localhost:8000/api/spiels/delete/array/${props.parent._id}`,{
            child_id:props.link.child_id,
            element:props.element
        })
        .then(res=>setAdd(!add))

        .catch(err => console.log(err))
    }


    return(
    <div>
        {props.link.child_name}<>   </> 
        <button onClick={e=>handleDelete()}>Unlink</button>
    </div>
    )
}
export default LinkCard