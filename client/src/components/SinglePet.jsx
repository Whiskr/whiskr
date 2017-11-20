import React from 'react';

const SinglePet = ({ pet }) => (
  <div className="petProfile container">
    <img src={pet.media.photos.photo[3].$t} className="petPic" alt="pet profile pic" />
    <h1>{pet.name.$t}</h1>
    <h2>Breeds: {(Array.isArray(pet.breeds.breed)
      ? pet.breeds.breed.map(el => el.$t).join(', ')
      : pet.breeds.breed.$t
    )}
    </h2>
    <h3>Age: {pet.age.$t}</h3>
    <h4>Size: {pet.size.$t}</h4>
    <h5>Sex: {pet.sex.$t}</h5>
    <p>{pet.description.$t}</p>
  </div>
);

export default SinglePet;
