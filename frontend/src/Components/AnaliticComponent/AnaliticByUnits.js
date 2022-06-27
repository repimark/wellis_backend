import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "../../API/axios"

const AnaliticByUnits = () => {
  const [result, setResult] = useState([]);
  const [active, setActive] = useState([{}]);
  const [done, setDone] = useState([{}]);
  const [undo, setUndo] = useState([{}]);

  const getAnalitics = () => {
    axios.get("/analitics/1")
      .then((res) => res.data)
      .then((data) => {
        setResult(data)
      }).catch((err) => swal(`A következő hiba történt! : ${err}`));
  };
  useEffect(() => {
    getAnalitics();
  }, []);
  // let sorted = result.map((res) => {
  //     if(res.jobStatus == '0'){
  //       setActive(...res)
  //     }else if(res.jobStatus == '1'){
  //       setDone(...res)
  //     }else{
  //       setUndo(...res)
  //     }
  //   }
  // );
  return (
    <>
      <h1> Hello analitics</h1>
      {/*sorted*/}
    </>
  );
};

export default AnaliticByUnits;
