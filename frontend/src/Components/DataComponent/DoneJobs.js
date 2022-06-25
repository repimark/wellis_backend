import React, { useState, useEffect } from "react";
import axios from "../../API/axios";

const DoneJobs = (props) => {
  const [doneJobs, setDoneJobs] = useState({});
  let currentDate = new Date();
  const getDoneJobs = () => {
    axios
      .post("jobs/analitics/jobs/done", {
        creator: props.user,
        date: currentDate.toISOString().split("T")[0],
      })
      .then((res) => {
        setDoneJobs(res.data[0]);
      });
  };
  useEffect(() => {
    getDoneJobs();
  }, []);
  return (
    <>
      <h6>Idén lezárt keresések: <b>{doneJobs.done}db</b></h6>
    </>
  );
};

export default DoneJobs;
