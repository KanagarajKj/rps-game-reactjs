import React, { useState, useEffect, useCallback } from 'react';
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
     setcomputerChoice(weapons[Math.round(Math.random() * 3)]);
  };

    useEffect(() => {
      computerChoose();
      console.log(computerChoose())
    }, [userChoice]);


    if (computerScore < 0) {
        setComputerScore(0);
      } else if (myScore < 0) {
        setmyScore(0);
      }

      const gameResult = function () {
        let gameOutput = `${userChoice}${computerChoice}`;

        {
          console.log(gameOutput);
        }

        if (userChoice === computerChoice) {
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

   useEffect(() => {
    gameResult(); 
   }, [userChoice]);

   
  return (
    <main className="game">
      <div className="header">
        <h1 className="game_title">Rock Paper Scissor Game</h1>
        <span></span>
      </div>
      <div className="weapons">
        <button type="submit" onClick={() => setUserChoice('rock')}>
          Rock
        </button>
        <button type="submit" onClick={() => setUserChoice('paper')}>
          Paper
        </button>
        <button type="submit" onClick={() => setUserChoice('scissor')}>
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
        {myScore > 5 || computerScore > 5 ? (
          <Popup myScore={myScore} computerScore={computerScore} />
        ) : null}
      </div>
    </main>
  );
};

export default App;
