import blackMirrorPoster from './images/black-mirror.jpg';
import breakingBadPoster from './images/breaking-bad.jpg';
import deathNotePoster from './images/death-note.jpg';
import gameOfThronesPoster from './images/game-of-thrones.jpg';
import theWalkingDeadPoster from './images/the-walking-dead.jpg';
import theWirePoster from './images/the-wire.jpg'; 

export default function getGallery() {
  return [
    { title: 'Black Mirror', poster: blackMirrorPoster, id: 'black-mirror', synopsis: 'An anthology series exploring a twisted, high-tech world where humanity\'s greatest innovations and darkest instincts collide.' },
    { title: 'Breaking Bad', poster: breakingBadPoster, id: 'breaking-bad', synopsis: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.' },
    { title: 'Death Note', poster: deathNotePoster, id: 'death-note', synopsis: 'A high school student discovers a supernatural notebook that has deadly powers. He can kill anyone he wishes simply by inscribing their name within its pages. Intoxicated with his new power, he begins to eliminate those he deems unworthy of life.' },
    { title: 'Game of Thrones', poster: gameOfThronesPoster, id: 'game-of-thrones', synopsis: 'Based on the best-selling book series "A Song of Ice and Fire" by George R.R. Martin, this sprawling HBO drama is set in a world where summers span several decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die.' },
    { title: 'The Walking Dead', poster: theWalkingDeadPoster, id: 'the-walking-dead', synopsis: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.'},
    { title: 'The Wire', poster: theWirePoster, id: 'the-wire', synopsis: 'The streets of Baltimore as a microcosm of the US\'s war on drugs, and of US urban decay in general. Seen not only through the eyes of a few policemen and drug gang members but also the people who influence and inhabit their world - politicians, the media, drug addicts and everyday citizens.' }
  ]
}
