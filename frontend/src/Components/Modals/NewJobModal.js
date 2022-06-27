import axios from "../../API/axios";
import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { ReactSession } from "react-client-session";
import FetchUnits from "../../Data/API/FetchUnits";
import AddJob from "../AddJob";

function NewJobModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [state, setState] = useState("");
  const [creator, setCreator] = useState("");
  const user = ReactSession.get("username");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newJob = () => {
    //itt kell beküldeni POST-al a szervernek az adatok felvitelét!
    if (!user) {
      alert("no no no");
    }
    setCreator(user);
    console.log(
      `${name} | ${unit} | ${startDate} | ${endDate} | ${state} | ${creator}`
    );
    let job = {
      unitId: unit,
      jobName: name,
      startDate: startDate,
      jobStatus: state,
      endDate: endDate,
      createdBy: user,
      comment: ""
    };
    axios.post("jobs/add", job).then(() => alert("Done"));
    setShow(false);
  };

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Új keresés
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Új keresés létrehozása</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Megnevezés" className="mb-3">
            <Form.Control
              placeholder="Megnevezés"
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </FloatingLabel>

          <FloatingLabel label="Szervezeti egység" className="mb-3">
            <Form.Select
              placeholder="Szervezeti egység"
              onChange={(e) => setUnit(e.target.value)}
            >
              <FetchUnits />
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel label="Kezdés" className="mb-3">
            <Form.Control
              placeholder="Kezdés"
              onChange={(e) => setStartDate(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Mégsem
          </Button>
          <Button variant="success" onClick={() => newJob()}>
            Létrehozás
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NewJobModal;
