import { useLocation } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();

  const {score, name} = location.state || {};

  return (
    <div>
      <div className="result">
        <h1>Quiz Finished!</h1>
        <p id='greet'>Hey {name}</p>
        <p>Your score is {score} / 10</p>
      </div>
    </div>
  );
};

export default Result;