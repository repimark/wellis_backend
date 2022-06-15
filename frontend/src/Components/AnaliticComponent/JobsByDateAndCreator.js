import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  ListGroup,
  Badge,
  Card,
  Container,
  Stack,
  ListGroupItem,
} from "react-bootstrap";
import axios from "axios";

const JobsByDateAndCreator = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .post("http://localhost:2233/analitics/by/date", { date: startDate })
      .then((res) => {
        setData(res.data);
      });
  };
  let tableData = data.map((d, i) => (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      variant={"dark"}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{d.createdBy}</div>
      </div>
      <Badge bg="info" pill>
        {d.pc} db
      </Badge>
    </ListGroup.Item>
  ));

  return (
    <>
      <h3>A kiválasztott hónap aktív keresései</h3>
      <Stack direction="horizontal" className="p-5" style={{}}>
        <Container>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Button variant={"outline-light"} onClick={() => getData()}>
            Lekérdezés
          </Button>
        </Container>

        <ListGroup
          as="ol"
          className="w-100 mb-2"
          style={{ paddingRight: "20px" }}
        >
          {tableData.length > 0 ? (
            tableData
          ) : (
            <ListGroupItem
              as="li"
              className="d-flex justify-content-between align-items-start"
              variant={"dark"}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Az aktuális hónapban nincs nyitott keresés</div>
              </div>
            </ListGroupItem>
          )}
        </ListGroup>
      </Stack>
    </>
  );
};

export default JobsByDateAndCreator;
