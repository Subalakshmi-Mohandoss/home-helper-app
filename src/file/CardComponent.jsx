// CardComponent.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardComponent = ({ title, imageSrc }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 255, borderRadius: 8 }} className="card">
      <img src={imageSrc} alt={title} className="pics" />
      <CardContent>
        <center>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textDecoration: "none" }}
          >
            {title}
          </Typography>
        </center>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
