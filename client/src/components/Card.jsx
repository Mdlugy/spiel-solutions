import React from "react"
import {Link} from "@reach/router"
const Card = props =>{
    return(<div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title"> {props.object.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.object.price}</h6>
      <p className="card-text">{props.object.description}</p>
    </div>
    <nav className="navbar navbar-light" style={{backgroundColor: '#ff9933'}}>
        <div className="container-fluid navcontainer">

        <Link style={{flex: '1'}} to={`/view/${props.object._id}`} >View</Link>
        <Link style={{flex: '1'}} to={`/update/${props.object._id}`}>Update</Link>
        <Link style={{flex: '1'}} to={`/delete/${props.object._id}`}  >Delete</Link>
        </div>
    </nav>
  </div>)
}
export default Card