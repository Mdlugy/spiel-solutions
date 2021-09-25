import "./App.css";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components//navbar/NavBar";
import Home from "./views/Home";
import Edit from "./views/Edit";
import One from "./views/One";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <Edit path="/edit/:id" />
        <One path="/view/:id" />
      </Router>
    </div>
  );
}

export default App;
