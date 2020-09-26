import React, { useState } from "react";
import Axios from "axios";

const HeaderLoggedOut = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubimt = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", {
        username: username,
        password: password,
      });
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("appToken", response.data.token);
        localStorage.setItem("appUsername", response.data.username);
        props.setLoggedIn(true);
        console.log(props.setLoggedIn);
      } else {
        console.log("incorrect username/password");
      }
    } catch (e) {
      console.log("there was an error");
    }
  };
  return (
    <form onSubmit={handleSubimt}>
      <div>
        <div>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>

        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </div>
    </form>
  );
};

export default HeaderLoggedOut;
