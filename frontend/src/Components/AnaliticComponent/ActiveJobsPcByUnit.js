import React, { useState, useEffect } from "react";
import { Card, Table, ListGroup, Badge } from "react-bootstrap";
import swal from "sweetalert";

const ActiveJobsPcByUnit = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:2233/analitics/2")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => swal(`A következő hiba történt! : ${err}`));
  };

  useEffect(() => {
    getData();
  }, []);

  const tableData = data.map((d, i) => (
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
    variant={'dark'}
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{d.name}</div>
    </div>
    <Badge bg="info" pill>
      {d.pc} db
    </Badge>
  </ListGroup.Item>
  ));
  return (
    <Card
      bg="dark"
      text="light"
      className="mb-2 p-2 m-4"
      style={{ width: "30rem" }}
      border="info"
    >
      <Card.Header as="h5" style={{ borderColor: "grey" }}>
        Aktív keresések
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {/* <Table style={{color: "white"}}>
            <thead>
              <tr>
                <th>Szervezeti egység</th>
                <th>DB</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </Table> */}
          <ListGroup as="ol">
            {tableData}    
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ActiveJobsPcByUnit;
