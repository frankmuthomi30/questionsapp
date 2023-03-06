import React, { useState } from "react";
import './input.css'
const QuestionsApp = () => {
  // Initialize the state for questions as an empty array
  const [questions, setQuestions] = useState([]);

  // Initialize the state for the current question as an empty string
  const [currentQuestion, setCurrentQuestion] = useState("");






  // Add a new question to the questions array
  const addQuestion = (question) => {
    // Create a new array with the existing questions and the new question using concat
    const newQuestions = questions.concat(question);
    // Set the questions state to the new array
    setQuestions(newQuestions);
  };







  // Edit a question in the questions array at a given index
  const editQuestion = (index, editedQuestion) => {
    // Create a new array with the existing questions using slice
    const newQuestions = questions.slice();
    // Update the question at the specified index with the edited question
    newQuestions[index] = editedQuestion;
    // Set the questions state to the new array
    setQuestions(newQuestions);
  };







  // Delete a question from the questions array at a given index
  const deleteQuestion = (index) => {
    // Create a new array with the existing questions using filter
    const newQuestions = questions.filter((question, i) => i !== index);
    // Set the questions state to the new array
    setQuestions(newQuestions);
  };






  // Handle input changes for the current question
  const handleQuestionChange = (event) => {
    // Update the current question state with the new value
    setCurrentQuestion(event.target.value);
  };



// Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi cupiditate molestiae quo commodi nulla, eum repudiandae dignissimos asperiores blanditiis neque aliquid voluptas soluta eaque odio ipsum consequuntur ad labore.


  // Handle form submission for adding a new question
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Add the current question to the questions array
    addQuestion(currentQuestion);
    // Reset the current question state to an empty string
    setCurrentQuestion("");
  };




  return (
    <div className="container">
        <div className="header">
        <h1>CODING CAMP</h1>
         <h2>Questions</h2>
         {/* Add a form for adding a new question */}
      <form onSubmit={handleSubmit}>
        {/* Add an input field for the new question */}
        <input type="text" value={currentQuestion} onChange={handleQuestionChange} />
        {/* Add a submit button for adding the new question */}
        <button type="submit">POST</button>
      </form>
        </div>
 
      {/* Display the list of questions */}
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <div className="question"> {/* Display the question */}
            {question}
            </div>
           
           <div id="btns"> 
           {/* Add a button to edit the question */}
            <button onClick={() => editQuestion(index, prompt("Enter the edited question:"))}>
              Edit
            </button>
            {/* Add a button to delete the question */}
            <button onClick={() => deleteQuestion(index)}>Delete</button>
            </div>
            <button>Answer Question</button>
           
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default QuestionsApp;