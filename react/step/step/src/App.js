import { useState } from "react";

const messages = [
  "Learn React ⚛",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const step = 2;

  function handlOpen() {
    
  }

  return (
    <>
      <button className="close" onClick={handlOpen}>&times;</button>
      {isOpen && 
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      }
    </>
    
  )
}

export default App;
