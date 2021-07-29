import axios from "axios";
import React, { useEffect, useState } from "react";
const LinkForm = (props) => {
  const { add, setAdd } = props;
  const [newspiel, setNew] = useState("");
  const [options, setOptions] = useState([]);
  const [chosen, setChosen] = useState({});
  const [loaded, setLoaded] = useState(false);
  // const [error,setError]=useState({})

  useEffect(() => {
    // if (props.element==="Page")
    // axios.get(`http://localhost:8000/api/spiels/scriptName/${props.spiel.scriptName}`)
    // .then(res => setoptions(res.data))
    // .catch(err => console.log(err))
    // if (props.element==="Modal")
    // axios.get(`http://localhost:8000/api/spiels/scriptName/${props.spiel.scriptName}`)
    // .then(res => setoptions(res.data))
    // .catch(err => console.log(err))
    axios
      .get(
        `http://localhost:8000/api/spiels/scriptName/${props.spiel.scriptName}`
      )
      .then((res) => {
        if (props.element === "Page") {
          let pagesArr = res.data;
          for(let i = 0; i < pagesArr.length; i++){
            for(let k = 0; k < props.spiel.pageArr.length; k++){
              if (props.spiel.pageArr[k].child_id === pagesArr[i]._id){
                pagesArr.splice(i,1)
            }}
          }
          setOptions(pagesArr.filter((element) => element.element === "Page").filter((element) => props.spiel._id !== element._id))
        } else if (props.element === "Modal") {
          let modalsArr = res.data;
          for(let i = 0; i < modalsArr.length; i++){
            for(let k = 0; k < props.spiel.modalArr.length; k++){
              if (props.spiel.modalArr[k].child_id === modalsArr[i]._id){
                modalsArr.splice(i,1)
            }}
          }
          setOptions(modalsArr.filter((element) => element.element === "Modal").filter((element) => props.spiel._id !== element._id))
        }
  })
      .then (console.log(options))

      .catch((err) => console.log(err));
    setLoaded(true);
  }, [props.spiel.scriptName, add, newspiel]);

  const handleNew = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/spiels/create", {
        element: props.element,
        name: newspiel,
        scriptName: props.spiel.scriptName,
      })
      .then(
        (res) => {
          console.log(res.data);
          axios
            .put(
              `http://localhost:8000/api/spiels/update/array/${props.spiel._id}`,
              {
                child_name: res.data.name,
                child_id: res.data._id,
                element: props.element,
              }
            )
            .then((res) => console.log(res))
            .then((res) => setAdd(!add))
            // .then(setOptions(...options, options.filter(filteredLinked => filteredLinked.name ===  )))
            .catch((err) => console.log(err));
        }
        // window.location.reload()
      )
      .catch((err) => console.log(err));

    //     axios.put(`http://localhost:8000/api/spiels/update/${props.spiel._id}/${props.spiel.element}/${chosen._id}/${chosen.name}`)
    // .then(res=>window.location.reload())
    // .catch(err => console.log(err))
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/spiels/update/array/${props.spiel._id}`, {
        child_name: chosen.name,
        child_id: chosen.id,
        element: props.element,
      })
      .then((res) => setAdd(!add))
      .catch((err) => console.log(err));
  };
  const onselectHandler = (e) => {
    setChosen({
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    });
    console.log(chosen);
  };
  return (
    <div>
      {!props.isHidden ? (
        <div>
          <form onSubmit={handleNew}>
            <label for="new">create new {props.element} : </label>
            <input
              name="new"
              onChange={(e) => setNew(e.target.value)}
              type="text"
            />
            <div>
              <input type="submit" value="create" className="btn btn-info" />
            </div>
          </form>

          {options && loaded ? (
            <form onSubmit={handleAdd}>
              <select onChange={onselectHandler}>
                <option />
                {options.map((option) => (
                  <option value={option._id}>{option.name}</option>
                ))}
              </select>{" "}
              <div>
                <input type="submit" value="Submit" className="btn btn-info" />
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default LinkForm;
