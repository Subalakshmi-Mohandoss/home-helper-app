import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./AuthContext";
const Login = () => {
  const [name, userupdate] = useState("");
  const { user, dispatch } = useContext(AuthContext);
  const [password, passwordupdate] = useState("");
  const navigate = useNavigate();
  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Use Axios to make the HTTP request
        const response = await axios.get(
          `http://localhost:3000/users?name=${name}`
        );
        const resp = response.data;

        const user = resp.find((user) => user.name === name);

        if (!user) {
          toast.error("Please enter valid user");
        } else {
          const validUser = resp.find((user) => user.password === password);

          if (validUser) {
            toast.success("Login successful");
            sessionStorage.setItem("name", name);
            navigate("/");
          } else {
            toast.error("Invalid credentials");
          }
        }
      } catch (err) {
        toast.error("Login failed due to: " + err.message);
      }
    }
  };
  const validate = () => {
    let result = true;
    if (name === "" || name === null) {
      result = false;
      toast.warning("Please enter username");
    }
    if (password === "" || password == null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };

  return (
    <>
      <div className="app-cont">
        <div className="half-page" id="nav"></div>
        <div className="half-page white-background">
          <center>
            <div className="box">
              <p style={{ color: "black", fontSize: 40 }}>Welcome to HomeRX</p>
              <TextField
                id="standard-textarea-username"
                label="Username"
                placeholder="Enter your username"
                variant="standard"
                style={{ width: 300 }}
                onChange={(e) => userupdate(e.target.value)}
              />
              <br></br>
              <br></br>
              <TextField
                id="standard-textarea-password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="standard"
                style={{ width: 300 }}
                onChange={(e) => passwordupdate(e.target.value)}
              />
              <br></br>
              <br></br>
              <Button
                variant="contained"
                onClick={(e) => ProceedLogin(e)}
                style={{ backgroundColor: "rgb(58, 103, 104)" }}
              >
                Login
              </Button>
              <br></br>
              <br></br>
              New user? &nbsp;
              <Link to="/Signup" style={{ fontSize: 20 }}>
                Create Account as Helper{" "}
              </Link>
              &emsp;
              <Link to="/Seeker" style={{ fontSize: 20 }}>
                Create Account as Seeker
              </Link>
            </div>
          </center>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
