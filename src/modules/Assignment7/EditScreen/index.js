import React, { useState } from "react";
import EditForm from "../../../component/Assignment7/editForm";
import DisplayDetails from "../../../component/Assignment7/displayDetails";

export default function EditScreen() {
  let vehicleCategory = window.localStorage.getItem("dataCategory");

  const [vehicleData, setVehicleData] = useState(
    JSON.parse(window.localStorage.getItem("data"))
  );

  return (
    <>
      <DisplayDetails category={vehicleCategory} data={vehicleData} />
      <EditForm
        category={vehicleCategory}
        data={vehicleData}
        setVehicleData={setVehicleData}
      />
    </>
  );
}
