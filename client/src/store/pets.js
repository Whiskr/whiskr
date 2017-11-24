import axios from 'axios';

/**
 * ACTION TYPES
 */
const FETCH_PETS = 'FETCH_PETS';
//const REFRESH_CARDS = 'REFRESH_CARDS';
// const REMOVE_PET = 'REMOVE_PET';

/**
 * ACTION CREATORS
 */
const fetchPets = (pets, species) => ({ type: FETCH_PETS, pets, species });
//const refreshAllCards = cards => ({ type: REFRESH_CARDS, cards });
// export const removePet = (petId, petSpecies) => ({type: REMOVE_PET, petId, petSpecies})
/**
 * THUNK CREATORS
 */


// Had to add in extra https to get cors to work
const wasItSeen = (petId, userId) => 
  axios.get(`/api/seen/${userId}/${petId}`)
    .then(res => {
      console.log('inside WasItSeen', res)
      return res.data})


const axiosCall = (type, currentUser) => 
axios.get(`/api/pets?animal=${type}&location=${currentUser.zipCode || 11226}&key=01e0c19609326eb33ed70df84f870392`)
  .then(res => {
    console.log('inside axiosCall', res)
    return res.data})


export const fetchAllPets = (type, currentUser) =>
  async (dispatch) => {
    while(true){
      const pet = await axiosCall(type, currentUser)
      console.log('inside while loop')
      if (!await wasItSeen(pet.id.$t, currentUser.id))
        return dispatch(fetchPets(pet, type))
    }
  }


// export const refreshCards = () =>
//   dispatch =>
//     axios.get('/cards')
//       .then((_) => {
//         // dispatch(refreshAllCards());
//       })
//       .catch(err => console.log(err));

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
    // case REFRESH_CARDS:
    //   return action.cards;
    // case REMOVE_PET: {
    //   const newState = { ...state };
    //   console.log(action)
    //   console.log('newState', newState)
    //   newState[action.petSpecies] = newState[action.petSpecies].filter(pet => pet.id.$t !== action.petId);
    //   return newState;
    // }
    default:
      return state;
  }
}
