import React from 'react';
import { Link } from 'react-router-dom';

const PetTypes = () => (
  <div className="container">
    <div className="allPetTypes">
      <div className="petTypeContainer">
        <Link to="/pets/dog">
          <picture>
            <source srcSet="./dogSquare.webp" type="image/webp" />
            <source srcSet="./dogSquare.png" type="image/png" />
            <img srcSet="./dogSquare.png" className="typeIcon" alt="dog icon" />
          </picture>
          <h2 className="petTypesText">Dogs</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/cat">
          <picture>
            <source srcSet="./catSquare.webp" type="image/webp" />
            <source srcSet="./catSquare.png" type="image/png" />
            <img srcSet="./catSquare.png" className="typeIcon" alt="cat icon" />
          </picture>
          <h2 className="petTypesText">Cats</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/bird">
          <picture>
            <source srcSet="./birdSquare.webp" type="image/webp" />
            <source srcSet="./birdSquare.png" type="image/png" />
            <img srcSet="./birdSquare.png" className="typeIcon" alt="bird icon" />
          </picture>
          <h2 className="petTypesText">Birds</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/rabbit">
          <picture>
            <source srcSet="./bunnySquare.webp" type="image/webp" />
            <source srcSet="./bunnySquare.png" type="image/png" />
            <img srcSet="./bunnySquare.png" className="typeIcon" alt="rabbit icon" />
          </picture>
          <h2 className="petTypesText">Rabbits</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/smallfurry">
          <picture>
            <source srcSet="./mouseSquare.webp" type="image/webp" />
            <source srcSet="./mouseSquare.png" type="image/png" />
            <img srcSet="./mouseSquare.png" className="typeIcon" alt="smallfurry icon" />
          </picture>
          <h2 className="petTypesText">Small Furry</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/reptile">
          <picture>
            <source srcSet="./reptileSquare.webp" type="image/webp" />
            <source srcSet="./reptileSquare.png" type="image/png" />
            <img srcSet="./reptileSquare.png" className="typeIcon" alt="reptile icon" />
          </picture>
          <h2 className="petTypesText">Reptiles</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/horse">
          <picture>
            <source srcSet="./horseSquare.webp" type="image/webp" />
            <source srcSet="./horseSquare.png" type="image/png" />
            <img srcSet="./horseSquare.png" className="typeIcon" alt="horse icon" />
          </picture>
          <h2 className="petTypesText">Horses</h2>
        </Link>
      </div>
      <div className="petTypeContainer">
        <Link to="/pets/barnyard">
          <picture>
            <source srcSet="./pigSquare.webp" type="image/webp" />
            <source srcSet="./pigSquare.png" type="image/png" />
            <img srcSet="./pigSquare.png" className="typeIcon" alt="barnyard icon" />
          </picture>
          <h2 className="petTypesText">Barnyard</h2>
        </Link>
      </div>
    </div>
    <CurrentLocation />
  </div>
);

export default PetTypes;
