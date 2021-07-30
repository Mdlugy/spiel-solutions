import axios from "axios";
import React, { useEffect, useState } from "react";
import Delete from "../components/Delete";
import EditNavbar from "../components/EditNavBar";
import LinkedFrom from "../components/LinkedFrom";

import { Link, navigate } from "@reach/router";
import Modal from "../components/Modal";

//usestate  setSpiel axios get by id

const titleStyle = {
  border: "1px solid lightgrey",
  height: "20%",
  borderRadius: "35px 35px 35px 35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const snippetStyle = {
  border: "1px solid lightgrey",
  height: "50%",
  borderRadius: "35px 35px 35px 35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const pagesStyle = {
  height: "20%",
  display: "flex",
  justifyContent: "space-around",
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
              className="col-9 mt-4"
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
            <div className="col-3"></div>
          </div>
          <div className="editWrapper">
            <div
              className="container mt-5"
              style={{ display: "flex", height: "80vh", gap: "2em" }}
            >
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
                    className="d-flex flex-column col-12 p-5"
                  >
                    <textarea
                      onChange={onChangeHandler}
                      value={spiel.snippet ? spiel.snippet : ""}
                      name="snippet"
                      style={{ height: "200px" }}
                    />
                    <div></div>
                  </form>
                </div>
                <div
                  className="col-12 mt-4"
                  style={{
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                    padding: "0em",
                  }}
                >
                  <span className="my-auto">
                    <i
                      onClick={() => window.history.back()}
                      className="bi bi-arrow-left"
                      style={{
                        fontSize: "2em",
                        color: "#0E6EFC",
                        cursor: "pointer",
                      }}
                    ></i>
                  </span>

                  {/* {spiel.pageArr.map((page, i) => {
                    return (
                      <div key={i} className="my-auto" style={{ width: "33%" }}>
                        <Link to={`/view/${page.child_id}`}>
                          {page.child_name}
                        </Link>
                      </div>
                    );
                  })} */}
                  <span className="my-auto">
                    <i
                      onClick={() => window.history.forward()}
                      className="bi bi-arrow-right"
                      style={{
                        fontSize: "2em",
                        color: "#0E6EFC",
                        cursor: "pointer",
                      }}
                    ></i>
                  </span>
                </div>
              </div>
              <div
                className="col-3 text-center mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <EditNavbar spiel={spiel} />
                <LinkedFrom add={add} setAdd={setAdd} spiel={spiel} />

                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  onClick={snippetSave}
                >
                  Save
                </button>
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
