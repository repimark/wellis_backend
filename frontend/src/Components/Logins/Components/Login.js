import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Stack,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <h1 style={{ color: "white" }}>Hello, this is the login page!</h1>
        <Stack gap={0} direction="horizontal">
          <div className="" style={{ backgroundColor: "whitesmoke" }}>
            <Form style={{ width: "40vw", height: "50vh" }}>
              <h2>Bejelentkezés</h2>
              <FloatingLabel label="Felhasználónév" className="mb-3">
                <Form.Control placeholder="Felhasználónév"></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Jelszó" className="mb-3">
                <Form.Control placeholder="Jelszó" />
              </FloatingLabel>
                <Button>Bejelentkezés</Button>
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
