import React, { useState } from "react";
import { Button, Form, Card, Stack } from "react-bootstrap";
import AnaliticByUnits from "../AnaliticComponent/AnaliticByUnits";
import ActiveJobsPcByUnit from "../AnaliticComponent/ActiveJobsPcByUnit";
import DoneJobsPcByUnit from "../AnaliticComponent/DoneJobsPcByUnits";
import UndoedJobsPcByUnit from "../AnaliticComponent/UndoedJobsPcByUnit";
import JobsByDateAndCreator from "../AnaliticComponent/JobsByDateAndCreator";
import ActiveAndClosedByTheMonth from "../AnaliticComponent/ActiveAndClosedByTheMonth";

const Pivot = (props) => {
  return (
    <>
      {props.children}
      <div style={{ color: "whitesmoke" }}>
        <h1>Kimutatások</h1>
        <JobsByDateAndCreator />
        <h3>
          Aktuális hónap aktív kereséseinek kilistázása plusz adott
          évben lezárt keresések összesen.
        </h3>
        <ActiveAndClosedByTheMonth/>
        <h2>Területenkénti keresések</h2>
        <Stack
          direction="horizontal"
          gap={0}
          className="ms-auto"
          style={{ display: "-webkit-inline-box"}}
        >
          <Stack direction="vertical" gap={0}>
            <ActiveJobsPcByUnit />
            <UndoedJobsPcByUnit />
          </Stack>
          <DoneJobsPcByUnit />
        </Stack>
        {/* <AnaliticByUnits /> */}
      </div>
    </>
  );
};

export default Pivot;
