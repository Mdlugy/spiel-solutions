import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Home = (props) => {
  const [spiels, setSpiels] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/spiels")
      .then((res) => setSpiels(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCardLink = (spielID) => {
    navigate(`/view/${spielID}`);
  };

  return (
    <>
      <div className="container mt-4" style={{ textAlign: "left" }}>
        <Link to={`/add`}>Add</Link>
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
                    }}
                    className="col-4"
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
