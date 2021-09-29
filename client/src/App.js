import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components//navbar/NavBar";
import Home from "./views/Home";
import Edit from "./views/Edit";
import One from "./views/One";
import LoginReg from "./views/LoginReg";
function App() {
  const [loggedinuser, setLoggedInUser] = useState({});
  const [add, setAdd] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/getloggedinuser", {
        withCredentials: true,
      })
      .then((res) => {
        setLoggedInUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
        <>
          <Navbar user={loggedinuser} />
          <Router>
            <LoginReg path="/" exact />
            <Home setAdd={setAdd} user={loggedinuser} path="/home" />
            <Edit path="/edit/:id" />
            <One path="/view/:id" />
          </Router>
        </>
    </div>
  );
}

export default App;
