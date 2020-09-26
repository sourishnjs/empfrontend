import React, { useState } from "react";
import Axios from "axios";
import "./LoggedOut.css";

const LoggedOut = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("/register", {
        username: username,
        email: email,
        password: password,
      });
      console.log("user created succesfully");
      alert("Employee Registered Succesfully");
    } catch (e) {
      console.log(e);
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="log">
      <h1>Welcome to SYSTRA</h1>
      <b>
        Vatika Mindscapes, Tower-B, 12/3, 9th. Floor, Mathura Road, NH-2
        Sector-27/D, Faridabad, Haryana -121013, India.
      </b>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <small>Username: </small>
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            type="text"
            placeholder="Pick a username"
            autoComplete="off"
          />

          <label>
            <small>Email: </small>
          </label>
          <input
            onChange={changeEmail}
            name="email"
            type="text"
            placeholder="you@example.com"
            autoComplete="off"
          />

          <div>
            <label>
              <small>Password: </small>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="designation">Choose your Designation:</label>

            <select name="designation" id="designation">
              <option value="volvo">Manager</option>
              <option value="saab">Lead</option>
              <option value="mercedes">Analyst</option>
              <option value="audi">Developer</option>
            </select>
          </div>
          <button
            type="submit"
            className="py-3 mt-4 btn btn-lg btn-success btn-block"
          >
            Register Systra Employee Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoggedOut;

//htmlFor="password-register" className="text-muted mb-1"
