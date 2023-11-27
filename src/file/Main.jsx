import React from "react";
import Painter from "./painter1.jpg";
import Clean from "./clener.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardComponent from "./CardComponent";
import Typography from "@mui/material/Typography";
import Carp from "./carp.jpg";
import { Link } from "react-router-dom";
import Gardener from "./gardener.webp";
import {
  Instagram,
  YouTube,
  Twitter,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
import Paint from "./p123.jpg";
import SearchableList from "./SearchableList";

import Pipe from "./pipe.webp";
import Care from "./care.jpeg";

import { Icon, TextField } from "@mui/material";
const Main = ({ contacts }) => {
  const sampleItems = [
    "Painter",
    "ELectrician",
    "Plumber",
    "Gardener",
    "Care Taker",
    "House cleaning",
    "Cook",
    "Driver",
  ];
  return (
    <div className="main">
      <div className="app-container1">
        <div className="half-page1">
          <h1 style={{ fontSize: 50, color: "rgb(71, 35, 126)" }}>
            &emsp;&emsp;Home Service Experts
          </h1>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            style={{ marginTop: 10, width: 500, borderRadius: 20 }}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2
            style={{
              fontSize: 40,
              fontStyle: "italic",
              color: "rgb(71, 35, 126)",
            }}
          >
            &emsp;&emsp;High-quality workmanship
          </h2>
          <h2
            style={{
              fontSize: 40,
              fontStyle: "italic",
              color: "rgb(71, 35, 126)",
            }}
          >
            &emsp;&emsp;at great prices.
          </h2>
        </div>
        <div className="half-page1">
          <div className="p1">
            <img src={Paint} alt="p123" style={{ width: 380, height: 300 }} />
            {/* <img
              src="https://i.pinimg.com/564x/7b/40/11/7b401117967f31e0d1072d818e8c2879.jpg"
              style={{ width: 380, height: 300 }}
            ></img> */}
          </div>
          &emsp;
          <div className="p1">
            {/* <img src={Electrician} alt="elect" /> */}
            <img
              style={{ width: 380, height: 300 }}
              alt="g"
              src="https://i.pinimg.com/564x/59/95/c5/5995c50a3b41d113e1705eaf431960bd.jpg"
            ></img>
          </div>
          <br></br>
          <br></br>
          <center>
            <img
              style={{ width: 420, height: 300 }}
              src={Clean}
              alt="clener"
              className="p2"
            />
            {/* <img
              style={{ width: 420, height: 320 }}
              src="https://i.pinimg.com/564x/bc/31/17/bc31170bbe6dce1e867ac4bf290eab11.jpg"
            ></img> */}
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
          marginTop: 20,
        }}
      >
        <center style={{ fontSize: 40 }}>Take a look</center>
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
          }}
          className="card"
        >
          <CardContent>
            <ul>
              <li style={{ fontSize: 23, fontWeight: "bold", marginTop: 0 }}>
                Want help in cleaning home!!
              </li>
              <li>
                <img
                  alt="h"
                  src="https://static.vecteezy.com/system/resources/previews/003/418/487/original/super-maid-and-home-cleaning-equipment-flat-cartoon-character-vector.jpg"
                  className="clean"
                ></img>
              </li>
            </ul>
          </CardContent>
        </Card>{" "}
        &emsp;&nbsp;
        <Card
          sx={{
            width: 420,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(213, 247, 240)",
            color: "rgb(20, 112, 94)",
          }}
          className="card"
        >
          <CardContent>
            <ul>
              <li style={{ fontSize: 23, fontWeight: "bold", marginTop: 0 }}>
                Can I help you with gardening?
              </li>
              <li>
                <img
                  alt="gm"
                  src="https://media.istockphoto.com/id/1369215974/vector/man-planting-a-tree-in-garden.jpg?s=612x612&w=0&k=20&c=Iv6WaOsK7IaSM5Dg3mtwTO05LIgIrt1MjquTJPZ0I7U="
                  className="clean"
                ></img>
              </li>
            </ul>
          </CardContent>
        </Card>{" "}
        &emsp;&nbsp;
        <Card
          sx={{
            width: 420,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(251, 239, 221)",
            color: "rgb(119, 84, 30)",
          }}
          className="card"
        >
          <CardContent>
            <ul>
              <li style={{ fontSize: 23, fontWeight: "bold", marginTop: 0 }}>
                Need a colourful Home?
              </li>
              <li>
                <img
                  src="https://t3.ftcdn.net/jpg/02/25/52/30/360_F_225523060_yxyEKjRsBgxm8HPBvxkAWBceF2iIzFYo.jpg"
                  alt=""
                  className="clean"
                ></img>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div className="middle">
        <center>
          <h3 style={{ fontSize: 40 }}>Here's what you can do on HomeRX</h3>
        </center>
        <div className="grid1">
          <br></br>
          <div></div>
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(233, 236, 240)",

              // fontWeight: "bold",
            }}
            className="card"
          >
            <CardContent className="contentContainer">
              <ul>
                <li>
                  <img
                    src="https://st.hzcdn.com/static_en-IN/homepage/visitorhp_icon_photos%402x.png"
                    alt="gj"
                    className="ex"
                  ></img>
                </li>
                <li style={{ fontSize: 20, fontWeight: "bold" }}>
                  Discover workers
                </li>
              </ul>
            </CardContent>
          </Card>{" "}
          &emsp;&nbsp;
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(233, 236, 240)",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent className="contentContainer">
              <ul>
                <li>
                  <img
                    alt="g"
                    src="https://st.hzcdn.com/static_en-IN/homepage/visitorhp_icon_professionals%402x.png"
                    className="ex"
                  ></img>
                </li>
                <li style={{ fontSize: 20, fontWeight: "bold" }}>
                  Browse pros
                </li>
              </ul>
            </CardContent>
          </Card>{" "}
          &emsp;&nbsp;
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(233, 236, 240)",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent>
              <ul>
                <li>
                  <img
                    alt="g"
                    src="https://st.hzcdn.com/static_en-IN/homepage/visitorhp_icon_pro_match%402x.png"
                    className="ex"
                  ></img>
                </li>
                <li style={{ fontSize: 20, fontWeight: "bold" }}>
                  Suggest pros for me
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div
        className="grid1"
        style={{
          backgroundColor: " rgb(232, 224, 240)",
          height: 300,
        }}
      >
        <Link to={"/Painting"}>
          <CardComponent title="Painter" imageSrc={Painter} />
        </Link>
        &emsp;&emsp;
        <Link to={"/Carpent"}>
          <CardComponent title="Carpenter" imageSrc={Carp} />
        </Link>
        &emsp;&emsp;
        <Link to={"/Plumb"}>
          <CardComponent title="Plumber" imageSrc={Pipe} />
        </Link>
        &emsp;&emsp;
        <Link to={"/Caring"}>
          <CardComponent title="Care Taker" imageSrc={Care} />
        </Link>
        &emsp;&emsp;
        <Link to={"/Garden"}>
          <CardComponent title="Gardener" imageSrc={Gardener} />
        </Link>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div>
        <div className="foottwo">
          <center>Follow us!</center>
          <ul className="footone">
            <li>
              <Link to="https://www.instagram.com/?hl=en">
                <Icon>
                  <Instagram />
                </Icon>
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/">
                <Icon>
                  <Facebook />
                </Icon>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/i/flow/login">
                <Icon>
                  <Twitter />
                </Icon>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/uas/login">
                <Icon>
                  <LinkedIn />
                </Icon>
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/playlist?list=PL0JNv-2mGIY4UwgvWG0L55LfjqkdRPnT3">
                <Icon>
                  <YouTube />
                </Icon>
              </Link>
            </li>
          </ul>
          <hr />
          <ul className="ft">
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <p style={{ color: "darkviolet" }}>
            <center>
              Copyright ©2009-2023 ConnectionPoint Systems Inc. (CPSI) · HomeRX
              All rights reserved.
            </center>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
