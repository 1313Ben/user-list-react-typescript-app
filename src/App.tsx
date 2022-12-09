import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form action="">
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          type="text"
          name="name"
          value=""
        />

        <label htmlFor="userAge">Name:</label>
        <input
          id="userAge"
          type="number"
          name="age"
          value=""
        />

        <label htmlFor="userJob">Name:</label>
        <input
          id="userJob"
          type="text"
          name="job"
          value=""
        />

        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default App;
