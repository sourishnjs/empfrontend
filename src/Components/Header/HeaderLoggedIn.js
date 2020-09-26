import React from "react";
//import { Link } from "react-router-dom";

const HeaderLoggedIn = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("appToken");
    localStorage.removeItem("appUsername");
    props.setLoggedIn(false);
    console.log(props.setLoggedIn);
  };
  return (
    <div className="flex-row my-3 my-md-0">
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Log Out
      </button>
    </div>
  );
};

export default HeaderLoggedIn;
