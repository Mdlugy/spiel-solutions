import axios from "axios"
import { navigate } from "@reach/router"
const Delete = props => {
        axios.delete(`http://localhost:8000/api/spiels/delete/${props.id}`)
        .then(res => console.log("successfully deleted"),
        navigate("/edit/61004be551fe9b32901b56c0"))
        .catch(err => console.log(err))
    return null
}
export default Delete