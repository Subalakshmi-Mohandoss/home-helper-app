import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import { borderRightColor } from "@mui/system";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navbar = () => {
  const [state, setState] = React.useState({
    hamburgerMenu: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <List className="items">
        {[
          "My Account",
          "profile",
          "Send email",
          "Drafts",
          "All mail",
          "Trash",
          "Spam",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* Apply fontWeight: 'bold' to make the text bold */}
              <ListItemText primary={text} sx={{ fontWeight: "bold" }} />
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
        Menu
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
          <Link to="/" color="black">
            <HomeIcon style={{ marginTop: "6px", width: 34, height: 34 }} />
          </Link>
        </li>
        <li>
          <Link to="/Log" style={{ fontWeight: "bold", color: "black" }}>
            <Button
              id="basic-button"
              onClick={handleClick}
              sx={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
            >
              Login
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/Signup" style={{ fontWeight: "bold", color: "black" }}>
            <Button
              id="basic-button"
              onClick={handleClick}
              sx={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
            >
              Sign Up
            </Button>
          </Link>
        </li>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "darkviolet", fontWeight: "bold", fontSize: 20 }}
          >
            Dashboard
          </Button>
          <Menu
            className="items"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
