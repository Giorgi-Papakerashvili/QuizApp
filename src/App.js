import React, { useState } from "react";
import './App.css'
import { questions } from "./Components/Questions";




function App(){
    const [showFinalResult,setFinalResult]=useState(false)
    const [score,setScore]=useState(0)
    const [currentQuestion,setQurrentQuestion]=useState(0)

    const optionClicked=(isCorrect)=>{
      if(isCorrect){
        setScore(score+1)             
      }
      if(currentQuestion+1<questions.length){
        setQurrentQuestion(currentQuestion+1)
      }else{
        setFinalResult(true)
      }      
    }
  

    const restartQuiz=()=>{
      setScore(0)
      setQurrentQuestion(0)
      setFinalResult(false)
    }
    
    return(
        <div className="App">
            <h2 className="currentScore">Current score:{score}</h2>
            {
                showFinalResult?
                <div className="final-results">
                <h1>Final Results</h1>
                <h2>{score} out of {questions.length} correct</h2>
                <h2>{score/questions.length*100}%</h2>
                <button onClick={()=>restartQuiz()}>Restars Quiz</button>
            </div>
            :
            <div className="question-card">
                <h2 className="outOf">question {currentQuestion+1} out of {questions.length}</h2>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
                <ul>
                    {questions[currentQuestion].options.map((option)=>{
                      return <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    })}
                </ul>
            </div>
}
        </div>
    )
}

export default App