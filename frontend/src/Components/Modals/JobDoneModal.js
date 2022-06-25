import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import axios from "../../API/axios";
import swal from "sweetalert";
import party from "party-js";

function JobDoneModal(props) {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const jobDone = (runButton) => {
    //Itt kell posttal küldeni az api felé a létrehozást !
    //console.log(`Unitname: ${unitName}`)
    party.confetti(runButton, {
      count: party.variation.range(20, 40),
      size: party.variation.range(1.5 , 2)
    });
    let unit = { jobId: props.jobId, comment: comment };
    axios
      .post("jobs/done", unit)
      .then(() => {
        setShow(false);
        swal("Sikeres!", "Sikeresen készre állítotad a keresést! ", "success");
        props.refresh();
      })
      .catch((err) => swal(`A következő hiba történt! : ${err}`));
  };

  return (
    <>
      <Button variant="" className="p-0" onClick={handleShow}>
        Készre jelent
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adj hozzá megjegyzést!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Megjegyzés</Form.Label>
          <Form.Control
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Mégsem
          </Button>
          <Button variant="success" onClick={(e) => jobDone(e.target)}>
            Készre jelent
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default JobDoneModal;
