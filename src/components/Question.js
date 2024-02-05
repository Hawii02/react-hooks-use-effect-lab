import React, { useState, useEffect } from "react";

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
    }, 1000);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeRemaining, onAnswered]);

  
  // function handleAnswer(isCorrect) {
  //   setTimeRemaining(10);
  //   onAnswered(isCorrect);
  // }

  // const { id, prompt, answers, correctIndex } = question;

  return (
    <div>
      <p>Time remaining: {timeRemaining}</p>
      <p>Question goes here</p>
    </div>
  );
}

  // return (
  //   <>
  //     <h1>Question {id}</h1>
  //     <h3>{prompt}</h3>
  //     {answers.map((answer, index) => {
  //       const isCorrect = index === correctIndex;
  //       return (
  //         <button key={answer} onClick={() => handleAnswer(isCorrect)}>
  //           {answer}
  //         </button>
  //       );
  //     })}
  //     <h5>{timeRemaining} seconds remaining</h5>
  //   </>
  // );


export default Question;
