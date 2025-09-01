import React, { useState } from 'react'
import './Input.css'
import { useNavigate } from 'react-router-dom'

const Input = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const isFormValid = name.trim() !== '' && age.trim() !== '';
  return (
    <>
      <div className="input">
        <h1 style={{top: '250px',
          position: 'absolute', 
          fontSize: '70px', 
          color: '#fff', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
          textDecoration: 'underline',
          }}>Enter your details</h1>
        <input 
        id="name" 
        type="text"
        placeholder="Enter your name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
          id="age" 
          type="number" 
          placeholder="Enter your age" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button 
          onClick={() => navigate('/quiz', { state: { name, age } })} 
          disabled={!isFormValid}
        >
          Enter
        </button>
      </div>
    </>
  )
}

export default Input