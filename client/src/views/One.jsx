import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Modal from "../components/Modal";

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
  // justifyContent: "center",
  // alignItems: "center",
  fontSize: "21px",
  padding: "2.25em",
};
const pagesStyle = {
  height: "20%",
  display: "flex",
  justifyContent: "space-between",
  padding: "0em 5em",
};

const One = (props) => {
  const [spiel, setSpiel] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spiels/${props.id}`)
      .then((res) => setSpiel(res.data))
      .catch((err) => console.log(err));
  }, [props.id]);

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      {spiel ? (
        <>
          {" "}
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
              <Link to={`/edit/${spiel._id}`}>
                <i className="bi bi-pencil" style={{ fontSize: "1.5em" }}></i>
              </Link>
            </div>
            <div className="col-3"></div>
          </div>
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
                <p>{spiel.snippet}</p>
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

                {spiel.pageArr.map((page, i) => {
                  return (
                    <div key={i} className="my-auto" style={{ width: "33%" }}>
                      <Link to={`/view/${page.child_id}`}>
                        {page.child_name}
                      </Link>
                    </div>
                  );
                })}
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
                {/* <ScriptInputModal add={add} setAdd={setAdd} /> */}
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
              {spiel.modalArr.map((modal, i) => (
                <Modal key={modal.child_id} modals={modal} />
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default One;
