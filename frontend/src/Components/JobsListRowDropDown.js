import React, { useState, useRef } from "react";
import swal from "sweetalert";
import {
  DropdownButton,
  Dropdown,
  Popover,
  Overlay,
  Button,
  ButtonGroup,
  OverlayTrigger,
  Tooltip,
  Form,
} from "react-bootstrap";
import axios from "axios";
import AddCommentModal from "./Modals/AddCommentModal";

function JobsListRowDropDown(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [commentText, setCommentText] = useState("");
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const addComment = (event, id) => {
    console.log(commentText + " | " + id);
    //Itt kell meghívni a comment felülíró részt !
    axios.post('http://localhost:2233/jobs/comment', {jobId: id, jobComment: commentText}).then(() => swal("Done //TODO!!!"))
    setShow(!show);
  };
  const deleteRow = (id) => {
    swal({
      title: "Biztosan törölni szeretnéd a keresést?",
      text: "Biztosan törölni akarod? A folyamat nem visszavonható!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! A keresést törölted!", {
          icon: "success",
        });
        console.log(`törölni kívánt id : ${id}`);
        axios
          .post("http://localhost:2233/jobs/del", { jobId: id })
          .then((res) => console.log(`RESPONSE : ${res.data}`))
          .then(() => props.refreshFunction);
          //props.refreshFunction()
          props.refreshFunction(true)
      } else {
        swal("Huh! Visszavontad a törlést!");
      }
    });
  };
  const jobDone = (id) => {
    console.log(`készre kívánt állítani cucc : ${id}`);
    axios.post("http://localhost:2233/jobs/done", {"jobId": id}).then(() => {swal("Sikeres!", "Sikeresen készre állítotad a keresést! ", "success"); props.refreshFunction(true);})
  };
  return (
    <>
      <ButtonGroup>
        <Dropdown style={{ align: "left" }}>
          <Dropdown.Toggle
            variant="secondary"
            style={{ align: "left" }}
            id="dropdown-basic"
          >
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => jobDone(props.id)}>
              Készre jelent ({props.id})
            </Dropdown.Item>
            <Dropdown.Item onClick={() => deleteRow(props.id)}>
              Törlés (Visszavonás)
            </Dropdown.Item>
            <Dropdown.Item href="/jobs">
              Nem törlés és nem is kész.
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          <AddCommentModal id={props.id} refresh={props.refreshFunction()} actualComment={props.comment}/>

      </ButtonGroup>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{ width: "250px" }}>
          <Popover.Header as="h3" style={{ color: "black" }}>
            Adj hozzá megjegyzést!
          </Popover.Header>
          <Popover.Body>
            <strong>Add meg a megjegzés szövegét!</strong>
            <Form.Control
              onChange={(e) => setCommentText(e.target.value)}
              type="text"
              id="commentText"
            />
            <Button id={props.id} onClick={(e) => addComment(e, props.id)}>
              Hozzáadás
            </Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
}
export default JobsListRowDropDown;
