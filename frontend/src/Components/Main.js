import React from "react";

import MainPage from "./Main/MainPage";
import Menu from "./Main/Navbar";
import { Container } from "react-bootstrap";
import { ReactSession } from "react-client-session";

const Main = () => {
  return (
    <>
      <Container style={{ width: "90vw" }}>
        <h1>Hello there my friends</h1>
      </Container>
    </>
  );
};
export default Main;
