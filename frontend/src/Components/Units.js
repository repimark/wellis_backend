import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const Units = () => {
  const [units, setUnits] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:2233/units")
          .then((res) => {
              res.clone().json()
              console.log(res.clone().json())
            })
          .then((result) => {
            console.log(result);
            setUnits(result);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  

  const listOfUnits = units.map((unit) => {
    if (units == null) {
      return null;
    }
    <>
      <option key={unit.id}>{unit.name}</option>;
    </>;
  });
  return (
    <>
      <Form.Select
        size="sm"
        aria-label="Szervezeti egység kiválasztása"
        
      >
        {listOfUnits}
        
      </Form.Select>
    </>
  );
};
export default Units;
