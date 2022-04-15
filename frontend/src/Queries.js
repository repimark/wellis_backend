import React from "react";
import Users from "./Components/Users/Users";

const Queries = (props) => {
  return (
    <>
      {props.children}
      <Users />
    </>
  );
};
export default Queries;
