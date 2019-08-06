import React from 'react';
import theRaidPoster from './Raod-Poster.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={theRaidPoster} alt="the-raid-poster" />

      <div className="container">
        <div className="movie">Black Mirror</div>
        <div className="movie">Breaking Bad</div>
        <div className="movie">Death Note</div>
      </div>
      <div className="container">
        <div className="movie">Game of Thrones</div>
        <div className="movie">The Walking Dead</div>
        <div className="movie">The Wire</div>
      </div>

    </div>
  );
}

export default App;
