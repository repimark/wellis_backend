import React, { useState, useRef } from "react";
import {
  DropdownButton,
  Dropdown,
  Popover,
  Overlay,
  Button,
  ButtonGroup,
  OverlayTrigger,
  Tooltip,
  Form
} from "react-bootstrap";

function JobsListRowDropDown(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [commentText, setCommentText] = useState("");
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const addComment = (event) => {
      console.log(commentText + " | " + event.target.id)
      //Itt kell meghívni a comment felülíró részt ! 
      setShow(!show)
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
            <Dropdown.Item href="#/action-1">Készre jelent</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Törlés (Visszavonás)
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Nem törlés és nem is kész.
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <OverlayTrigger placement="top" overlay={<Tooltip id="asd">{props.comment}</Tooltip>}>
          <Button onClick={handleClick} style={{ align: "left" }} ref={ref}>
            +
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{width: '250px'}}>
          <Popover.Header as="h3" style={{color: 'black'}}>Adj hozzá megjegyzést!</Popover.Header>
          <Popover.Body>
            <strong>Add meg a megjegzés szövegét!</strong>
            <Form.Control onChange={(e) => setCommentText(e.target.value)} type="text" id="commentText" />
            <Button id={props.id} onClick={(e) => addComment(e)}>Hozzáadás</Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
}
export default JobsListRowDropDown;
