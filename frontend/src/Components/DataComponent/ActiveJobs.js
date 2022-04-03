import axios from "axios";
import React, { useState, useEffect } from "react";

const ActiveJobs = (props) => {
  const [activeJobs, setActiveJobs] = useState({});
  const getActiveJobs = () => {
      console.log(props.user)
    axios
      .post("http://localhost:2233/jobs/analitics/jobs/active", {
        creator: props.user,
      })
      .then((res) => { setActiveJobs(res.data[0])})
      
  };
  useEffect(() => {
    getActiveJobs();
  }, []);
  return (<>
    <h6>Aktív keresések: <b>{activeJobs.active} db</b></h6>
  </>);
};
export default ActiveJobs;
