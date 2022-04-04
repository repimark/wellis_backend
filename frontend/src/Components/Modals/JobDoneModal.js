import React, {useState} from "react"
import { Modal, Button, Form, Table} from "react-bootstrap"
import axios from "axios"
import swal from "sweetalert";

function JobDoneModal(props) {
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const jobDone = () => {
        //Itt kell posttal küldeni az api felé a létrehozást ! 
        //console.log(`Unitname: ${unitName}`)
        let unit = {jobId: props.jobId, comment: comment}
        axios.post("http://localhost:2233/jobs/done", unit).then(() => {setShow(false); swal("Sikeres!", "Sikeresen készre állítotad a keresést! ", "success"); props.refresh();})  
    }
  
    return (
      <>
        <Button variant="outline-success" onClick={handleShow}>
          Készre jelent.
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adj hozzá megjegyzést!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Label>Megjegyzés</Form.Label>
              <Form.Control onChange={(e) => setComment(e.target.value)}></Form.Control>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Mégsem
            </Button>
            <Button variant="success" onClick={() => jobDone()}>
              Készre jelent
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default JobDoneModal;