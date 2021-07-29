import axios from "axios"
import { navigate } from "@reach/router"
const Delete = props => {
    const onDelete=e=>
    axios.delete(`http://localhost:8000/api/spiels/delete/${props.id}`)
            .then(navigate(`/edit/${props.redirect}`))
            .catch(err => console.log(err))

    return (<button onClick={e=>onDelete()} value="delete" className="btn btn-danger" >Delete</button>)
}
export default Delete