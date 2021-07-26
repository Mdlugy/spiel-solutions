import React, { useState } from 'react'
import LinkCard from './LinkCard'
import LinkForm from './LinkForm'
const LinkedFrom=props=>{
    const [modalHidden,setModalHidden]= useState(true)
    const [pageHidden,setPageHidden]= useState(true)
    const togglepages = e=>{
        e.preventDefault();
        setPageHidden(!pageHidden)
        console.log(modalHidden)
    }
    const togglemodals = e=>{
        e.preventDefault();
        setModalHidden(!modalHidden)
        console.log(modalHidden)
    }
    return(
    <div>
        <button onClick={togglepages}>link/create page</button>
        {props.spiel.pageArr.map((link, i)=>{return< LinkCard link = {link}/>})}     
        <LinkForm isHidden={pageHidden} element={"Page"} spiel={props.spiel}/>
        <button onClick={togglemodals}>link/create modal</button>
        {props.spiel.modalArr.map((link, i)=>{return< LinkCard link = {link}/>})}     
        <LinkForm isHidden={modalHidden} element={"Modal"} spiel={props.spiel}/>
    </div>
    
    )

}
export default LinkedFrom