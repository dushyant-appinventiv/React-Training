import React from "react";
import BrandLogo from "../../../images3/brandlogo.jpeg";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className={"footerHead"}>
        <div className={"footerBrand"}>
          <img src={BrandLogo} alt={"footer-brand"} />
        </div>
        <div className={"footLink"}>
          <h3>COMPANY</h3>
          <p className={"links"}>about us</p>
          <p className={"links"}>carrers</p>
        </div>
        <div className={"footLink"}>
          <h3>SUPPORT</h3>
          <p className={"links"}>help center</p>
          <p className={"links"}>contact</p>
        </div>
        <div className={"footLink"}>
          <h3>SOCIAL</h3>
          <p className={"links"}>blog</p>
          <p className={"links"}>twitter</p>
          <p className={"links"}>facebook</p>
        </div>
      </div>
      <ul>
        <li>{"Xcoins.com"}</li>
        <li className={"links"}>{"Terms of Service"}</li>
        <li className={"links"}>{"Privacy Policy"}</li>
        <li className={"links"}>{"Legal notice"}</li>
        <li className={"links"}>{"Sitemap"}</li>
      </ul>
      <p>
        {
          "Xcoins is a property of CF Technologies Ltd. Company. Please find the website pleasing and free for trade of bitcoins."
        }
      </p>
    </footer>
  );
}

export default Footer;
