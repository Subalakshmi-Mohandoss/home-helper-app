// CardComponent.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Cards = ({ title, imageSrc, num, year, serve, rate }) => {
  return (
    <Card sx={{ width: 520, height: 255 }} elevation={10} className="mycard">
      <ul>
        <li>
          <img
            src={imageSrc}
            alt={title}
            className="pics"
            style={{ height: 150, width: 150, marginTop: 35 }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ marginTop: 8, fontWeight: "bolder" }}
          >
            {title}
          </Typography>
        </li>
        <li>
          <CardContent>
            <center>
              <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.VU7tR2KP6P6PalYYD5sDlQHaHa&pid=Api&P=0&h=180"
                  style={{ width: 30, height: 30 }}
                ></img>
                &emsp;
                {rate}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  marginTop: 55,
                  fontSize: 20,
                  textAlign: "left",
                  color: "rgb(61, 7, 162)",
                }}
              >
                Service : {serve}
                <br></br>
                Contact : {num}
                <br></br>
                Experience : {year} years
                <br></br>
              </Typography>
            </center>
          </CardContent>
        </li>
      </ul>
    </Card>
  );
};

export default Cards;
