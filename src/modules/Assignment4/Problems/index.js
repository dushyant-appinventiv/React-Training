import React from "react";
import "./index.scss";
import QuestionCard from "../../../component/Assignment4/questionCard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { supportQuestions } from "../../../data";

function Problem() {
  return (
    <div className={"supportProblemsWrapper"}>
      <div className={"supportProblemHeader"}>
        <h2> {"Support"} </h2>
        <div className={"supportOtherOptions"}>
          <select>
            <option value={"ESP"}> {"ESP"} </option>
            <option value={"EN"} selected>
              {"EN"}
            </option>
          </select>
          <button type={"button"}>{"BACK TO XCOINS"}</button>
        </div>
      </div>
      <input type={"text"} placeholder={"Search Xcoins Support"} />
      <div className={"flexProblemsContainer"}>
        {supportQuestions.map((item) => (
          <QuestionCard
            key={item.id}
            heading={item.title}
            questions={item.questions}
          />
        ))}
      </div>
    </div>
  );
}

export default Problem;
