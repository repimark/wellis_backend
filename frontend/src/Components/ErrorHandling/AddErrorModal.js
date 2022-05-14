import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import axios from "../../API/axios";
import swal from "sweetalert";
function AddErrorModal() {
  const [show, setShow] = useState(false);
  const [desctiption, setDesctiption] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newError = () => {
    let date = new Date()
    let newErrorData = { description: desctiption, state: 1, date:  date.toISOString().split("T")[0]};
    console.log(newErrorData)
    axios
      .post("error/add", newErrorData)
      .then(() => {
        setShow(false);
        //swal()
      })
      .catch((err) => swal(`A következő hiba történt! : ${err}`));
  };
  return (
    <>
      <Button variant="secondary" className="mb-2" onClick={handleShow}>
        Új szervezeti egység
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hibajegy létrehozása</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Hiba leírása</Form.Label>
          <Form.Control as="textarea" rows={5}
            onChange={(e) => setDesctiption(e.target.value)}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Mégsem
          </Button>
          <Button variant="success" onClick={() => newError()}>
            Létrehozás
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddErrorModal;
