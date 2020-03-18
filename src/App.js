import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';
import Logic from './Components/CalculatorLogic';

function App() {
  return(
    <div className = "bg-dark wrapper">
      <div className = "calculator">
        <Logic />
      </div>
    </div>
    
  )
}

export default App;
