import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Logos from "./logo.jpg";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import { useEffect } from "react";
// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

const Navbar = () => {
  const navigate = useNavigate();
  const [name, userupdate] = useState("");
  const { user, dispatch } = useContext(AuthContext);
  const [state, setState] = React.useState({
    hamburgerMenu: false,
  });
  useEffect(() => {
    let storedName = sessionStorage.getItem("name");
    if (storedName === "" || storedName === null) {
      navigate("/Log");
    } else {
      userupdate(storedName);
    }
  }, [navigate]);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3
        style={{ fontStyle: "italic", color: "rgb(71, 35, 126)", fontSize: 35 }}
      >
        Services
      </h3>
      <List className="items">
        {[
          "Painter",
          "Electrician",
          "House Cleaning",
          "Gardener",
          "Plumber",
          "Cook",
          "Driver",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                style={{
                  color: "darkviolet",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className="Nav">
      <Button
        onClick={toggleDrawer("hamburgerMenu", true)}
        style={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
      >
        Menu&emsp;&emsp;
        <img src={Logos} alt="logo" style={{ width: 60, height: 50 }}></img>
        &emsp;
        <h2
          style={{
            width: 45,
            height: 45,
            fontStyle: "italic",
            color: "rgb(71, 35, 126)",
          }}
        >
          HomeRX
        </h2>
      </Button>
      <Drawer
        anchor="hamburgerMenu"
        open={state.hamburgerMenu}
        onClose={toggleDrawer("hamburgerMenu", false)}
      >
        {list("hamburgerMenu")}
      </Drawer>
      <ul>
        <li>
          {user === null ? (
            <Link to="/Log" style={{ fontWeight: "bold", color: "black" }}>
              <Button
                id="basic-button"
                onClick={(e) => dispatch({ type: "LOGIN", payload: name })}
                sx={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
              >
                Login
              </Button>{" "}
            </Link>
          ) : (
            <ul>
              <li>
                <Link to="/Log" style={{ fontWeight: "bold", color: "black" }}>
                  <Button
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    style={{
                      fontWeight: "bolder",
                      color: "darkviolet",
                      fontSize: 15,
                      marginTop: 8,
                    }}
                  >
                    Logout
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <p
                  style={{
                    color: "darkviolet",
                    textDecoration: "none",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </p>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Signup" style={{ fontWeight: "bold", color: "black" }}>
            <Button
              id="basic-button"
              sx={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
            >
              Sign Up
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" style={{ fontWeight: "bold", color: "black" }}>
            <Button
              sx={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
            >
              About Us
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
