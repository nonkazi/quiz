import React, { useState, useEffect } from "react";


const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        
        const storedQuestions = JSON.parse(localStorage.getItem("questionsData")) || [];
        setQuestions(storedQuestions);
      }, []);
    
 

      const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prevAnswers) => ({
          ...prevAnswers,
          [questionId]: answer,
        }));
      
        
        localStorage.setItem("selectedAnswers", JSON.stringify({
          ...selectedAnswers,
          [questionId]: answer,
        }));
      };

  const handleSubmit = async () => {
    try {
      
      console.log("Selected answers:", selectedAnswers);
  
     
    } catch (error) {
      console.error(error);
    }
  };
  

 

  return (
    <div className="questionnaire-container">
      <h2>Questionnaire</h2>
      <div className="question-list">
        {questions.map((question) => (
          <div key={question.id} className="question-container">
            <p>{question.question}</p>
            <div className="answer-options">
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="agree"
                  onChange={() => handleAnswerChange(question.id, "agree")}
                />
                Agree
              </label>

              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="neutral"
                  onChange={() => handleAnswerChange(question.id, "neutral")}
                />
                Neutral
              </label>
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="disagree"
                  onChange={() => handleAnswerChange(question.id, "disagree")}
                />
                Disagree
              </label>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
