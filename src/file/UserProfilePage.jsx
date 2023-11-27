// UserProfilePage.js
import React from 'react';
import UserProfileCard from './UserProfileCard';

const UserProfilePage = ({ userDetails }) => {
  return (
    <div>
      <h1>User Profile Page</h1>
      <UserProfileCard {...userDetails} />
      {/* You can add more content to the user profile page */}
    </div>
  );
};

export default UserProfilePage;
