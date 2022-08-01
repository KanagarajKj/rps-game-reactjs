import React, { useState } from 'react';
import './index.css';
import Popup from './Popup';



const App = () => {
  const [myScore, setmyScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setcomputerChoice] = useState('');
  const [playerWin, setPlayerWin] = useState('');

  const computerChoose = () => {
    let weapons = ['rock', 'paper', 'scissor'];
     return (weapons[Math.floor(Math.random() * 3)]);
  };

    if (computerScore < 0) {
      setComputerScore(0);
    } else if (myScore < 0 ) {
      setmyScore(0);
    }

      const gameResult = function (userWeapon) {
        let computerWeapon = computerChoose();
        let gameOutput = `${userWeapon}${computerWeapon}`;
        setUserChoice(userWeapon);
        setcomputerChoice(computerWeapon);
        console.log(gameOutput);

        if (userWeapon === computerWeapon) {
          setPlayerWin('draw');
        } else if (
          gameOutput === 'rockpaper' ||
          gameOutput === 'paperscissor' ||
          gameOutput === 'scissorrock'
        ) {
          setPlayerWin('lose');
          setmyScore(myScore - 1);
          setComputerScore(computerScore + 1);
        } else if (
          gameOutput === 'paperrock' ||
          gameOutput === 'scissorpaper' ||
          gameOutput === 'rockscissor'
        ) {
          setPlayerWin('win');
          setmyScore(myScore + 1);
          setComputerScore(computerScore - 1);
        }
      }; 

  return (
    <main className="game">
      <div className="header">
        <h1 className="game_title">Rock Paper Scissor Game</h1>
        <span></span>
      </div>
      <div className="weapons">
        <button type="submit" onClick={() => gameResult('rock')}>
          Rock
        </button>
        <button type="submit" onClick={() => gameResult('paper')}>
          Paper
        </button>
        <button type="submit" onClick={() => gameResult('scissor')}>
          Scissor
        </button>
      </div>

      <div className="game_body">
        <div className="game_score">
          <h2>
            My Score: <span id="my_score">{myScore}</span>
          </h2>
          <h2>
            Computer Score:
            <span id="computer_score">{computerScore}</span>
          </h2>
        </div>

        <div className="result">
          <h2>
            You Selected:
            <span id="my_option">{userChoice}</span>
          </h2>
          <h2>
            Computer Selected:
            <span id="computer_option">{computerChoice}</span>
          </h2>
        </div>
      </div>
      <div id="result">
        {playerWin === 'win' && <h2>You Win!</h2>}
        {playerWin === 'lose' && <h2>You lose!</h2>}
        {playerWin === 'draw' && <h2>Draw!</h2>}
      </div>

      <div>
        {myScore >= 2 || computerScore >= 2 ? (
          <Popup
            myScore={myScore}
            computerScore={computerScore}
            setmyScore={setmyScore}
            setComputerScore={setComputerScore}
            setUserChoice={setUserChoice}
            setcomputerChoice={setcomputerChoice}
            setPlayerWin={setPlayerWin}
          />
        ) : null}
      </div>
    </main>
  );
};

export default App;
