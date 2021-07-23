import React from "react"
import Form from "../components/Form"

const Update = props => {
    return(

    <div className="UpdateWrapper">
        <h1>this is the Update page</h1>
        <Form page ={"Update"} id={props.id}/>
    </div>
    );
}
export default Update