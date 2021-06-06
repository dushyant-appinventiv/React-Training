import React from "react";
import "./header.scss";
import BrandImg from "../../../images3/brandlogo.jpeg";

function Header()
{
    return(
        <nav>
            <div className={"brandLogo"} >
                <img src={BrandImg} alt={"brand-logo"} />
            </div>
            <ul className={"navOptions"} >
                <hr />
                <li>buy bitcoin</li>
                <li>sell bitcoin</li>
                <li>blog</li>
                <li>about us</li>
            </ul>
            <div className={"navRedirects"} >
                <select name={"selectLan"} > 
                    <option selected defaultValue="" disabled > </option>
                    <option value={"EN"} > {"English"} </option>
                    <option value={"ESP"} > {"Spanish"} </option>
                </select>
                <button type={"button"} className={"loginBtn"} > {"LOGIN"} </button>
                <button type={"button"} className={"signupBtn"} > {"SIGN UP"} </button>
            </div>
        </nav>
    );
}

export default Header;