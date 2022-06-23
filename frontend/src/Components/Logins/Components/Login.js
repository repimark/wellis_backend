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
  // const location = useLocation();
  // const from = "/";

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
      <Container fluid className="m-0 p-0 b-0" style={{width: "100vw!important", height:"100vh!important", backgroundImage: `url("https://i.ytimg.com/vi/ZwGBYGA6sx4/maxresdefault.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "Right" }}>
          <div className="" style={{ backgroundColor: `rgba(200,200,200,0.8)`, width: "45vw", height: "100vh" }}>
            
            <Form style={{ width: "40vw", height: "50vh", paddingTop: "70px", paddingLeft:"25px"}}>
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
      </Container>
    </>
  );
};
export default Login;
