import React from "react";
import Skype from "../../../images/skype.png";
import Email from "../../../images/mail.png";
import "./index.css";

function Footer() {
  return (
    <div className={"footerSection"}>
      <p>
        <img src={Skype} alt={"skype-logo"} />
        {"eluminoues_bold0"}
      </p>
      {"|"}
      <p>
        <img src={Email} alt={"email-icon"} />
        {"bb@aliuminoustechnologies.com"}
      </p>
    </div>
  );
}

export default Footer;
