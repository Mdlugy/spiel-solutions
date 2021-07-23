import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"

const Home = props => {
    const [allObjects,setAllObjects]= useState(null);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/objects")
        .then(res => setAllObjects(res.data))
        .catch(err => console.log(err))
    },[])
    return(

    <div >
        <h1>this is the home page</h1>
        {
            allObjects?
            allObjects.map((Object, i)=>{return<Card Object= {Object}/>}):""
        }
        
    </div>
    );
}
export default Home