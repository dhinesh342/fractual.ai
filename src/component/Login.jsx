import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import userData from '../service/user';

import './Login.css';

export function Signup({cb}) {
    const [user, setUser] = useState({ name: "", mail: "", password: "" });

    function updateUser(e) {
        if (e.target.name === "mail") {
            let newUser = { ...user, mail: e.target.value }
            setUser(newUser);
        } else if (e.target.name === "name") {
            let newUser = { ...user, password: e.target.value }
            setUser(newUser);
        } else if (e.target.name === "password") {
            let newUser = { ...user, password: e.target.value }
            setUser(newUser);
        }
    }
    // console.log(userData);
    function signup() {
        userData.push(user);
    }

    return (
        <div id="signup-parent">
            <div className="signup-container">
                <TextField id="outlined-basic" name="name" label="Name" type="text" variant="outlined" onChange={updateUser} />
                <TextField id="outlined-basic" name="mail" label="Email" type="email" variant="outlined" />
                <TextField id="outlined-basic" name="password" label="Password" type="password" variant="outlined" />
                <Button variant="contained" onClick={cb}>Sign up</Button>
            </div>
        </div>
    );
}

function Login({cb,loginCb}) {
    const [user, setUser] = useState({ mail: "", password: "" });
    

    function updateUser(e) {
        if (e.target.name === "mail") {
            let newUser = { ...user, mail: e.target.value }
            setUser(newUser);
        } else {
            let newUser = { ...user, password: e.target.value }
            setUser(newUser);
        }
    }


    function login() {
        console.log("function called")
        if (userData.some((_user) => _user.mail === user.mail && _user.password == user.password)) {
            loginCb("logged");
            console.log("logged in")
        } else {
            console.log("wrong")
        }
        
    }

    return (
        <div>
            
                <div id="login-parent">
                    <div className="login-container">
                        <TextField id="outlined-basic" name="mail" label="Email" variant="outlined" type="email" onChange={updateUser} />
                        <TextField id="outlined-basic" name="password" label="Password" variant="outlined" type="password" onChange={updateUser} />
                        <Button variant="contained" onClick={login}>Login</Button>
                        <p>No account? <a onClick={cb} style={{ cursor: "pointer" }}> Sign up</a></p>
                    </div>

                </div>

        </div>
    );
}


export default Login;