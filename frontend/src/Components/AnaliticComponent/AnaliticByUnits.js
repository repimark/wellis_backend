import React, { useState, useEffect } from "react";

const AnaliticByUnits = () => {
  const [result, setResult] = useState([]);
  const [active, setActive] = useState([{}]);
  const [done, setDone] = useState([{}]);
  const [undo, setUndo] = useState([{}]);

  const getAnalitics = () => {
    fetch("http://localhost:2233/analitics/1")
      .then((res) => res.json())
      .then((data) => {
        setResult(data)
      });
  };
  useEffect(() => {
    getAnalitics();
  }, []);
  let sorted = result.map((res) => {
      if(res.jobStatus == '0'){
        setActive(...res)
      }else if(res.jobStatus == '1'){
        setDone(...res)
      }else{
        setUndo(...res)
      }
    }
  );
  return (
    <>
      <h1> Hello analitics</h1>
      {sorted}
    </>
  );
};

export default AnaliticByUnits;
