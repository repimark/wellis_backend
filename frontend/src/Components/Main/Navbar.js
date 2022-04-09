import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./css/Menu.css";
import { ReactSession } from "react-client-session";
import NewUnitModal from "../Modals/NewUnitModal";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Wellis Cicatábla</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/jobs?c=">Keresések</Nav.Link>
              <Nav.Link href="">Kimutatások</Nav.Link>
              <Nav.Link href="/pivot">Lekérdezések</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <NavDropdown title="" drop={"start"} id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Jogosultságok</NavDropdown.Item>
                <NavDropdown.Item>
                  <NewUnitModal />
                </NavDropdown.Item>
                <NavDropdown.Item href="">Kijelentkezés</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>{ReactSession.get("username")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
