import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const Units = () => {
  const [units, setUnits] = useState([]);
  const [selected, setSelected] = useState(null);

  setUnits([
    { id: 1, name: "Belföldi Ügyfélszolgálat" },
    { id: 2, name: "Beszerzés" },
    { id: 3, name: "Dabas Bemutató Terem" },
    { id: 4, name: "Ellátási Lánc" },
    { id: 5, name: "Export " },
    { id: 6, name: "Fejlesztési Osztály" },
    { id: 7, name: "Folyamatfejlesztés" },
    { id: 8, name: "Humánpolitika/HR" },
    { id: 9, name: "Informatikai Osztály" },
    { id: 10, name: "Kisker - Budapest, Budaörsi út" },
    { id: 11, name: "Kisker - Budapest, Pünkösdfürdői utca" },
    { id: 12, name: "Kisker - M3" },
    { id: 13, name: "Kontrolling" },
    { id: 14, name: "Központ" },
    { id: 15, name: "LEAN Osztály" },
    { id: 16, name: "Marketing" },
    { id: 17, name: "Minőségbiztosítás" },
    { id: 18, name: "Műhely" },
    { id: 19, name: "Műhely iroda" },
    { id: 20, name: "Nagyker Románia" },
    { id: 21, name: "Nagykereskedelem" },
    { id: 22, name: "Ózd" },
    { id: 23, name: "Pénzügy" },
    { id: 24, name: "Projekt" },
    { id: 25, name: "Raktár" },
    { id: 26, name: "proba" },
    { id: 27, name: "proba2" },
    { id: 28, name: "Valami új terület" },
    { id: 29, name: "Próba 21" },
    { id: 30, name: "assda" },
    { id: 31, name: "asdasd" },
    { id: 32, name: "asdasd" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:2233/units")
          .then((res) => {
            res.json();
            //console.log(res.body)
          })
          .then((data) => {
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const listOfUnits = units.map((unit) => {
    if (units === null) {
      return null;
    } else {
      return <option key={unit.id}>{unit.name}</option>;
    }
  });
  return (
    <Form.Select size="sm" aria-label="Szervezeti egység kiválasztása">
      {listOfUnits}
    </Form.Select>
  );
};
export default Units;
