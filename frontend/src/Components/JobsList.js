import React from "react";
import Rows from "./Rows";
import { ButtonGroup, Container, Table, Button } from "react-bootstrap";
import NewJobModal from "./Modals/NewJobModal";
import NewUnitModal from "./Modals/NewUnitModal";

const JobsList = () => {
  return (
    <>
      <Container
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#f6f9fc",
          paddingTop: "20px",
        }}
      >
        <h1>Keresések</h1>
        <ButtonGroup style={{ textAlign: "left", left: '0px', display: 'block' }}>
          <NewJobModal></NewJobModal>
          <NewUnitModal></NewUnitModal>
        </ButtonGroup>
        <Table
          style={{ width: "90vw", align: "center" }}
          striped
          bordered
          hover
          size="sm"
          variant="dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Megnevezés</th>
              <th>Feladás dátuma</th>
              <th>Lezárs dátuma</th>
              <th>Állapot</th>
              <th>Feladó</th>
              <th>Műveletek</th>
            </tr>
          </thead>
          <tbody>
            <Rows />
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default JobsList;
