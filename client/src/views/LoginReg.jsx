import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Reg from "../components/Reg";

const LoginReg = () => {


    return (
        <div id = "container">
            <Reg />
            <Login />
        </div>
    )
};
export default LoginReg;