import React from "react";

const LoggedIn = () => {
  return (
    <>
      <h2>
        Hello <strong>{localStorage.getItem("appUsername")}</strong>, your
        employment details with us, are as follows
      </h2>
      <p>Employee Code: {localStorage.getItem("appUsername")}</p>
      <p>Designation</p>
      <p>Bank Branch</p>
    </>
  );
};

export default LoggedIn;
