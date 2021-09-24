import axios from "axios";
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import Delete from "../components/Delete";
import LinkedFrom from "../components/LinkedFrom";

const titleStyle = {
  border: "1px solid lightgrey",
  minHeight: "100px",
  borderRadius: "35px 35px 35px 35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "ghostwhite",
};

const snippetStyle = {
  border: "1px solid lightgrey",
  minHeight: "50%",
  borderRadius: "35px 35px 35px 35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "aliceblue",
};

const Edit = (props) => {
  const [spiel, setSpiel] = useState({ pageArr: [], modalArr: [] });
  const [add, setAdd] = useState(false);
  const [scriptHead, setHead] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spiels/${props.id}`)
      .then((res) => {
        setSpiel(res.data);
        axios
          .get(
            `http://localhost:8000/api/spiels/find/oneHead/${res.data.scriptName}`
          )
          .then((res) => setHead(res.data._id))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [props.id, add]);

  const snippetSave = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/spiels/update/${spiel._id}`, {
        snippet: spiel.snippet,
      })
      .then(alert("save successfull"))
      .catch((err) => console.log(err));
  };
  const onChangeHandler = (e) => {
    setSpiel({ ...spiel, [e.target.name]: e.target.value });
    console.log(spiel.snippet);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      {spiel ? (
        <>
          <div className="container">
            <div
              className="col-12 pt-4"
              style={{
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
                padding: "0em 5em",
              }}
            >
              <i
                class="bi bi-house-fill"
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={navigateHome}
              ></i>

              {!spiel.isHead ? (
                <div>
                  <Delete id={props.id} redirect={scriptHead} />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div
                className="col-9 text-center"
                style={{ display: "flex", flexDirection: "column", gap: "1em" }}
              >
                <div style={titleStyle}>
                  <h4>{spiel.name}</h4>
                </div>
                <div style={snippetStyle}>
                  <form
                    onSubmit={snippetSave}
                    className="d-flex flex-column col-12 px-5"
                    style={{ height: "100%" }}
                  >
                    <textarea
                      onChange={onChangeHandler}
                      value={spiel.snippet ? spiel.snippet : ""}
                      name="snippet"
                      style={{
                        height: "70%",
                        marginTop: "1.5em",
                        fontSize: "21px",
                        padding: ".5em",
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary my-3"
                      onClick={snippetSave}
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-3 text-center mt-1">
                <LinkedFrom add={add} setAdd={setAdd} spiel={spiel} />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Edit;
