import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
//initial API fetch
  useEffect(()=>{
    fetch ('http://localhost:4000/questions')
     .then(r=>r.json())
     .then((data)=>{setQuestions(data)})



  },[])
// handle form submission
function handleAddQusetion(newQuestion){
  fetch('http://localhost:4000/questions',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newQuestion)

  }
  
)
  .then(r=>r.json())
  .then((createdQuestion)=>{
    setQuestions([...questions, createdQuestion])
  })
}


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQusetion}/> : <QuestionList questions={questions} />}

    </main>
  );
}

export default App;
// POST /questions
// When the user clicks the 'New Question' button, a form will be 
// displayed for creating a new question. This form is 
// //already set up as a controlled form, so your responsibility will be to send this form data to our API when the form is submitted.

// For the API to work, you'll need to format your POST request like this:

// POST /questions

// Required Headers:
// { "Content-Type": "application/json" }

// Body:
// {
//   "prompt": string,
//   "answers": array of strings,
//   "correctIndex": integer
// }
// In addition to updating the form, you should display 
// the new question in the QuestionList component by updating state.

// // NOTE: because json-server doesn't have any validations, if you make
//  any mistakes and send the body of your request in the wrong format, 
// you'll need to manually delete the entry from the db.json file..