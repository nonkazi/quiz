import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [agreeCount, setAgreeCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [disagreeCount, setDisagreeCount] = useState(0);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questionsData")) || [];
    const storedAnswers = JSON.parse(localStorage.getItem("selectedAnswers")) || {};

    setQuestionCount(storedQuestions.length);

    console.log(storedAnswers);

    let agree = 0;
    let neutral = 0;
    let disagree = 0;

    for (const questionId in storedAnswers) {
      const answer = storedAnswers[questionId];
      if (answer === "agree") {
        agree += 1;
      } else if (answer === "neutral") {
        neutral += 1;
      } else if (answer === "disagree") {
        disagree += 1;
      }
    }
    setAgreeCount(agree);
    setNeutralCount(neutral);
    setDisagreeCount(disagree);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="box-container">
      <div className="box">
        <p>Number of Questions</p>
        <h2>{questionCount}</h2>
      </div>
      <div className="box">
        <p>Agreements</p>
        <h2>{agreeCount}</h2>
      </div>
      <div className="box">
        <p>Disagreements</p>
        <h2>{disagreeCount}</h2>
      </div>
      <div className="box">
        <p>Neutral</p>
        <h2>{neutralCount}</h2>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
