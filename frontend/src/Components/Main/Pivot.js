import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import logo from "../../../src/logo.svg"

const Pivot = () => {
  return (
    <>
      <h1>Kimutatások</h1>
      //Idek erül a kimutatás a darabszámos (dátumra)!
      <h2>Bizonyos honap(ok) aktív kereséseinek darabszáma személyenként</h2>
      <Form.Control placeholder="Dátum"></Form.Control>
      <Button>Lekérdezés</Button>
      <p>Lekérdezés eredménye</p>
      <h2>
        Aktuális hónap aktív és lejárt kereséseinek kilistázása plusz adott
        évben lezárt keresések összesen.
      </h2>
      

      <h2>Ide kerülnek szervezeti egységenként az kész / aktív / lejárt keresések </h2>



      
    </>
  );
};

export default Pivot;
