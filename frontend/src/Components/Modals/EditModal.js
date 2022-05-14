import axios from "../../API/axios";
import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { ReactSession } from "react-client-session";
import FetchUnits from "../../Data/API/FetchUnits";
import AddJob from "../AddJob";
import { useEffect } from "react";

function EditModal(props) {
  const id = props.jobId;
  const [show, setShow] = useState(false);
  const [job, setJob] = useState({})
  const [name, setName] = useState("");
//   const [unit, setUnit] = useState("");
  const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [state, setState] = useState("");
  const [creator, setCreator] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getJobData();
  }, []);

  const editData = async () => {
      let jsonData = {
          jobId: id,
          jobName: name,
          startDate: startDate,
          createdBy: creator
      }
      const response = await axios.post("/jobs/edit", jsonData)

  }
  const getJobData = async () => {
    console.log(id);
    let jobData = await axios.post("jobs/find/1", { jobId: id });
    console.log(jobData.data[0])
    setJob(jobData.data[0])
  };
  

  return (
    <>
      <Button variant="" className="p-0" onClick={handleShow}>
        Szerkesztés
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Új keresés létrehozása</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Megnevezés" className="mb-3">
            <Form.Control placeholder="Megnevezés" value={job && job.jobName} onChange={(e) => setName(e.target.value)}></Form.Control>
          </FloatingLabel>

          {/* <FloatingLabel label="Szervezeti egység" className="mb-3">
            <Form.Select placeholder="Szervezeti egység">
              <FetchUnits />
            </Form.Select>
          </FloatingLabel> */}

          <FloatingLabel label="Kezdés" className="mb-3">
            <Form.Control placeholder="Kezdés" value={job && job.startDate} onChange={(e) => setStartDate(e.target.value)}></Form.Control>
          </FloatingLabel>

          <FloatingLabel label="Feladó" className="mb-3">
            <Form.Control placeholder="Feladó" value={job && job.createdBy} onChange={(e) => setCreator(e.target.value)}></Form.Control>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Mégsem
          </Button>
          <Button variant="success" onClick={() => editData()}>Szerkesztés</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditModal;
