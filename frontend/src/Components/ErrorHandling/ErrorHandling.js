import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { getErrors } from "./ErrorHandlingController";
import AddErrorModal from "./AddErrorModal";

const ErrorHandling = (props) => {
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    getErrors().then((res) => setErrors(res.data));
  }, []);
  const errorsRows = errors.map((error, i) => (
    <tr>
      <td>{i + 1}</td>
      <td>{error.description}</td>
      <td>{new Date(error.date).toUTCString()}</td>
      <td>{error.state === 0 ? "Rendszerhiba" : "Felhasználói bejelentés"}</td>
    </tr>
  ));
  return (
    <>
      {props.children}
      <Container>
        <h1 style={{ color: "white" }} className="p-4">
          Hibajegyek
        </h1>
        <AddErrorModal />
        <Table variant="dark" striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Leírás</th>
              <th>Dátum</th>
              <th>Típus</th>
            </tr>
          </thead>
          <tbody>{errorsRows}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default ErrorHandling;
