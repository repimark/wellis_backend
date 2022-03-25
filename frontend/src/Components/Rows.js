import React, { useEffect, useState, Component } from "react";
import { Form } from "react-bootstrap";
import JobsListRowDropDown from "./JobsListRowDropDown";

function Rows() {
  //const [isLoaded, setIsLoaded] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:2233/jobs")
    .then((res) => res.json())
    .then((response) => setJobs(response))
}, [])

let filteredData = jobs.filter((job) => {
    //return Object.values(job).join('').toLowerCase().includes("levay.alina")
    //console.log(job.createdBy.indexOf("levay.alina"))
    return (
    job.jobName.indexOf(search) > -1 ||       
    job.startDate.indexOf(search) > -1 ||
    job.endDate.indexOf(search) > -1 ||
    job.createdBy.indexOf(search) > -1 
    )
})

let allJobs = filteredData.map((job, i) => (
    <>
      <tr key={job.id}>
        <td>{i + 1}</td>
        <td>{job.jobName}</td>
        <td>{job.name}</td>
        <td>{job.startDate}</td>
        <td>{job.endDate}</td>
        <td>
          {job.jobStatus === 1
            ? "Aktív"
            : job.jobStatus === 2
            ? "Kész"
            : "Lejárt"}
        </td>
        <td>{job.createdBy}</td>
        <td><JobsListRowDropDown id={job.id} comment={job.comment}/></td>
      </tr>
    </>
  ));

  return (
    <>
    <tr>
        <td colSpan="8">
            <Form.Control onChange={e => setSearch(e.target.value)}></Form.Control>
        </td>
    </tr>
    {allJobs}
    </>
    );
}

export default Rows;
