import appu from './charactersList/appu.png';
import g_one from './charactersList/g_one.png';
import mental from './charactersList/mental.png';
import santa from './charactersList/santa.png';
import aunty from './charactersList/aunty.png';
import ghost from './charactersList/ghost.png';
import mirchi from './charactersList/mirchi.png';
import shah from './charactersList/shah.png';
import bhari_babu from './charactersList/bhari_babu.png';
import ik from './charactersList/ik.png';
import namo from './charactersList/namo.png';
import snowman from './charactersList/snowman.png';
import boss from './charactersList/boss.png';
import ironman from './charactersList/ironman.png';
import nikki from './charactersList/nikki.png';
import sophie from './charactersList/sophie.png';
import bulla from './charactersList/bulla.png';
import jack from './charactersList/jack.png';
import ninja from './charactersList/ninja.png';
import stickman_b from './charactersList/stickman_b.png';
import chimpu from './charactersList/chimpu.png';
import jesus from './charactersList/jesus.png';
import old_man from './charactersList/old_man.png';
import stickman_w from './charactersList/stickman_w.png';
import jill from './charactersList/jill.png';
import pappu from './charactersList/pappu.png';
import tac from './charactersList/tac.png';
import deadpool from './charactersList/deadpool.png';
import kejriwal from './charactersList/kejriwal.png';
import pinki from './charactersList/pinki.png';
import tic from './charactersList/tic.png';
import doctor from './charactersList/doctor.png';
import lady from './charactersList/lady.png';
import raga from './charactersList/raga.png';
import timpu from './charactersList/timpu.png';
import face_a from './charactersList/face_a.png';
import lov from './charactersList/lov.png';
import rasheed from './charactersList/rasheed.png';
import toe from './charactersList/toe.png';
import face_b from './charactersList/face_b.png';
import luke from './charactersList/luke.png';
import rinki from './charactersList/rinki.png';
import tom from './charactersList/tom.png';
import face_w from './charactersList/face_w.png';
import meme_face from './charactersList/meme_face.png';
import salman_khan from './charactersList/salman_khan.png';

const charFunction = () => {
  let characters = [];
  let charactersString =
    'appu.png        g_one.png       mental.png      santa.png aunty.png       ghost.png       mirchi.png      shah.png bhari_babu.png  ik.png          namo.png        snowman.png boss.png        ironman.png     nikki.png       sophie.png bulla.png       jack.png        ninja.png       stickman_b.png chimpu.png      jesus.png       old_man.png     stickman_w.png jill.png        pappu.png       tac.png deadpool.png    kejriwal.png    pinki.png       tic.png doctor.png      lady.png        raga.png        timpu.png face_a.png      lov.png         rasheed.png     toe.png face_b.png      luke.png        rinki.png       tom.png face_w.png      meme_face.png   salman_khan.png';
  charactersString = charactersString.replace(/  +/g, ' ');
  let charactersArray = charactersString.split(' ');
  let a = '[';
  for (let i = 0; i < charactersArray.length; i++) {
    let name = charactersArray[i]
      .slice(0, -4)
      .replace('_', ' ')
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    let imageName = charactersArray[i].slice(0, -4);
    a += `{image:${imageName}, name: "${name}"},`;
    characters.push({ image: imageName, name: name });
  }
  a += ']';
  console.log(a);
  return characters;
};

export default [
  { image: appu, name: 'Appu' },
  { image: g_one, name: 'G One' },
  { image: mental, name: 'Mental' },
  { image: santa, name: 'Santa' },
  { image: aunty, name: 'Aunty' },
  { image: ghost, name: 'Ghost' },
  { image: mirchi, name: 'Mirchi' },
  { image: shah, name: 'Shah' },
  { image: bhari_babu, name: 'Bhari Babu' },
  { image: ik, name: 'Ik' },
  { image: namo, name: 'Namo' },
  { image: snowman, name: 'Snowman' },
  { image: boss, name: 'Boss' },
  { image: ironman, name: 'Ironman' },
  { image: nikki, name: 'Nikki' },
  { image: sophie, name: 'Sophie' },
  { image: bulla, name: 'Bulla' },
  { image: jack, name: 'Jack' },
  { image: ninja, name: 'Ninja' },
  { image: stickman_b, name: 'Stickman B' },
  { image: chimpu, name: 'Chimpu' },
  { image: jesus, name: 'Jesus' },
  { image: old_man, name: 'Old Man' },
  { image: stickman_w, name: 'Stickman W' },
  { image: jill, name: 'Jill' },
  { image: pappu, name: 'Pappu' },
  { image: tac, name: 'Tac' },
  { image: deadpool, name: 'Deadpool' },
  { image: kejriwal, name: 'Kejriwal' },
  { image: pinki, name: 'Pinki' },
  { image: tic, name: 'Tic' },
  { image: doctor, name: 'Doctor' },
  { image: lady, name: 'Lady' },
  { image: raga, name: 'Raga' },
  { image: timpu, name: 'Timpu' },
  { image: face_a, name: 'Face A' },
  { image: lov, name: 'Lov' },
  { image: rasheed, name: 'Rasheed' },
  { image: toe, name: 'Toe' },
  { image: face_b, name: 'Face B' },
  { image: luke, name: 'Luke' },
  { image: rinki, name: 'Rinki' },
  { image: tom, name: 'Tom' },
  { image: face_w, name: 'Face W' },
  { image: meme_face, name: 'Meme Face' },
  { image: salman_khan, name: 'Salman Khan' },
];
