import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import AddNewUnit from "./Components/AddNewUnit";
import AddJob from "./Components/AddJob";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:2233/jobs")
          .then((res) => res.json())
          .then((result) => {
            setJobs(result);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (!jobs) return null;
  const listOfJobs = jobs.map((job, i) => (
    <>
      <tr key={job.id}>
        <td>{i + 1}</td>
        <td>{job.jobName}</td>
        <td>{job.startDate}</td>
        <td>{job.endDate}</td>
        <td>
          {job.jobStatus == 1
            ? "Aktív"
            : job.jobStatus == 2
            ? "Kész"
            : "Lejárt"}
        </td>
        <td>{job.createdBy}</td>
      </tr>
    </>
  ));
  return (
    <div className="App">
      <h1>Jobs</h1>
      <AddNewUnit></AddNewUnit>
      <AddJob></AddJob>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Megnevezés</th>
            <th>Feladás dátuma</th>
            <th>Lezárs dátuma</th>
            <th>Állapot</th>
            <th>Feladó</th>
          </tr>
        </thead>
        <tbody>{listOfJobs}</tbody>
      </table>
    </div>
  );
}

export default App;
