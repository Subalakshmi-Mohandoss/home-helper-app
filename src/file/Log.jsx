import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div className="app-cont">
      <div className="half-page" id="nav">
        .
      </div>
      <div className="half-page white-background">
        <center>
          <div className="box">
            <p style={{ color: "black", fontSize: 30 }}>Welcome to Enliven</p>
            <TextField
              id="standard-textarea"
              label="Username"
              placeholder="Username"
              multiline
              variant="standard"
              style={{ width: 200 }}
            />
            <br></br>
            <br></br>
            <TextField
              id="standard-textarea"
              label="Password"
              placeholder="Password"
              multiline
              variant="standard"
              style={{ width: 200 }}
            />
            <br></br>
            <br></br>
            <Link to="/">
              <Button variant="contained">Login</Button>
            </Link>
            <br></br>
            <br></br>
            New user? &nbsp;
            <Link to="/Signup">Create Account as Maid </Link>&emsp;
            <Link to="/Seeker">Create Account as Seeker</Link>
          </div>
        </center>
      </div>
    </div>
  );
};

export default login;
