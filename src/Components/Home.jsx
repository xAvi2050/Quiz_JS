import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h1>Welcome to the Most Brutal JavaScript Quiz</h1>
        <button onClick={() => navigate('/input')}>Next →</button>
      </div>
    </>
  )
}

export default Home