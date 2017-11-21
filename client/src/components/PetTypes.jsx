import React from 'react';
import { Link } from 'react-router-dom';
import dogSquare from '../styles/dogSquare.png';
import catSquare from '../styles/catSquare.png';
import birdSquare from '../styles/birdSquare.png';
import rabbitSquare from '../styles/bunnySquare.png';
import smallFurrySquare from '../styles/mouseSquare.png';
import reptileSquare from '../styles/reptileSquare.png';
import horseSquare from '../styles/horseSquare.png';
import barnyardSquare from '../styles/pigSquare.png';

const PetTypes = () => (
  <div className="container">
    <Link to="/pets/dog">
      <img src={dogSquare} className="typeIcon" alt="dog animal" />
    </Link>
    <Link to="/pets/cat">
      <img src={catSquare} className="typeIcon" alt="cat animal" />
    </Link>
    <Link to="/pets/bird">
      <img src={birdSquare} className="typeIcon" alt="bird animal" />
    </Link>
    <Link to="/pets/rabbit">
      <img src={rabbitSquare} className="typeIcon" alt="rabbit animal" />
    </Link>
    <Link to="/pets/smallfurry">
      <img
        src={smallFurrySquare}
        className="typeIcon"
        alt="small furry animal"
      />
    </Link>
    <Link to="/pets/scalesFinsOther">
      <img src={reptileSquare} className="typeIcon" alt="reptile animal" />
    </Link>
    <Link to="/pets/horse">
      <img src={horseSquare} className="typeIcon" alt="horse animal" />
    </Link>
    <Link to="/pets/barnyard">
      <img src={barnyardSquare} className="typeIcon" alt="barnyard animal" />
    </Link>
  </div>
);

export default PetTypes;
