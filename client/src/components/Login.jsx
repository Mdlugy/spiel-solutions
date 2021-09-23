import React from "react";


const Login = () => {

    return (
        <div id="login" >
            <h2>Login Here</h2>
            <form method = 'POST' action='/api/login'>
                <div class="form-group">
                    <label>Email Address:</label>
                    <input type="text" class="form-control" placeholder="email here!" name='email'/>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" placeholder="password" name='password'/>
                </div>
                <input type="submit" value = 'Log in'/>
            </form>
        </div>
    );
};
export default Login;