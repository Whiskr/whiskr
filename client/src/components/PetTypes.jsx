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
    <div className="allPetTypes">
      <div className="petTypeContainer">
        <Link to="/pets/dog">
          <img src={dogSquare} className="typeIcon" alt="dog animal" />
          <h2 className="petTypesText">Dogs</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/cat">
          <img src={catSquare} className="typeIcon" alt="cat animal" />
          <h2 className="petTypesText">Cats</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/bird">
          <img src={birdSquare} className="typeIcon" alt="bird animal" />
          <h2 className="petTypesText">Birds</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/rabbit">
          <img src={rabbitSquare} className="typeIcon" alt="rabbit animal" />
          <h2 className="petTypesText">Rabbits</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/smallfurry">
          <img
            src={smallFurrySquare}
            className="typeIcon"
            alt="small furry animal"
          />
          <h2 className="petTypesText">Small Furry</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/reptile">
          <img src={reptileSquare} className="typeIcon" alt="reptile animal" />
          <h2 className="petTypesText">Reptiles</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/horse">
          <img src={horseSquare} className="typeIcon" alt="horse animal" />
          <h2 className="petTypesText">Horses</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/barnyard">
          <img src={barnyardSquare} className="typeIcon" alt="barnyard animal" />
          <h2 className="petTypesText">Barnyard</h2>
        </Link>
      </div>
    </div>
  </div>
);

export default PetTypes;
