const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const db = mysql.createConnection({
  host: "localhost",
  user: "node_user",
  password: "secretPass19",
  database: "wellis",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/addunit", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Origin", "*");
  let unit = { name: req.body.name };
  let sql = "INSERT INTO units SET ?";
  console.log(unit);
  db.query(sql, unit, (err) => {
    if (err) {
      throw err;
    }
    res.send("OK - {unit}").status(200);
  });
});

app.post("/jobs/add", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Origin", "*");
    let job = { unitId: req.body.uid, jobName: req.body.name, startDate: req.body.sdate, jobStatus: req.body.status,  endDate: req.body.edate, createdBy: req.body.creator  };
    let sql = "INSERT INTO jobs SET ?";
    
    db.query(sql, job, (err) => {
      if (err) {
        throw err;
      }
      res.send("OK").status(200);
    });
  });

app.get("/units", (req, res) => {
  let sql = "SELECT * FROM units";
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(results);
  });
});
app.get("/jobs", (req, res) => {
  let sql = "SELECT * FROM jobs";
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(results);
  });
});
app.get("/jobs/find", (req, res) => {
  let sql = `SELECT * FROM jobs WHERE 1 `;
  if (req.query.felado) {
    sql += `AND createdBy LIKE '%${req.query.felado}%'`;
  }
  if (req.query.name) {
    sql += `AND jobName LIKE '%${req.query.name}%'`;
  }
  if (req.query.status) {
    sql += `AND jobStatus LIKE '%${req.query.status}%'`;
  }
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
});
app.post("/unit/add", (req, res) => {
  console.log(`${req}`);
  res.status(200).json(`${req.body.name}`);
});

app.listen(2233, () => {
  console.log("server started");
});
