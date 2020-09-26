import React, { useState } from "react";
import Axios from "axios";

import LoggedOut from "./Components/LoggedOut/LoggedOut";
import Header from "./Components/Header/Header";
import LoggedIn from "./Components/LoggedIn/LoggedIn";

import "./App.css";

Axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
}

export default App;

//Boolean(localStorage.getItem("appToken"))
