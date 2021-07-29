import React, { useState } from 'react'
import LinkCard from './LinkCard'
import LinkForm from './LinkForm'
const LinkedFrom=props=>{
    const {add, setAdd} = props;
    const [modalHidden,setModalHidden]= useState(true)
    const [pageHidden,setPageHidden]= useState(true)

    const togglepages = e=>{
        e.preventDefault();
        setPageHidden(!pageHidden)
    }
    const togglemodals = e=>{
        e.preventDefault();
        setModalHidden(!modalHidden)
        console.log(props.spiel.modalArr)
    }
    return(
    <div className="linked-from">
        <div className="LinkForm">
        {props.spiel.pageArr.map((link, i)=>{return< LinkCard add={add} setAdd={setAdd} element={"Page"} parent={props.spiel} link = {link}/>})}     

        <button onClick={togglepages}>link/create page</button>
                <LinkForm add={add} setAdd={setAdd} className="LinkForm" isHidden={pageHidden} element={"Page"} spiel={props.spiel}/>
        {props.spiel.element==="Modal" ?"":
        <div className="LinkForm">
        {props.spiel.modalArr.map((link, i)=>{return< LinkCard  element={"Modal"} parent={props.spiel} link = {link}/>})}     
                <button onClick={togglemodals}>link/create modal</button>
                <LinkForm add={add} setAdd={setAdd} className="LinkForm" isHidden={modalHidden} element={"Modal"} spiel={props.spiel}/>
            </div>}
        </div>
    </div>
    
    )

}
export default LinkedFrom