import React, { useState } from "react"
import NavCard from "./NavCard"
const EditNavbar = props => {
    const [links,setLinks]= useState(([{id:1,name:"page 1",element:"Page"},{id:2,name:"page 2",element:"Page"},{id:3,name:"page 3",element:"Page"},{id:4,name:"Modal 1",element:"Modal"},{id:5,name:"Modal 2",element:"Modal"},{id:6,name:"page 4",element:"Page"}]))
    
    //axios call for get all where scriptname

    return(

<nav className="nav flex-column">
    click to edit
    {links?
    links.map((link, i)=>{return< NavCard link = {link}/>}):""}
</nav>
    );
}
export default EditNavbar