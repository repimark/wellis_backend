import React, {useState} from "react"
import { Modal, Button, Form} from "react-bootstrap"
function NewUnitModal() {
    const [show, setShow] = useState(false);
    const [unitName, setUnitName] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const newUnit = () => {
        //Itt kell posttal küldeni az api felé a létrehozást ! 
        console.log(`Unitname: ${unitName}`)
        setShow(false)
    }
  
    return (
      <>
        <Button variant="outline-success" onClick={handleShow}>
          Új szervezeti egység
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Új szervezeti egység létrehozása</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Label>Szervezeti egység neve</Form.Label>
              <Form.Control onChange={(e) => setUnitName(e.target.value)}></Form.Control>
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