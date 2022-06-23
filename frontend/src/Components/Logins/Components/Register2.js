import React, { useState } from "react";
import { Form, FloatingLabel, FormControl, Button } from "react-bootstrap";
import swal from "sweetalert";
import {
  checkPasswords,
  checkUser,
  RegisterController,
  validateEmail,
} from "../Controllers/RegisterController";
const Register2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const [email, setEmail] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
    console.log(
      checkPasswords(password, passAgain)
        ? checkUser(username)
          ? validateEmail(email)
            ? RegisterController(username, password, email)
              ? swal("Sikeres regisztráció")
              : swal("Sikertelen")
            : swal("Nem megfeleleő email formátum")
          : swal("Már létezik ez a felhasználónév")
        : swal("A jelszavak nem egyeznek")
    );
  };
  return (
    <>
      <section
        className="w-100 h-100 p-0"
        style={{ color: "white", padding: "0px", margin: "0px" }}
      >
        <div className="container-fluid" style={{ color: "white" }}>
          <div className="row">
            <div className="col-sm-7 text-black">
              <div className="px-5 ms-xl-4" style={{ color: "white" }}>
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></i>

              </div>

              <div
                className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
                style={{ color: "white" }}
              >
                
                <Form className="" style={{ width: "40rem", color: "black" }}>
                 
                 <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px", color: "white" }}
                  >
                    Regisztráció
                  </h3>
                 

                  <div className="form-outline mb-4" style={{}}>
                    <FloatingLabel label="Felhasználónév" className="mb-3">
                      <FormControl
                        placeholder="Felhasználónév"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>

                  <div className="form-outline mb-4" style={{}}>
                    <FloatingLabel label="Email" className="mb-3">
                      <FormControl
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>

                  <div className="form-outline mb-4">
                    <FloatingLabel label="Jelszó" className="mb-3">
                      <FormControl
                        type="password"
                        placeholder="Jelszó"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>

                  <div className="form-outline mb-4">
                    <FloatingLabel label="Jelszó megerősítés" className="mb-3">
                      <FormControl
                        type="password"
                        placeholder="Jelszó megerősítés"
                        onChange={(e) => setPassAgain(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>

                  <div className="pt-1 mb-4">
                    <Button
                      variant="info"
                      onClick={(e) => registerHandler(e)}
                      style={{
                        width: "10rem",
                        height: "3rem",
                        color: "blanchedalmond",
                      }}
                    >
                      Regisztráció
                    </Button>
                  </div>
                </Form>
                
              </div>
            </div>
            <div className="col-sm-5 px-0 d-none d-sm-block">
              <img
                src="https://st.depositphotos.com/1053746/4787/i/950/depositphotos_47872419-stock-photo-sculpture-of-adam-and-eve.jpg"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register2;
