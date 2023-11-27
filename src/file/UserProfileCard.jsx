// UserProfileCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'; // Import Avatar component

const UserProfileCard = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  age,
  educationDetails,
  expertiseIn,
  experience,
  state,
  city,
  pincode,
  photo, // Include photo in the props
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          User Profile
        </Typography>
        {photo && (
          <Avatar alt={`${firstName} ${lastName}`} src={photo} sx={{ width: 100, height: 100, marginBottom: 2 }} />
        )}
        <Typography>
          <strong>Name:</strong> {firstName} {lastName}
        </Typography>
        <Typography>
          <strong>Email:</strong> {email}
        </Typography>
        <Typography>
          <strong>Phone Number:</strong> {phoneNumber}
        </Typography>
        <Typography>
          <strong>Age:</strong> {age}
        </Typography>
        <Typography>
          <strong>Education Details:</strong> {educationDetails}
        </Typography>
        <Typography>
          <strong>Expertise In:</strong> {expertiseIn}
        </Typography>
        <Typography>
          <strong>Experience:</strong> {experience}
        </Typography>
        <Typography>
          <strong>State:</strong> {state}
        </Typography>
        <Typography>
          <strong>City:</strong> {city}
        </Typography>
        <Typography>
          <strong>Pincode:</strong> {pincode}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
