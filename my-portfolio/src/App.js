import React from "react";
import "./App.css";
import profilePicture from "./profilePicture.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={profilePicture}
          className="App-profile-picture"
          alt="profile"
        />
        <h1>Welcome to My Portfolio</h1>
        <p>Hello! My name is Mariami. I am a student.</p>
        <p>I specialize in Front-end development.</p>
      </header>
    </div>
  );
}

export default App;
