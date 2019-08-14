import blackMirrorPoster from './images/black-mirror.jpg';
import breakingBadPoster from './images/breaking-bad.jpg';
import deathNotePoster from './images/death-note.jpg';
import gameOfThronesPoster from './images/game-of-thrones.jpg';
import theWalkingDeadPoster from './images/the-walking-dead.jpg';
import theWirePoster from './images/the-wire.jpg'; 

export default function getGallery() {
    return [
      {title: 'Black Mirror', logo: blackMirrorPoster, id: 'black-mirror'},
      {title: 'Breaking Bad', logo: breakingBadPoster, id: 'breaking-bad'},
      {title: 'Death Note', logo: deathNotePoster, id: 'death-note'},
      {title: 'Game of Thrones', logo: gameOfThronesPoster, id: 'game-of-thrones'},
      {title: 'The Walking Dead', logo: theWalkingDeadPoster, id: 'the-walking-dead'},
      {title: 'The Wire', logo: theWirePoster, id: 'the-wire'}
    ]
  }