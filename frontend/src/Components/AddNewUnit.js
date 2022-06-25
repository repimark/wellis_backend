import React, { useState } from "react";
import axios from "../API/axios";
import { Button, Form, Control } from "react-bootstrap";
import swal from "sweetalert";

const AddNewUnit = () => {
  const [value, setValue] = useState("");
  const sendValue = () => {
    console.log(value);
    newUnit(value);
  };
  const newUnit = (unitName) => {
    if (unitName) {
      try {
        axios
          .post("addunit", { name: unitName })
          .then((res) => {
            res.status === 200 ? console.log("ok") : console.log("error");
            swal({
                title: "Good job!",
                text: "New unit added!",
                icon: "success",
                button: "OK",
              });
              setValue(null)
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div>
        <Form.Group className="w-50 mb-3">
          <Form.Control
          className="mb-3"
            placeholder="Új szervezeti egység"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Form.Control>
          <Button variant="dark" onClick={() => sendValue()}>Létrehozás</Button>
        </Form.Group>
      </div>
    </>
  );
};

export default AddNewUnit;
