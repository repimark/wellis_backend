import React, {useState} from "react";
import { Modal, Button, Form, FloatingLabel} from "react-bootstrap";
import { ReactSession } from "react-client-session";
import AddJob from "../AddJob";
function NewJobModal() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [unit, setUnit] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [state, setState] = useState("");
    const [creator, setCreator] = useState("");
    const user = ReactSession.get("username")
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const newJob = () => {
        //itt kell beküldeni POST-al a szervernek az adatok felvitelét! 
        if(!user) {alert("no no no")}
        setCreator(user);
        console.log(`${name} | ${unit} | ${startDate} | ${endDate} | ${state} | ${creator}`)

        setShow(false)
    }
  
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
                <Form.Control placeholder="Megnevezés" onChange={e => setName(e.target.value)}></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel label="Szervezeti egység" className="mb-3">
                <Form.Control placeholder="Szervezeti egység" onChange={e => setUnit(e.target.value)}></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel label="Kezdés" className="mb-3">
                <Form.Control placeholder="Kezdés" onChange={e => setStartDate(e.target.value)}></Form.Control>
            </FloatingLabel>

            <FloatingLabel label="Vége" >
                <Form.Control className="mb-2" placeholder="Vége" onChange={e => setEndDate(e.target.value)}></Form.Control>
            </FloatingLabel>
            
            {/* <Form.Label>Állapot</Form.Label> */}

            <Form.Select onChange={e => setState(e.target.value)}>
                <option value="0">Állapot</option>
                <option value="1">Aktív</option>
                <option value="2">Kész</option>
                <option value="3">Lejárt</option>
            </Form.Select>

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