import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import logo from "../../../src/logo.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import AnaliticByUnits from "../AnaliticComponent/AnaliticByUnits";

const Pivot = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{color:"whitesmoke"}}>
      <h1>Kimutatások</h1>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      //Idek erül a kimutatás a darabszámos (dátumra)!
      <h2>Bizonyos honap(ok) aktív kereséseinek darabszáma személyenként</h2>
      
      <Button>Lekérdezés</Button>
      <p>Lekérdezés eredménye</p>
      <h2>
        Aktuális hónap aktív és lejárt kereséseinek kilistázása plusz adott
        évben lezárt keresések összesen.
      </h2>
      <h2>
        Ide kerülnek szervezeti egységenként az kész / aktív / lejárt keresések{" "}
      </h2>
      <AnaliticByUnits />
    </div>
  );
};

export default Pivot;
