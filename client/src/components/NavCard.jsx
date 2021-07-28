import { Link } from '@reach/router'
import React, { useEffect, useState } from 'react'
const NavCard = props=>{
    const [color,setColor]=useState("")
    useEffect(()=>{
    if(props.link.element==="Modal"){
        setColor('yellow')
    }
    if(props.link.element==="Page"){
        setColor('green')
    }}, [props.link.element])
    return(<div className="NavCard" style={{backgroundColor:color}} >
        <Link to={`/edit/${props.link._id}`}>{props.link.name}</Link>
    </div>)
}
export default NavCard