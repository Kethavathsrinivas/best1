import React, { useState } from 'react';
import './QuizComponent.css'; // Import the CSS file

const questions = [
  { id: 1, question: "The body's largest organ is the liver.", answer: false },
  { id: 2, question: "Herbivores eat animals.", answer: false },
  { id: 3, question: "Sharks are mammals.", answer: false },
  { id: 4, question: "The blue whale is the biggest animal to have ever lived.", answer: true },
  { id: 5, question: "Ants can hold up to 5,000 times their body weight.", answer: true },
  { id: 6, question: "A cheetah is the fastest animal on the planet.", answer: true },
  { id: 7, question: "Bats are blind.", answer: false },
  { id: 8, question: "The hummingbird egg is the world's smallest bird egg.", answer: true },
  { id: 9, question: "The blue whale is the biggest animal to have ever lived.", answer: true },
  { id: 10, question: "When exiting a cave, bats always go in the direction of the wind.", answer: false },
];

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  const percentage = Math.round((score / questions.length) * 100);
  let feedback = '';

  if (percentage >= 80) feedback = "Excellent!";
  else if (percentage >= 60) feedback = "Good job!";
  else if (percentage >= 40) feedback = "Not bad!";
  else feedback = "You're Below Avg. Try more free mock test and increase your grades.";

  return (
    <div className="quizs-background">
      <div className="quizs-container">
        <h1>Live Quiz! Get Set, Go!!</h1> 
        <div className="quizs-box">
          {!quizCompleted ? (
            <div className="question-box">
              <h2>Question No. {questions[currentQuestionIndex].id}</h2>
              <p>{questions[currentQuestionIndex].question}</p>
              <div className="button-container">
                <button
                  className={`answer-button ${selectedAnswer === true ? 'selected' : ''}`}
                  onClick={() => handleAnswer(true)}
                >
                  True
                </button>
                <button
                  className={`answer-button ${selectedAnswer === false ? 'selected' : ''}`}
                  onClick={() => handleAnswer(false)}
                >
                  False
                </button>
              </div>
              <button className="quiz-submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          ) : (
            <div className="result-box">
              <h2 style={{ color: 'darkblue' }}>{feedback}</h2>
              <p>Your score: {percentage}%</p>
              <p>Try more free mock test and increase your grades. Take free mock test here.</p>
              <button className="quiz-submit-button" onClick={handleRestart}>
                Start Again
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="enhance-box">
        <p>Don't miss this opportunity to enhance your skills and confidence, take free mock tests now!</p>
        <button className="take-test-button">Take Free Test</button>
      </div>
    </div>
  );
};

export default QuizComponent;
