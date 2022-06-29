import React, { useEffect, useState } from "react";
import swal from "sweetalert"
import axios from "../../API/axios"

function FetchUnits() {
  const [units, setUnits] = useState([]);
  useEffect(() => {
    axios.get("/units")
      .then((res) => setUnits(res.data))
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
export default FetchUnits;
