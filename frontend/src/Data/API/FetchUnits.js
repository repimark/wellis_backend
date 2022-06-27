import React, { useEffect, useState } from "react";
import swal from "sweetalert"

function axios.getUnits() {
  const [units, setUnits] = useState([]);
  useEffect(() => {
    axios.get("/units")
      .then((response) => response.json())
      .then((res) => setUnits(res))
      .catch((err) => swal(`A következő hiba történt! : ${err}`));
  }, []);
  if (!units) {
    return <option>Nincsenek szervezeti egységek.</option>;
  }
  return (
    <>
      {units.map((unit) => (
        <option value={unit.id}>{unit.name}</option>
      ))}
    </>
  );
}
export default axios.getUnits;
