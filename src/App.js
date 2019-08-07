import React from 'react';
import Movie from './Movie.js';
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
        <Movie
          title="Black Mirror"
          logo={blackMirrorPoster} />
        <Movie
          title="Breaking Bad"
          logo={breakingBadPoster} />
        <Movie
          title="Death Note"
          logo={deathNotePoster} />
      </div>
      <div className="container">
        <Movie
          title="Game of Thrones"
          logo={gameOfThronesPoster} />
        <Movie
        title="The Walking Dead"
        logo={theWalkingDeadPoster} />
        <Movie
        title="The Wire"
        logo={theWirePoster} />
      </div>
    </div>
  );
}

export default App;
