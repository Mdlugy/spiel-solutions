import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { navigate } from "@reach/router";
import "./Home.css";
import ScriptInputModal from "../components/ScriptInputModal";

const Home = (props) => {
  const [spiels, setSpiels] = useState(null);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/spiels/find/heads")
      .then((res) => setSpiels(res.data))
      .catch((err) => console.log(err));
  }, [add]);

  const handleCardLink = (spielID) => {
    navigate(`/view/${spielID}`);
  };

  return (
    <>
      <div className="container mt-4" style={{ textAlign: "left" }}>
        <ScriptInputModal add={add} setAdd={setAdd} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: ".2em",
          height: "80vh",
          marginTop: "1em",
        }}
      >
        {spiels
          ? spiels.map((spiel, i) => {
              return (
                <>
                  <div
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "35px 35px 35px 35px",
                      height: "30%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "20%",
                    }}
                    className="script-card"
                    onClick={() => handleCardLink(spiel._id)}
                  >
                    <Card key={i} spiel={spiel} />
                  </div>
                </>
              );
            })
          : ""}
      </div>
    </>
  );
};
export default Home;
