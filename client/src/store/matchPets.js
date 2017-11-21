import axios from 'axios'

// ACTION TYPES

const FETCH_PET_BY_ID = 'FETCH_PET_BY_ID';

// ACTION CREATORS

const fetchOnePetById = pet => ({ type: FETCH_PET_BY_ID, pet });

// THUNK
export const fetchPetById = petId =>
  (dispatch) => {
    axios.get('https://cors-anywhere.herokuapp.com/' +
        `http://api.petfinder.com/pet.get?format=json&id=${petId}&key=01e0c19609326eb33ed70df84f870392`)
      .then(res => {
        dispatch(fetchOnePetById(res.data.petfinder.pet));
      })
      .catch(err => console.log(err));
  };

  // REDUCER
  export default function ( state = [], action ) {
    switch (action.type) {
      case FETCH_PET_BY_ID:
        return [...state, action.pet];
      default:
      return state;

    }
  }
