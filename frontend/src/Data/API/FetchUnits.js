import React, { useEffect, useState } from "react";

function FetchUnits() {
  const [units, setUnits] = useState([])
  useEffect(() => {
    fetch("http://localhost:2233/units").then((response) => response.json()).then(res => setUnits(res));
  }, []);
  if(!units){return <option>Nincsenek szervezeti egységek.</option>}
  return (
    <>
        {units.map(unit => (<option value={unit.id}>{unit.name}</option>))}
    </>
  );
}
export default FetchUnits;