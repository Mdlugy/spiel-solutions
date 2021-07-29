import axios from "axios";
import React, { useEffect, useState } from "react";
const LinkForm = (props) => {
  const { add, setAdd } = props;
  const [newspiel, setNew] = useState("");
  const [options, setOptions] = useState(null);
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
          const pagesArr = res.data;
          setOptions(pagesArr.filter((element) => element.element === "Page").filter((element) => props.spiel._id !== element._id))
        let tempArr = []
        for(let i = 0; i < props.spiel.pageArr.length; i++){
          console.log(pagesArr.values)
          if (!pagesArr.includes(props.spiel.pageArr[i].child_id)){
            tempArr.push(props.spiel.pagesArr[i])
          }
        }
        setOptions(tempArr)
        }
        else if (props.element === "Modal") {
          const modalsArr = res.data;
          setOptions(
            modalsArr.filter((element) => element.element === "Modal").filter((element) => props.spiel._id !== element._id)
          );
        }
      })
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
                child_id: res.data.id,
                element: props.element,
              }
            )
            .then((res) => console.log(res))
            .then((res) => setAdd(!add))
            .catch((err) => console.log(err));
        }

      )
      .catch((err) => console.log(err));

  };

  const handleAdd = (e) => {
    if(chosen.name.length<1||chosen.id.length<1){return}
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
