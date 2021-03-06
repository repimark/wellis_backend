import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import ActiveJobs from "./DataComponent/ActiveJobs";
import DoneJobs from "./DataComponent/DoneJobs";
import swal from "sweetalert";

import axios from "../API/axios"

const Main = (props) => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get("/users")
      .then((response) => response.data)
      .then((data) => setUsers(data))
      .catch((err) =>  swal(`A következő hiba történt! : ${err}`));
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
    {props.children}
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
