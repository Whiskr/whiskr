import axios from 'axios';

/**
 * ACTION TYPES
 */
const FETCH_PETS = 'FETCH_PETS';
const CLEAR_PETS = 'CLEAR_PETS';

/**
 * ACTION CREATORS
 */
const fetchPets = (pets, species) => ({ type: FETCH_PETS, pets, species });
export const clearPets = (species) => ({ type: CLEAR_PETS, species });
/**
 * THUNK CREATORS
 */


// Had to add in extra https to get cors to work
const wasItSeen = (petId, userId) => 
  axios.get(`/api/seen/${userId}/${petId}`)
    .then(res => {
      return res.data.length})


const axiosCall = (type, currentUser) => 
axios.get(`/api/pets?animal=${type}&location=${currentUser.zipCode || 11226}&key=01e0c19609326eb33ed70df84f870392`)
  .then(res => {
    return res.data})


export const fetchAllPets = (type, currentUser) =>
  async (dispatch) => {
    while(true){
      const pet = await axiosCall(type, currentUser)
      if (!await wasItSeen(pet.id.$t, currentUser.id))
        return dispatch(fetchPets(pet, type))
    }
  }


/**
 * REDUCER
 */
export default function (state = {
  bird: [], dog: [], horse: [], cat: [], smallFurry: [], reptile: [], barnyard: [], rabbit: [],
}, action) {
  switch (action.type) {
    case FETCH_PETS: {
      const newState = { ...state };
      newState[action.species] = [...state[action.species], action.pets];
      return newState;
    }
    case CLEAR_PETS: {
      const newState = { ...state };
      newState[action.species] = [];
      return newState;
    }
    default:
      return state;
  }
}
