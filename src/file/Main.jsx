import React from "react";
import Painter from "./painter1.jpg";
import Clean from "./clean.webp";
import Electrician from "./elect.jpg";
//import Electric from "./elect1.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carp from "./carp.jpg";
//import Cook from "./cook.jpg";
import Gardener from "./gardener.webp";
import Paint from "./painter.jpg";
import Sofa from "./sofa.jpg";
import Pai from "./p123.jpg";
import cle from "./c2.jpg";
import Elect from "./e1.jpg";
import Pipe from "./pipe.webp";
import Care from "./care.jpeg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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

import { TextField } from "@mui/material";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Main = () => {
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
          "Painter",
          "Electrician",
          "House Cleaning",
          "Gardener",
          "Plumber",
          "Cook",
          "Driver"
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
    <div className="main">
      {/* <div className="part"> */}
      <div className="app-container1">
        <div className="half-page1">
          <h1>&emsp;&emsp;Home Service Experts</h1>
          &emsp;&emsp;&emsp;&emsp;
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            style={{ marginTop: 10, width: 500, borderRadius: 20 }}
          />
        </div>
        <div className="half-page1">
          <div className="p1">
            <img src={Pai} alt="p123" />
          </div>
          &emsp;
          <div className="p1">
            <img src={Elect} alt="elect" />
          </div>
          <center>
            <img src={cle} alt="clean" className="c2" />
          </center>
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div
        style={{
          backgroundColor: "white",
          fontWeight: "bold",
          fontSize: 30,
          color: "rgb(50, 42, 96)",
          height: 50,
        }}
      >
        <center style={{ fontSize: 40 }}>Offers for You</center>
      </div>
      <div className="grid1">
        <br></br>
        <div></div>
        <Card
          sx={{
            width: 400,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(210, 218, 248)",
            color: "rgb(63, 35, 119)",
            // fontWeight: "bold",
          }}
          className="card"
        >
          {/* <img src={Painter} alt="painter1" className="pics" /> */}
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <ul>
              <li><h5>
                Upto 60% off on<br></br> Home Cleaning
              </h5></li>
              <li className="cl"><img className="clean"
                src="https://static.vecteezy.com/system/resources/previews/003/418/487/original/super-maid-and-home-cleaning-equipment-flat-cartoon-character-vector.jpg"
              ></img>
              </li>  
              </ul>
            </Typography>
          </CardContent>
        </Card>{" "}
        &emsp;&nbsp;
        <Card
          sx={{
            width: 400,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(213, 247, 240)",
            color: "rgb(20, 112, 94)",
          }}
          className="card"
        >
          {/* <img src={Painter} alt="painter1" className="pics" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              
          <ul>
          <li>
          <h5>
            Flat 25% off on<br></br> Home Painting
          </h5>
          </li>
          <li className="cl"><img className="clean"
            src="https://media.istockphoto.com/id/1369215974/vector/man-planting-a-tree-in-garden.jpg?s=612x612&w=0&k=20&c=Iv6WaOsK7IaSM5Dg3mtwTO05LIgIrt1MjquTJPZ0I7U="
          ></img>
          </li>  
          </ul>
            </Typography>
          </CardContent>
        </Card>{" "}
        &emsp;&nbsp;
        <Card
          sx={{
            width: 400,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(251, 239, 221)",
            color: "rgb(119, 84, 30)",
          }}
          className="card"
        >
          {/* <img src={Painter} alt="painter1" className="pics" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          <ul>
          <li>
              <h5>
                upto 30% off on <br></br> Gardening
              </h5>
          </li>
          <li className="cl"><img className="clean"
            src="https://t3.ftcdn.net/jpg/02/25/52/30/360_F_225523060_yxyEKjRsBgxm8HPBvxkAWBceF2iIzFYo.jpg"
          ></img>
          </li>  
          </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div className="middle">
        <center>
          <h3 style={{ fontSize: 40 }}>Here's what you can do on Enliven</h3>
        </center>
        <div className="grid1">
          <br></br>
          <div></div>
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(218, 206, 231)",
              color: "rgb(63, 35, 119)",
              // fontWeight: "bold",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* Lowest rates */}
                <h5>
                  Upto 60% off on<br></br> Home Cleaning
                </h5>
              </Typography>
            </CardContent>
          </Card>{" "}
          &emsp;&nbsp;
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(213, 247, 240)",
              color: "rgb(20, 112, 94)",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h5>
                  Flat 25% off on<br></br> Home Painting
                </h5>
              </Typography>
            </CardContent>
          </Card>{" "}
          &emsp;&nbsp;
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(251, 239, 221)",
              color: "rgb(119, 84, 30)",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h5>
                  upto 30% off on <br></br> Gardening
                </h5>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid1">
        <br></br>
        <br></br>
        <br></br>
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Painter} alt="painter1" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Painter
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        &emsp;&emsp;
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Carp} alt="Carpenter" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Carpenter
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        &emsp;&emsp;
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Pipe} alt="Plumber" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Plumber
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        &emsp;&emsp;
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Care} alt="Child" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Care Taker
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        &emsp;&emsp;
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Gardener} alt="garden" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Gardener
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <div className="foottwo">
          <center>Follow us!</center>
          <ul className="footone">
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/fb.jpg"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/inst64.png"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/tw.jpg"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/li.jpg"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/yt.jpg"
              ></img>
            </li>
          </ul>
          <hr />
          <ul className="ft">
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <p>
            <center>
              Copyright ©2009-2023 ConnectionPoint Systems Inc. (CPSI) ·
              FundRazr® and the FundRazr® logo are registered trademarks of
              CPSI.
            </center>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
