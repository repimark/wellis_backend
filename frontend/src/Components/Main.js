import React, { useState, useEffect } from "react";

import MainPage from "./Main/MainPage";
import Menu from "./Main/Navbar";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import { ReactSession } from "react-client-session";
import ActiveJobs from "./DataComponent/ActiveJobs";
import DoneJobs from "./DataComponent/DoneJobs";

const Main = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("http://localhost:2233/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  let listOfusers = users.map((user) => (
    <>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title><h4>{user.username}</h4></Card.Title>
          <Card.Text>
            <hr/>
            <ActiveJobs user={user.username}/>
            <DoneJobs user={user.username} />
            <hr/>
          </Card.Text>
          <Button variant="dark" href={`/jobs?c=${user.username}`}>
            Keresések
          </Button>
        </Card.Body>
      </Card>
      </Col>
    </>
  ));
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Container style={{ width: "90vw" }}>
        <h1 style={{color:"white"}}>Dolgozói statisztikák</h1>
        <Row md={2} lg={3} xs={1} className="g-4">
        {listOfusers}
        </Row>
      </Container>
    </>
  );
};
export default Main;
