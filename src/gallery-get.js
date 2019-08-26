import blackMirrorPoster from './images/black-mirror.jpg';
import breakingBadPoster from './images/breaking-bad.jpg';
import deathNotePoster from './images/death-note.jpg';
import gameOfThronesPoster from './images/game-of-thrones.jpg';
import theWalkingDeadPoster from './images/the-walking-dead.jpg';
import theWirePoster from './images/the-wire.jpg'; 

export default function getGallery() {
  return [
    {title: 'Black Mirror', poster: blackMirrorPoster, id: 'black-mirror'},
    {title: 'Breaking Bad', poster: breakingBadPoster, id: 'breaking-bad'},
    {title: 'Death Note', poster: deathNotePoster, id: 'death-note'},
    {title: 'Game of Thrones', poster: gameOfThronesPoster, id: 'game-of-thrones'},
    {title: 'The Walking Dead', poster: theWalkingDeadPoster, id: 'the-walking-dead'},
    {title: 'The Wire', poster: theWirePoster, id: 'the-wire'}
  ]
}
