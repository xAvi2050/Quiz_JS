import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Quiz.css'

const questions = [
  {
    Q_id: 1,
    title: 'Question 1',
    question: "What's the output of the following code?",
    code: `const obj = {
  a: 10,
  getA: () => this.a
};
console.log(obj.getA());`,
    options: [
      { id: 1, text: '10', isCorrect: false },
      { id: 2, text: 'undefined', isCorrect: true },
      { id: 3, text: 'null', isCorrect: false },
      { id: 4, text: 'Throws Error', isCorrect: false },
    ]
  },
  {
    Q_id: 2,
    title: 'Question 2',
    question: "Which option correctly describes the result of -",
    code: `typeof NaN`,
    options: [
      { id: 1, text: 'number', isCorrect: true },
      { id: 2, text: 'NaN', isCorrect: false },
      { id: 3, text: 'undefined', isCorrect: false },
      { id: 4, text: 'Object', isCorrect: false },
    ]
  },
  {
    Q_id: 3,
    title: 'Question 3',
    question: "What's the output of this recursive function?",
    code: `function mystery(x = 1, y = x++ + ++x) {
  if (x > 5) return y;
  return mystery(x, y + x);
}

console.log(mystery());`,
    options: [
      { id: 1, text: '18', isCorrect: false },
      { id: 2, text: '19', isCorrect: true },
      { id: 3, text: '17', isCorrect: false },
      { id: 4, text: '16', isCorrect: false },
    ]
  },
  {
    Q_id: 4,
    title: 'Question 4',
    question: "Which of the following statements is true?",
    code: `Object.is(NaN, NaN) === NaN === NaN;`,
    options: [
      { id: 1, text: 'true', isCorrect: false },
      { id: 2, text: 'false', isCorrect: true },
      { id: 3, text: 'NaN', isCorrect: false },
      { id: 4, text: 'undefined', isCorrect: false },
    ]
  },
  {
    Q_id: 5,
    title: 'Question 5',
    question: "What will be logged to the console?",
    code: `let x = 10;
(function() {
  console.log(x);
  let x = 20;
})();`,
    options: [
      { id: 1, text: '10', isCorrect: false },
      { id: 2, text: '20', isCorrect: false },
      { id: 3, text: 'undefined', isCorrect: false },
      { id: 4, text: 'ReferenceError', isCorrect: true },
    ]
  },
  {
    Q_id: 6,
    title: 'Question 6',
    question: "What is the result of this expression?",
    code: `true + false + true === 2`,
    options: [
      { id: 1, text: 'true', isCorrect: true },
      { id: 2, text: 'false', isCorrect: false },
      { id: 3, text: 'NaN', isCorrect: false },
      { id: 4, text: 'Throws Error', isCorrect: false },
    ]
  },
  {
    Q_id: 7,
    title: 'Question 7',
    question: "Which line of code will freeze all levels of a nested object?",
    code: `const obj = {
  name: "AI",
  meta: { powered: true }
};`,
    options: [
      { id: 1, text: 'Object.freeze(obj)', isCorrect: false },
      { id: 2, text: 'deepFreeze(obj)', isCorrect: true },
      { id: 3, text: 'JSON.freeze(obj)', isCorrect: false },
      { id: 4, text: 'Object.seal(obj)', isCorrect: false },
    ]
  },
  {
    Q_id: 8,
    title: 'Question 8',
    question: " What will this return?",
    code: `const x = {};
const y = { key: 'value' };
const z = { key: 'value' };

x[y] = 123;
x[z] = 456;

console.log(x[y]);`,
    options: [
      { id: 1, text: '123', isCorrect: false },
      { id: 2, text: '456', isCorrect: true },
      { id: 3, text: 'undefined', isCorrect: false },
      { id: 4, text: 'Throws Error', isCorrect: false },
    ]
  },
  {
    Q_id: 9,
    title: 'Question 9',
    question: "What is the output?",
    code: `let a = (b = 5);
console.log(typeof b);`,
    options: [
      { id: 1, text: 'number', isCorrect: true },
      { id: 2, text: 'undefined', isCorrect: false },
      { id: 3, text: 'object', isCorrect: false },
      { id: 4, text: 'Throws ReferenceError', isCorrect: false },
    ]
  },
  {
    Q_id: 10,
    title: 'Question 10',
    question: "What is the result of this operation?",
    code: `[] == ![]`,
    options: [
      { id: 1, text: 'true', isCorrect: true },
      { id: 2, text: 'false', isCorrect: false },
      { id: 3, text: 'undefined', isCorrect: false },
      { id: 4, text: 'Throws Error', isCorrect: false },
    ]
  }

];


const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userName = location.state?.name || 'Guest';

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const current = questions[currentQuestionIndex];
  
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const isAnswered = selectedAnswers.hasOwnProperty(current.Q_id);

  const handleOptionClick = (optionId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [current.Q_id]: optionId
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Final score calculation based on selected answers
      let finalScore = 0;
      questions.forEach(q => {
        const selectedOptionId = selectedAnswers[q.Q_id];
        const selectedOption = q.options.find(opt => opt.id === selectedOptionId);
        if (selectedOption?.isCorrect) {
          finalScore += 1;
        }
      });

      navigate('/result', { state: { score: finalScore, name: userName } });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };


  return (
    <div className="quiz">
      <div className="quiz-container">
        <h1>{current.title}</h1>
        <h2>{current.question}</h2>

        <div className="code">
          <pre><code>{current.code}</code></pre>
        </div>

        <div className="options">
          {current.options.map(option => (
            <button 
              key={option.id} 
              onClick={() => handleOptionClick(option.id)}
              disabled={isAnswered}
              className={selectedAnswers[current.Q_id] === option.id ? 'selected' : ''}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="button-group">
          {currentQuestionIndex > 0 && (
            <button id="prev" onClick={handlePrev}>← Prev</button>
          )}
          <button id="next" onClick={handleNext}>
            {currentQuestionIndex < questions.length - 1 ? 'Next →' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;