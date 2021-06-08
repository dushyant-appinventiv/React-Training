import React from "react";
import "./index.scss";

function QuestionCard(props) {
  return (
    <div className={"supportQuestionCard"}>
      <div className={"supportQuestionContent"}>
        <h2> {props.heading} </h2>
        <div className={"supportQuestionList"}>
          {props.questions.map((question) => (
            <a href={"www.google.com"}> {question} </a>
          ))}
        </div>
        <a href={"www.google.com"}> {"See all articles"} </a>
      </div>
    </div>
  );
}

export default QuestionCard;
