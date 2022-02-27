import React, {useState} from "react";

const AddJob = () => {
  const [job, setJob] = useState(null)
  const [sdate, setSdate] = useState(null)
  const getUnits = () => {};
  return (
    <>
      <div>
        <input type="text" placeholder="Pozicíó"></input>
        <input type="text" placeholder="Kezdési idő"></input>
        <input type="text" placeholder="asd"></input>
        <button>Új keresés</button>
      </div>
    </>
  );
}
export default AddJob;
