import React from "react";

function QuestionItem({ question, onDelete,correctAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleChange(event){
    const newCorrectIndex= parseInt(event.target.value);
    correctAnswerChange(id, newCorrectIndex);
   
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={()=>{onDelete(id)}}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
