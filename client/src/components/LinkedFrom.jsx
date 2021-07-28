import React, { useState } from 'react'
import LinkCard from './LinkCard'
import LinkForm from './LinkForm'
const LinkedFrom=props=>{
    const [modalHidden,setModalHidden]= useState(true)
    const [pageHidden,setPageHidden]= useState(true)

    const togglepages = e=>{
        e.preventDefault();
        setPageHidden(!pageHidden)
        console.log(props.spiel.pageArr)
    }
    const togglemodals = e=>{
        e.preventDefault();
        setModalHidden(!modalHidden)
        console.log(props.spiel.modalArr)
    }
    return(
    <div className="linked-from">
        <div className="LinkForm">
        <button onClick={togglepages}>link/create page</button>
        {props.spiel.pageArr.map((link, i)=>{return< LinkCard  element={"Page"} parent={props.spiel} link = {link}/>})}     
        <LinkForm className="LinkForm" isHidden={pageHidden} element={"Page"} spiel={props.spiel}/>
        
        <div className="LinkForm"></div>
        <button onClick={togglemodals}>link/create modal</button>
        {props.spiel.modalArr.map((link, i)=>{return< LinkCard  element={"Modal"} parent={props.spiel} link = {link}/>})}     
        <LinkForm className="LinkForm" isHidden={modalHidden} element={"Modal"} spiel={props.spiel}/>
        </div>
    </div>
    
    )

}
export default LinkedFrom