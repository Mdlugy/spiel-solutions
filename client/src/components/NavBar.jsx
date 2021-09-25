import React from "react";
import { Link } from "@reach/router";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid navcontainer">
        <Link style={{ flex: "1" }} to="/">
          Home
        </Link>
        <Link style={{ flex: "1" }} to="/add">
          Add
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
