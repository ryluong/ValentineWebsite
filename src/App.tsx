import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really? 🥺",
  "Ples? 🥺",
  "Hell even ash trevino woulda said yes by now 🤨🤨",
  "Bruh quit playin 😠...",
  "Kayla bffr 😡😡",
  "Crashout Incoming 🤯🤯...",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.max(noCount * 20 + 16, 20);

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <div className="success-container">
          <img
            alt="celebration"
            src="https://i.pinimg.com/originals/ae/0c/f1/ae0cf1db7954175fc47d0a8d9bbc5e0f.gif"
            className="celebration-image"
          />
          <div className="success-text"> See ya on the 15th! ❤️😗</div>
        </div>
      ) : (
        <div className="question-container">
          <img
            alt="valentine"
            src="https://i.pinimg.com/564x/67/e3/f5/67e3f50355510e59d2ac644a0c6f88b2.jpg"
            className="question-image"
          />
          <div className="valentine-text">Will you be my Valentine? 🥺🙇🏻‍♂️</div>

          <div className="button-container">
            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes 💖
            </button>
            <button onClick={handleNoClick} className="no-button">
              {getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
