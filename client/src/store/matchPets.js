import axios from 'axios'

// ACTION TYPES

const FETCH_PET_BY_ID = 'FETCH_PET_BY_ID';
const REMOVE_UNMATCHES = 'REMOVE_UNMATCHES';

// ACTION CREATORS

const fetchOnePetById = (pet) => ({
  type: FETCH_PET_BY_ID,
  pet
});

const removedUnmatchData = () => ({type: REMOVE_UNMATCHES})

// THUNK
export const fetchPetById = (petId) =>
  dispatch => {
    axios.get(`/api/pets/findById/${petId}`)
      .then((res) => {
        dispatch(fetchOnePetById(res.data));
      })
      .catch(err => console.log(err));
  };

export const removeUnmatchedPets = () =>
dispatch => {
  dispatch(removedUnmatchData());
}

// REDUCER
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PET_BY_ID:
      return [...state, action.pet];
    case REMOVE_UNMATCHES:
      return state = [];
    default:
      return state;
  }
}
