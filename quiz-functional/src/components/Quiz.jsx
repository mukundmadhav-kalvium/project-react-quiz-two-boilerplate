import React, { useState } from "react";
import quizQuestion from "../resources/quizQuestion.json";
import './Quiz.css'

const Quiz = () => {
  const [quesNum, setQuesNum] = useState(0);
  const { question, optionA, optionB, optionC, optionD } =
    quizQuestion[quesNum];

  const prevQuestion = () => {
    quesNum > 0 ? setQuesNum(quesNum - 1) : setQuesNum(0);
  };

  const nextQuestion = () => {
    quesNum < 14 ? setQuesNum(quesNum + 1) : setQuesNum(14);
  };

  const reset = () => {
    const confirmation = confirm("Are you sure you want to quit ?");
    confirmation ? setQuesNum(0) : "";
  };

  return (
    <div className="main-container-quiz">
      <div className="quiz-container">
        <h1>Question</h1>
        <p id="question-number">{quesNum + 1} of 15</p>
        <p id="question">{question}</p>
        <div className="option-div">
          <button className="options">{optionA}</button>
          <button className="options">{optionB}</button>
          <button className="options">{optionC}</button>
          <button className="options">{optionD}</button>
        </div>
        <div className="navigation-options">
          <button className="nav-opt" id="previous-btn" onClick={prevQuestion}>
            Previous
          </button>
          <button className="nav-opt" id="next-btn" onClick={nextQuestion}>
            Next
          </button>
          <button className="nav-opt" id="quit-btn" onClick={reset}>
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
