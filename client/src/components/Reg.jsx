import React from "react";


const Reg = () => {

    return (
        <div id = "reg">
            <h2>Register Here</h2>
            <form method = 'POST' action='/user/register'>
                <div class="form-group">
                    <label >First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" name='first_name'/>
                </div>
                <div class="form-group">
                    <label >Last Name</label>
                    <input type="text" class="form-control"  placeholder="Last Name" name='last_name'/>
                </div>
                <div class="form-group">
                    <label >Email Address</label>
                    <input type="text" class="form-control"  placeholder="Email Address" name='email'/>
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password" class="form-control" placeholder="Password" name='password'/>
                </div>
                <div class="form-group">
                    <label >Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Confirm Password" name='confirm_password'/>
                </div>
                <input type="submit" value = 'Create'/>
            </form>
        </div>
    );
};
export default Reg;