import React from "react";

import HeaderLoggedOut from "./HeaderLoggedIn";
import HeaderLoggedIn from "./HeaderLoggedOut";

const Header = (props) => {
  return (
    <div className="top">
      {props.loggedIn ? (
        <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />
      ) : (
        <HeaderLoggedIn setLoggedIn={props.setLoggedIn} />
      )}
    </div>
  );
};

export default Header;
