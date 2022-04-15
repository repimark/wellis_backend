import { set } from "express/lib/application";
import React, { useEffect, useState, Component } from "react";
import { Form } from "react-bootstrap";
import JobsListRowDropDown from "./JobsListRowDropDown";
import { useLocation } from 'react-router-dom';
import { TimeTillStart } from "./DataComponent/TimeTillStart" 
import swal from "sweetalert";

function Rows(props) {
  //const [isLoaded, setIsLoaded] = useState(true);
  console.log(`asdkaésldjaésldk !!!!!!!! ${sessionStorage.getItem("user")}`)
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);
  let stat = `${props.status}`
  // const getData = () => {
  //   fetch("http://localhost:2233/jobs")
  //   .then((res) => res.json())
  //   .then((response) => setJobs(response))
  // }

  const getData = async () => {
    const response = await fetch("http://localhost:2233/jobs")
    const data = await response.json()

    const transformedData = data.map((d) => {
      return {
        id: d.id,
        jobName: d.jobName,
        unit: d.name,
        startDate:d.startDate,
        endDate:d.endDate,
        jobStatus:d.jobStatus,
        createdBy:d.createdBy,
        comment: d.comment
      }
    })
    setJobs(transformedData)
  }
  const search1 = useLocation().search;
  const query = new URLSearchParams(search1).get("c");

  useEffect(() => {
    getData()
    setReload(!reload)
}, [])
let userFilter = jobs.filter((job) => {
  if (query.lenght < 1) return job;
  return job.createdBy.indexOf(query) > -1
})
let firstfilter = userFilter.filter((job) => {
    return job.jobStatus == `${stat}`
})
let filteredData = firstfilter.filter((job) => {
    return (
    job.jobName.indexOf(search) > -1 ||       
    job.startDate.indexOf(search) > -1 ||
    job.unit.indexOf(search) > -1 ||
    job.endDate.indexOf(search) > -1 ||
    job.createdBy.indexOf(search) > -1 
    )
})

let allJobs = filteredData.map((job, i) => (
    <>
      <tr key={job.id}>
        <td>{i + 1}</td>
        <td>{job.jobName}</td>
        <td>{job.unit}</td>
        <td>{job.startDate}</td>
        <td>{TimeTillStart(job.startDate)}</td>
        <td>
          {job.jobStatus === 0
            ? "Aktív"
            : job.jobStatus === 1
            ? "Kész"
            : "Visszavont"}
        </td>
        <td>{job.createdBy}</td>
        <td><JobsListRowDropDown refreshFunction={getData} id={job.id} comment={job.comment} status={job.jobStatus}/></td>
      </tr>
    </>
  ));

  return (
    <>
    <tr>
        <td colSpan="8" key="1">
            <Form.Control onChange={e => setSearch(e.target.value)}></Form.Control>
        </td>
    </tr>
    {allJobs}
    </>
    );
}

export default Rows;
