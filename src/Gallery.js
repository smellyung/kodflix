import React from 'react';
import Movie from './Movie.js';
import blackMirrorPoster from './images/black-mirror.jpg';
import breakingBadPoster from './images/breaking-bad.jpg';
import deathNotePoster from './images/death-note.jpg';
import gameOfThronesPoster from './images/game-of-thrones.jpg';
import theWalkingDeadPoster from './images/the-walking-dead.jpg';
import theWirePoster from './images/the-wire.jpg';  

export default function Gallery(props) {
  return (
    <> 
      <div className="container">
        <Movie title="Black Mirror" logo={blackMirrorPoster} id="black-mirror" />
        <Movie title="Breaking Bad" logo={breakingBadPoster} id="breaking-bad" />
        <Movie title="Death Note" logo={deathNotePoster} id="death-note" />
      </div>
      <div className="container">
        <Movie title="Game of Thrones" logo={gameOfThronesPoster} id="game-of-thrones" />
        <Movie title="The Walking Dead" logo={theWalkingDeadPoster} id="the-walking-dead" />
        <Movie title="The Wire" logo={theWirePoster} id="the-wire" />
      </div>
    </>
  );
}