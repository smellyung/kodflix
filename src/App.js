import React from 'react';
import blackMirrorPoster from './images/black-mirror.jpg';
import breakingBadPoster from './images/breaking-bad.jpg';
import deathNotePoster from './images/death-note.jpg';
import gameOfThronesPoster from './images/game-of-thrones.jpg';
import theWalkingDeadPoster from './images/the-walking-dead.jpg';
import theWirePoster from './images/the-wire.jpg';  
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="movie">
          <img src={blackMirrorPoster} alt="black-mirror-poster" />
          <div className="title-overlay">
            <p>Black Mirror</p>
          </div>
        </div>
        <div className="movie">
          <img src={breakingBadPoster} alt="breaking-bad-poster" />
          <div className="title-overlay">
            <p>Breaking Bad</p>
            </div>
        </div>
        <div className="movie">
          <img src={deathNotePoster} alt="death-note-poster" />
          <div className="title-overlay">
            <p>Death Note</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="movie">
          <img src={gameOfThronesPoster} alt="game-of-thrones-poster" />
          <div className="title-overlay">
            <p>Game of Thrones</p>
          </div>
        </div>
        <div className="movie">
         <img src={theWalkingDeadPoster} alt="the-walking-dead-poster" />
         <div className="title-overlay">
           <p>The Walking Dead</p>
          </div>
        </div>
        <div className="movie">
         <img src={theWirePoster} alt="the-wire-poster" />
         <div className="title-overlay">
           <p>The Wire</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
