import React, { useState, useEffect } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import axios from "../../API/axios";

const ActiveAndClosedByTheMonth = () => {
  let currentDate = new Date();
  const [data, setData] = useState([]);

  const getData = () => {
    let content = { date: currentDate.toISOString().split("T")[0] };
    axios
      .post("analitics/by/month", content)
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);

  let mappedData = data.map((d, i) =>
    d.jobStatus !== 1 ? (
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        Idén lezárt keresések{" "}
        <Badge className="ms-auto" bg="info">
          {d.pc} db
        </Badge>
      </ListGroup.Item>
    ) : (
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        A hónapban aktív keresések <Badge bg="info">{d.pc} db</Badge>
      </ListGroup.Item>
    )
  );

  return <ListGroup className="w-50 mx-auto ">{mappedData}</ListGroup>;
};
export default ActiveAndClosedByTheMonth;
