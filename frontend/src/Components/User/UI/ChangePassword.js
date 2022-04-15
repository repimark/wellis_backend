import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form, FormControl } from "react-bootstrap";

const ChangePassword = (props) => {
    const [actualPass, setActualPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPassAgain, setNewPassAgain] = useState("");
    
  return (
    <>
      {props.children}
      <Container className="p-3 center">
        <div>
          <Form style={{width: "50vw"}}>
              <h2 style={{color: "white"}}>Új jelszó</h2>
            <div className="form-outline mb-4">
              <FloatingLabel label="Aktuális jelszó">
                <FormControl placeholder="Aktuális jelszó" />
              </FloatingLabel>
            </div>
            <div className="form-outline mb-4">
              <FloatingLabel label="Új jelszó">
                <FormControl placeholder="Új jelszó" />
              </FloatingLabel>
            </div>
            <div className="mb-4 form-outline">
              <FloatingLabel label="Új jelszó mégegszer" className="mb-3">
                <FormControl placeholder="Új mégegyszer" />
              </FloatingLabel>
            </div>
            <Button className="mb-4" variant="outline-info">Jelszó megváltoztatás</Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default ChangePassword;
