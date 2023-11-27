import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PhotoUpload from "./PhotoUpload";

export default function SignUp() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handlePhotoUpload = (files) => {
    // Handle the uploaded files
    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("Email"),
      phoneNumber: data.get("Phone Number"),
      age: data.get("Age"),
      educationDetails: data.get("Education details"),
      expertiseIn: data.get("Expertise in"),
      experience: data.get("Experience"),
      state: data.get("State"),
      city: data.get("City"),
      pincode: data.get("Pincode"),
      selectedFiles,
    });
  };

  return (
    <div style={{ backgroundColor: "white" }} className="proper">
      <Container component="main" maxWidth="xs" style={{ marginTop: 0 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: "white",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Phone Number"
                  name="Phone Number"
                  label="Phone Number"
                  autoComplete="Phone Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Age"
                  name="Age"
                  label="Age"
                  autoComplete="Age"
                />
              </Grid>
              <Grid item xs={60}>
                <TextField
                  required
                  fullWidth
                  id="Education details"
                  name="Education details"
                  label="Education details"
                  autoComplete="Education details"
                />
              </Grid>
              <Grid item xs={60}>
                <TextField
                  required
                  fullWidth
                  id="Expertise in"
                  name="Expertise in"
                  label="Expertise in"
                  autoComplete="Expertise in"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Experience"
                  name="Experience"
                  label="Experience"
                  autoComplete="Experience"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="State"
                  name="State"
                  label="State"
                  autoComplete="State"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="City"
                  name="City"
                  label="City"
                  autoComplete="City"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Pincode"
                  name="Pincode"
                  label="Pincode"
                  autoComplete="Pincode"
                />
                <br></br>
                <br></br>
                <Button variant="contained">
                  <PhotoUpload className="photo" onUpload={handlePhotoUpload} />
                </Button>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="All the above provided details are true to my knowledge."
                />
              </Grid>
            </Grid>
            <Link to="/Log">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Log">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
        <center>
          <p>Copyright © Your Website 2023.</p>
        </center>
      </Container>
 </div>
);
}
