// CardComponent.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Dcard = ({ title, imageSrc, num, year, serve, rate, place }) => {
  return (
    <Card sx={{ width: 520, height: 600 }} elevation={10}>
      <img
        src={imageSrc}
        alt={title}
        className="pics"
        style={{ height: 180, width: 180, marginTop: 35, marginLeft: 20 }}
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ marginTop: 8, fontWeight: "bolder", marginLeft: 20 }}
      >
        {title}
      </Typography>
      <CardContent>
        <center>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              marginTop: 5,
              fontSize: 25,
              textAlign: "left",
              color: "rgb(46, 37, 104)",
            }}
          >
            Service : {serve}
            <br></br>
            Contact : {num}
            <br></br>
            Experience : {year} years
            <br></br>
            Address : {place}
          </Typography>
        </center>
      </CardContent>
    </Card>
  );
};

export default Dcard;
