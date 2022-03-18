import React, { useEffect, useState } from "react";
import JobsListRowDropDown from "./JobsListRowDropDown";

function Rows() {
  //const [isLoaded, setIsLoaded] = useState(true);
  const [jobs, setJobs] = useState([]);
  let data = [
    {
      id: 19,
      unitId: 6,
      jobName: "Termékbevezető mérnök",
      startDate: "2021-01-14",
      jobStatus: 1,
      endDate: "2021-2-23",
      createdBy: "sarosi-bagi.nikoletta",
      comment: "Ez a dolgozó hamarosan fog belépni"
    },
    {
      id: 20,
      unitId: 22,
      jobName: "Minőségügyi vezető",
      startDate: "2021-02-04",
      jobStatus: 1,
      endDate: "2021-3-2",
      createdBy: "sarosi-bagi.nikoletta",
      comment: "Ez a dolgozó sosem fog belépni mert csincska"
    }
  ];
  //   useEffect(() => {
  //     const getData = async () => {
  //       fetch("http://localhost:2233/jobs")
  //         .then((res) => res.json())
  //         .then((result) => {
  //           console.log(result);
  //           setJobs(result);
  //           setIsLoaded(false);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //     getData()
  //   }, []);
  //setJobs(data)
//   if (jobs === null) {
//     setJobs(data);
//   }
  let allJobs = data.map((job, i) => (
    <>
      <tr key={job.id}>
        <td>{i + 1}</td>
        <td>{job.jobName}</td>
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
  return <>{allJobs}</>;
}

export default Rows;
