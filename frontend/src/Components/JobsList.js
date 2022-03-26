import React from "react";
import Rows from "./Rows";
import {
  ButtonGroup,
  Container,
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
  Tabs,
  Tab
} from "react-bootstrap";
import NewJobModal from "./Modals/NewJobModal";
import NewUnitModal from "./Modals/NewUnitModal";

const JobsList = () => {
  return (
    <>
      <Container
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#121212",
          paddingTop: "20px",
        }}
      >
        <h1 style={{ color: "#fefefe" }}>Keresések</h1>
        <ButtonGroup
          style={{ textAlign: "left", left: "0px", display: "block" }}
        >
          <NewJobModal></NewJobModal>
          <NewUnitModal></NewUnitModal>
        </ButtonGroup>
        {/* <Table
          style={{ width: "80vw" }}
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
              <th>Szervezeti egység</th>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Keresési profil megadásának napja</Tooltip>}
              >
                <th>Keresés kezdete</th>
              </OverlayTrigger>
              <th>Keresés lezárása</th>
              <th>Állapot</th>
              <th>Feladó</th>
              <th>Műveletek</th>
            </tr>
          </thead>
          <tbody>
            <Rows />
          </tbody>
        </Table> */}
        <Tabs
          defaultActiveKey="active"
          id=""
          className="mb-3"
        >
          <Tab eventKey="active" title="Aktív">
            <Table
              style={{ width: "65vw" }}
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
                  <th>Szervezeti egység</th>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>Keresési profil megadásának napja</Tooltip>
                    }
                  >
                    <th>Keresés kezdete</th>
                  </OverlayTrigger>
                  <th>Keresés lezárása</th>
                  <th>Állapot</th>
                  <th>Feladó</th>
                  <th>Műveletek</th>
                </tr>
              </thead>
              <tbody>
                <Rows status="1"/>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="done" title="Kész">
            <Table
              style={{ width: "80vw" }}
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
                  <th>Szervezeti egység</th>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>Keresési profil megadásának napja</Tooltip>
                    }
                  >
                    <th>Keresés kezdete</th>
                  </OverlayTrigger>
                  <th>Keresés lezárása</th>
                  <th>Állapot</th>
                  <th>Feladó</th>
                  <th>Műveletek</th>
                </tr>
              </thead>
              <tbody>
                <Rows status="2"/>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="expired" title="Lejárt">
            <Table
              style={{ width: "80vw" }}
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
                  <th>Szervezeti egység</th>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>Keresési profil megadásának napja</Tooltip>
                    }
                  >
                    <th>Keresés kezdete</th>
                  </OverlayTrigger>
                  <th>Keresés lezárása</th>
                  <th>Állapot</th>
                  <th>Feladó</th>
                  <th>Műveletek</th>
                </tr>
              </thead>
              <tbody>
                <Rows status="3" />
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
export default JobsList;
