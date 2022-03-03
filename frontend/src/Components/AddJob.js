import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Units from "./Units";

const AddJob = () => {
  const [job, setJob] = useState(null);
  const [sdate, setSdate] = useState(null);
  const getUnits = () => {};
  return (
    <>
      <div>
        <Form.Group className="mb-3 w-50">
          <Units></Units>
          <Form.Control type="text" placeholder="Pozicíó"></Form.Control>
          <Form.Control type="text" placeholder="Kezdési idő"></Form.Control>
          <Form.Control type="text" placeholder="asd"></Form.Control>
          <Button variant="dark">Új keresés</Button>
        </Form.Group>
      </div>
    </>
  );
};
export default AddJob;
