import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    console.log("Submitted Name:", name);
  };

  return (
    <div>
      <center>
        <h1>USER DETAILS</h1>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            value={name}
            onChange={handleNameChange}
          />
          <br></br>
          <br></br>
          <br></br>
          <button style={{ backgroundColor: "lightcyan" }}>SUBMIT</button>
        </form>
        {submittedName && (
          <div>
            <br />
            <p>Submitted Name: {submittedName}</p>
          </div>
        )}
      </center>
    </div>
  );
};

export default Profile;
