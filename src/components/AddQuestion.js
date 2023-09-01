import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const AddQuestion = () => {
     const [questionText, setquestionText] =useState('');
     const [questions, setQuestions] = useState([]);
     const [editingQuestionId, setEditingQuestionId] = useState(null);

     console.log("Questions before useEffect:", questions);

useEffect(() => {
  const storedQuestions = JSON.parse(localStorage.getItem("questionsData")) || [];
  console.log("Questions after fetching from local storage:", storedQuestions);
  setQuestions(storedQuestions);
}, []);

     const handleAddQuestion= async() => {

      const newQuestion = {
        id: Date.now(), 
        question: questionText,
      };
    
      
      setQuestions([...questions, newQuestion]);
    
     
      localStorage.setItem("questionsData", JSON.stringify([...questions, newQuestion]));
    
     
      setquestionText('');
        
     };
     const handleDeleteQuestion = (id) => {
      
      const updatedQuestions = questions.filter((question) => question.id !== id);
      setQuestions(updatedQuestions);
    
      
      localStorage.setItem("questionsData", JSON.stringify(updatedQuestions));
    };
    
    const handleEditQuestion = (id) => {
     
      const editedQuestion = questions.find((question) => question.id === id);
    
      if (editedQuestion) {
        
        setquestionText(editedQuestion.question);
        setEditingQuestionId(id);
      }
    };

    const handleSaveQuestion = (id, newQuestionText) => {
     
      const editedQuestion = questions.find((question) => question.id === id);
    
      if (editedQuestion) {
       
        const updatedQuestions = [...questions];
    
        
        const index = updatedQuestions.findIndex((question) => question.id === id);
    
       
        updatedQuestions[index].question = newQuestionText;
    
        
        setQuestions(updatedQuestions);
    
        
        localStorage.setItem("questionsData", JSON.stringify(updatedQuestions));
    
       
        setquestionText('');
        setEditingQuestionId(null);
      }
    };

    const handleCancelEdit = () => {
     setEditingQuestionId(null);
    };
     

     return(
        <div className="component-container">
          <form>
            <h3>Creating a Questionnaire</h3>
            <input
              type="text"
              value={questionText}
              onChange={(e) => setquestionText(e.target.value)}
            />
            <button onClick={handleAddQuestion}>Add</button>
            </form>
            <div className="question-display">
              <h3>List of Questions</h3>
              <div className="question-list">
                {questions.map((question) => (
                  <div key={question.id}> 
                  {editingQuestionId === question.id ? (
                    <div className="edit-container">
                      <input
                      type = "text"
                      value={questionText}
                      onChange={(e) =>setquestionText(e.target.value)}
                      />
                      <button
                      type="button"
                      onClick={() => handleSaveQuestion(question.id, questionText)}
                      >
                        <FontAwesomeIcon icon={faSave} className="save-icone"/>
                        
                      </button>
                      <button type="button" onClick={handleCancelEdit}>
                        <FontAwesomeIcon icon={faTimes} className="cancel-edit"/>
                      </button>

                    </div>
                  ) : (
                    <p>
                      {question.question}
                 
                
                  <span className="icon-container">
                <FontAwesomeIcon 
                icon={faEdit} 
                className="edit-icon" 
                onClick={()=> {

                  setquestionText(question.question)
                  handleEditQuestion(question.id)
                }
              }
                />
                <FontAwesomeIcon 
                icon={faTrash}
                className="delete-icon"
                onClick={() => handleDeleteQuestion(question.id)}
                 />
              </span>
                  </p>
                )}
              </div>
                ))}
            </div>
         </div>
        </div>
     );
};

export default AddQuestion;