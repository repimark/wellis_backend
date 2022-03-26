import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  FloatingLabel,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
function AddCommentModal(props) {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addComment = () => {
    //Itt kell posttal küldeni az api felé a létrehozást !
    //console.log(`Unitname: ${unitName}`)
    //console.log(`${comment}, ${props.id}`)
    let data = { jobComment: comment, jobId: props.id };
    axios.post("http://localhost:2233/jobs/comment", data).then(() => {
      setShow(false);
      swal(
        "Megjegyzés hozzáadva",
        "Sikeresen megjegyzést adtál a kereséshez.",
        "success"
      );
      props.refresh(true)
    });
  };

  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{props.actualComment}</Tooltip>}
      >
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Keresési megjegyzés hozzáadása</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Megjegyzés" className="mb-3">
            <Form.Control
              placeholder="Megjegyzés"
              onChange={(e) => setComment(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Mégsem
          </Button>
          <Button variant="success" onClick={() => addComment()}>
            hozzáadás
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddCommentModal;
