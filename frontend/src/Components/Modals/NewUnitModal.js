import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
function NewUnitModal() {
  const [show, setShow] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [units, setUnits] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newUnit = () => {
    //Itt kell posttal küldeni az api felé a létrehozást !
    //console.log(`Unitname: ${unitName}`)
    let unit = { name: unitName };
    axios.post("http://localhost:2233/units/add", unit).then(() => {
      setShow(false);
      //swal()
    });
  };
  const getUnits = () => {
    fetch("http://localhost:2233/units")
      .then((res) => res.json())
      .then((data) => setUnits(data));
  };
  const deleteUnit = (id) => {
    axios
      .post("http://localhost:2233/units/delete", { unitId: id })
      .then((res) => {
        swal("success", `${res}`, "success")
        getUnits()
      });
  };
  useEffect(() => {
    getUnits();
  }, []);

  let allUnits = units.map((unit) => (
    <tr key={unit.id}>
      <td>{unit.name}</td>
      <td>
        <Button variant="danger" onClick={() => deleteUnit(unit.id)}>
          x
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Új szervezeti egység
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Új szervezeti egység létrehozása</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Szervezeti egység neve</Form.Label>
          <Form.Control
            onChange={(e) => setUnitName(e.target.value)}
          ></Form.Control>
          <Table>
            <thead>
              <td>Név</td>
              <td>törlés</td>
            </thead>
            <tbody>{allUnits}</tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Mégsem
          </Button>
          <Button variant="success" onClick={() => newUnit()}>
            Létrehozás
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NewUnitModal;
