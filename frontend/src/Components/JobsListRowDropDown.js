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
import JobDoneModal from "./Modals/JobDoneModal";

function JobsListRowDropDown({refreshFunction, id ,comment}) {
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
    axios.post('http://localhost:2233/jobs/comment', {jobId: id, jobComment: commentText}).then(() => swal("Done //TODO!!!").catch((err) => swal(`A következő hiba történt! : ${err}`)))
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
          .then(() => refreshFunction(true));
          //props.refreshFunction()
          //refreshFunction(true)
      } else {
        swal("Huh! Visszavontad a törlést!");
      }
    });
  };
  const jobDone = (id) => {
    //console.log(`készre kívánt állítani cucc : ${id}`);
    //axios.post("http://localhost:2233/jobs/done", {"jobId": id}).then(() => {swal("Sikeres!", "Sikeresen készre állítotad a keresést! ", "success"); refreshFunction(true);})
  };
  const undoJob = (id) => {
    console.log(`Visszavonni kívánt keresés : ${id}`)
    axios.post("http://localhost:2233/jobs/undo", {"jobId": id}).then(() => {swal("Sikeres!", "Sikeresen készre állítotad a keresést! ", "success"); refreshFunction();}).catch((err) => swal(`A következő hiba történt! : ${err}`))
  }
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
            <Dropdown.Item>
              <JobDoneModal jobId={id} refresh={refreshFunction}/>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => deleteRow(id)}>
              Törlés
            </Dropdown.Item>
            <Dropdown.Item>
              Szerkesztés
            </Dropdown.Item>
            <Dropdown.Item onClick={() => undoJob(id)}>
              Visszavonás
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          <AddCommentModal id={id} refresh={refreshFunction} actualComment={comment}/>

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
            <Button id={id} onClick={(e) => addComment(e, id)}>
              Hozzáadás
            </Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
}
export default JobsListRowDropDown;
