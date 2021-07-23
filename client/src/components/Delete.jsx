import axios from "axios"
import { navigate } from "@reach/router"
const Delete = props => {
        axios.delete(`http://localhost:8000/api/objects/delete/${props.id}`)
        .then(res => console.log("successfully deleted"),
        navigate("/"))
        .catch(err => console.log(err))
    return null
}
export default Delete