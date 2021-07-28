import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
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
  justifyContent: "center",
  alignItems: "center",
};
const pagesStyle = {
  height: "20%",
  display: "flex",
  justifyContent: "space-around",
};

const One = (props) => {
  const [spiel, setSpiel] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spiels/${props.id}`)
      .then((res) => setSpiel(res.data))
      .catch((err) => console.log(err));
  }, [props.id]);

  return (
    <>
      {spiel ? (
        <>
          {" "}
          <div className="container mt-4" style={{ textAlign: "left" }}>
            <Link to={`/edit/${spiel._id}`}>
              <i class="bi bi-pencil" style={{ fontSize: "1.5em" }}></i>
            </Link>
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
                <h4>{spiel.snippet}</h4>
              </div>
              <div style={pagesStyle}>
                <span className="my-auto">
                  <i
                    onClick={() => window.history.back()}
                    class="bi bi-arrow-left"
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
                      <Link to={`/view/${page.id}`}>{page.name}</Link>
                    </div>
                  );
                })}
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
                <Modal key={i} modals={modal} />
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
