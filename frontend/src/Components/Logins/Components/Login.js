import React from "react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Stack,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";
import swal from "sweetalert";
import { LoginController } from "../Controllers/LoginController";
import { ReactSession } from "react-client-session";
import { useLocation, useNavigate } from "react-router-dom";
import { setSession } from "../Controllers/Session";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = async () => {
    let resp = await LoginController(username, password);
    console.log(resp);
    (await resp) === "Sikertelen bejelentkezés"
      ? swal("Sikertelen bejelentkezés!")
      : setAuth({ username:resp.username});
      sessionStorage.setItem("user", JSON.stringify(resp))
      navigate("/");
  };
  return (
    <>
      <Container>
        <h1 style={{ color: "white" }}>Hello, this is the login page!</h1>
        <Stack gap={0} direction="horizontal">
          <div className="" style={{ backgroundColor: "whitesmoke" }}>
            <Form style={{ width: "40vw", height: "50vh" }}>
              <h2>Bejelentkezés</h2>
              <FloatingLabel label="Felhasználónév" className="mb-3">
                <Form.Control
                  placeholder="Felhasználónév"
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Jelszó" className="mb-3">
                <Form.Control
                  placeholder="Jelszó"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <Button onClick={(e) => LoginHandler()}>Bejelentkezés</Button>
            </Form>
          </div>
          <div className="" style={{ width: "40vw", color: "white" }}>
            <h2>Helloka</h2>
          </div>
        </Stack>
      </Container>
    </>
  );
};
export default Login;
