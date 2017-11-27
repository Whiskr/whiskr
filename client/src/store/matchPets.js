import axios from 'axios'

// ACTION TYPES

const FETCH_PET_BY_ID = 'FETCH_PET_BY_ID';

// ACTION CREATORS

const fetchOnePetById = (pet) => ({
  type: FETCH_PET_BY_ID,
  pet
});

// THUNK
export const fetchPetById = (petId) =>
  dispatch => {
    axios.get(`/api/pets/findById/${petId}`)
      .then((res) => {
        dispatch(fetchOnePetById(res.data));
      })
      .catch(err => console.log(err));
  };

// REDUCER
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PET_BY_ID:
      return [...state, action.pet];
    default:
      return state;
  }
}
