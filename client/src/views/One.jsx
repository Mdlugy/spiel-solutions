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
  const [speil, setSpiel] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spiels/${props.id}`)
      .then((res) => setSpiel(res.data[0]))
      .catch((err) => console.log(err));
  }, [reload]);

  //reload the view page when a page linki is clicked
  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <>
      {speil ? (
        <>
          {" "}
          <div className="container mt-4" style={{ textAlign: "left" }}>
            <Link to={`/update/${speil._id}`}>Edit</Link>
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
                <h4>{speil.name}</h4>
              </div>
              <div style={snippetStyle}>
                <h4>{speil.snippet}</h4>
              </div>
              <div style={pagesStyle}>
                {speil.pages.map((page) => {
                  return (
                    <>
                      <div className="mt-2" style={{ width: "33%" }}>
                        <Link to={`/view/${page.id}`} onClick={handleReload}>
                          {page.name}
                        </Link>
                      </div>
                    </>
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
              {speil.modals.map((modal) => {
                return (
                  <>
                    <Modal modals={modal} />
                  </>
                );
              })}
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
