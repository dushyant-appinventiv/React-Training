import React from "react";
import "./infoBox.css";
import Image from "./info-img.png";

function InfoBox() {
  return (
    <div className={"infoContainer"}>
      <div className={"content"}>
        <h1>
          {"Save your"} <span>{"money now."}</span>
        </h1>
        <p>
          {
            "Manage your company Bot in few easy steps, join out Pro plan to try a 360* experience of our service."
          }
        </p>
        <p>
          {
            "Start your 14 days of free Pro plan, you can always upgrade it or stay with the Lite version for free."
          }
        </p>
      </div>
      <div className={"infoImage"}>
<<<<<<< HEAD
        <img src={Image} alt={"infoImg"} height={"90%"} width={"70%"} />
=======
        <img src={Image} alt='infoImg' height='90%' width='70%' />
>>>>>>> 01db9afb010a263cf5abe2192c868183963b6b92
      </div>
    </div>
  );
}

export default InfoBox;
