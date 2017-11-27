import axios from 'axios'

// ACTION TYPES

const FETCH_PET_BY_ID = 'FETCH_PET_BY_ID';
const RESET_MATCHPETS = 'RESET_MATCHPETS';

// ACTION CREATORS

const fetchOnePetById = (pet) => ({type: FETCH_PET_BY_ID, pet});
const resetPetDetail = () => ({type: RESET_MATCHPETS})

// THUNK
export const fetchPetById = (petId) =>
  dispatch => {
    axios.get(`/api/pets/findById/${petId}`)
      .then((res) => {
        dispatch(fetchOnePetById(res.data));
      })
      .catch(err => console.log(err));
  };

export const resetMatchPets = () =>
  dispatch => (dispatch(resetPetDetail()))

  // REDUCER
  export default function ( state = [], action ) {
    switch (action.type) {
      case FETCH_PET_BY_ID:
        return [...state, action.pet];
      case RESET_MATCHPETS:
        return state = [];
      default:
      return state;

    }
  }
