import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { navigate } from "@reach/router";
import "./Home.css";
import ScriptInputModal from "../components/ScriptInputModal";

const Home = (props) => {
  const [spiels, setSpiels] = useState(null);
  const [add, setAdd] = useState(false);
  const [loggedinuser, setLoggedInUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/getloggedinuser", {
        withCredentials: true,
      })
      .then((res) => {
        setLoggedInUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [loggedinuser]);

  const handleScriptDelete = (spiel) => {
    console.log(spiel);
    axios
      .delete(
        `http://localhost:8000/api/spiels/script/delete/${spiel.scriptName}`
      )
      .then((res) => setAdd(!add))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/spiels/find/heads")
      .then((res) => setSpiels(res.data))
      .catch((err) => console.log(err));
  }, [add]);

  const handleCardLink = (spielID) => {
    navigate(`/view/${spielID}`);
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const logout = () => {
    axios.get("http://localhost:8000/api/users/logout", loggedinuser, {withCredentials:true})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    navigate("/")
  }

  return (
    <>
      <div className="container">
        <h3>Welcome, {loggedinuser.firstName} you made it</h3>
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
            style={{ fontSize: "30px", cursor: "pointer", color: "lightgray" }}
            onClick={navigateHome}
          ></i>
          <ScriptInputModal add={add} setAdd={setAdd} />
          <button onClick ={(e) => logout()}>Logout</button>
        </div>
        <div className="col-3"></div>
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
          backgroundColor: "darkgray",
        }}
      >
        {spiels
          ? spiels.map((spiel, i) => {
              return (
                <>
                  <div className="scriptCard col-2">
                    <i
                      class="bi bi-trash "
                      style={{
                        fontSize: "30px",
                        cursor: "pointer",
                        color: "#DC3545",
                      }}
                      onClick={(e) => handleScriptDelete(spiel)}
                    ></i>
                    <div
                      style={{
                        border: "1px solid lightgrey",
                        borderRadius: "35px 35px 35px 35px",
                        height: "30%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                      className="script-card"
                      onClick={() => handleCardLink(spiel._id)}
                    >
                      <Card add={add} setAdd={setAdd} key={i} spiel={spiel} />
                    </div>
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
