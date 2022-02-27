import React, { useState } from "react";
import axios from "axios";

const AddNewUnit = () => {
  const [value, setValue] = useState(null);
  const sendValue = () => {
    console.log(value);
    newUnit(value);
  };
  const newUnit = (unitName) => {
    if (unitName) {
      try {
        axios.post(
          "http://localhost:2233/addunit",
          { name: unitName }
        ).then(res => {
            res.status == 200 ? console.log("ok") : console.log("error")
        })
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div>
        <input
          placeholder="Új szervezeti egység"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <button onClick={() => sendValue()}>Létrehozás</button>
      </div>
    </>
  );
}

export default AddNewUnit;
