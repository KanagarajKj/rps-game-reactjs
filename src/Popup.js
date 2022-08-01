import React, { useState } from 'react';

const Popup = ({
  myScore,
  computerScore,
  setComputerScore,
  setmyScore,
  setUserChoice,
  setcomputerChoice,
  setPlayerWin,
}) => {
  const [popUp, setPopUp] = useState(true);

  if (popUp === false) {
    setmyScore(0);
    setComputerScore(0);
    setUserChoice('');
    setcomputerChoice('');
    setPlayerWin('');
  }

  if (popUp) {
    return (
      <section className="pop_up_cta">
        <button className="close_btn" onClick={() => setPopUp(false)}>
          ×
        </button>
        <div className="pop_up">
          {myScore >= 2 ? <h1 className="popup_title">You Win!</h1> : null}
          {computerScore >= 2 ? (
            <h1 className="popup_title">You Win!</h1>
          ) : null}
          <div className="scores">
            <span>Your Score: {myScore}</span> <br />
            <span>Computer Score: {computerScore}</span>
          </div>
          <button className="playagain_btn" onClick={() => setPopUp(false)}>
            Play Again
          </button>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Popup;
