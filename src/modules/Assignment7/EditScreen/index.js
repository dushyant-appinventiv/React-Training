import React from "react";
import EditForm from "../../../component/Assignment7/editForm";
import DisplayDetails from "../../../component/Assignment7/displayDetails";

let vehicleData = {};
let vehicleCategory;

export default function EditScreen() {
  vehicleData = JSON.parse(window.localStorage.getItem("data"));
  vehicleCategory = window.localStorage.getItem("dataCategory");

  return (
    <>
      <DisplayDetails category={vehicleCategory} data={vehicleData} />
      <EditForm category={vehicleCategory} data={vehicleData} />
    </>
  );
}
