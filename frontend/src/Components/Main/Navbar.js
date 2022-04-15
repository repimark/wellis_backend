import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./css/Menu.css";
import NewUnitModal from "../Modals/NewUnitModal";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { logoutSession } from "../Auth/AuthProvider";

const Menu = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const logoutHandler = () => {
    logoutSession();
    navigate("/");
  };
  //const tagProp =  return JSON.parse(sessionStorage.getItem("user")).isAdmin == 0 ? 'hidden' : 'visible';
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Wellis Cicatábla
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/jobs?c="
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Keresések
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/queries"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Kimutatások
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/pivot"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Lekérdezések
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="" drop={"start"} id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NewUnitModal />
                </NavDropdown.Item>
                { JSON.parse(sessionStorage.getItem("user")).isAdmin == 1 ? (<NavDropdown.Item>
                  <Link
                    to="/user/manage"
                    style={{ textDecoration: "none", color: "black"}}
                  >
                    Felhasználók kezelése
                  </Link>
                </NavDropdown.Item>
                ): null }

                <NavDropdown.Item>
                  <Link
                    disable
                    to="/user/changepass"
                    style={{ textDecoration: "none", color: "black" }}
                    //{JSON.parse(sessionStorage.getItem("user")).isAdmin == 0 ? disable : enable}
                    
                  >
                    Jelszó megváltoztatása
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  style={{ color: "red" }}
                >
                  Kijelentkezés
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                {JSON.parse(sessionStorage.getItem("user")).username}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
