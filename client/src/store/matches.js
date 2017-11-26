import axios from 'axios';
// import {removePet} from './'

// ACTION TYPES

const GET_MATCHES = 'GET_MATCHES';
const CREATE_MATCHES = 'CREATE_MATCHES';
const REMOVE_MATCHES = 'REMOVE_MATCHES';

// ACTION CREATOR

const getMatches = matches => ({
  type: GET_MATCHES,
  matches,
});

const removeMatches = match => ({
  type: REMOVE_MATCHES, match,
});

const createMatches = match => ({
  type: CREATE_MATCHES,
  match,
});

// THUNK CREATORS

export const sendEmail = (user, pet) => axios.get(`/api/contact?userEmail=${user.email}&userPhoneNumber=${user.phoneNumber}&userZipCode=${user.zipCode}&userHasYoungChildren=${user.hasYoungChildren}&userPetHistory=${user.petHistory}&petName=${pet.name.$t}&petId=${pet.id.$t}&petCity=${pet.contact.city.$t}&petState=${pet.contact.state.$t}&petOptions=${pet.options.option}&to=${pet.contact.email.$t}`)
  .catch(err => console.log(err));

export const fetchMatches = userId =>
  dispatch =>
    axios.get(`/api/match/${userId}`)
      .then(res =>
        dispatch(getMatches(res.data)))
      .catch(err => console.log(err));

export const petWasSeen = (petId, userId) =>
  (dispatch) => {
    // dispatch(removePet(petId, petSpecies))
    axios.post('/api/seen', { petId, userId })
      .catch(err => console.log(err));
  };

export const rejectPet = (petId, userId) =>
  (dispatch) => {
    dispatch(petWasSeen(petId, userId));
  };

export const addMatches = (petId, userId) =>
  dispatch =>
    axios.post('/api/match', { petId, userId })
      .then((res) => {
        dispatch(petWasSeen(petId, userId));
        dispatch(createMatches(res.data));
      })
      .catch(err => console.log(err));

export const unMatch = (petId, userId) =>
  dispatch =>
    axios.delete('/api/match', { petId, userId })
      .then((res) => {
        dispatch(removeMatches(res.data));
      })
      .catch(err => console.log(err));

// REDUCER

export default function (state = [], action) {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches;
    case CREATE_MATCHES:
      return [...state, action.match];
    // case REMOVE_MATCHES:
      // return matches.filter(cMatch => cMatch.id !== action.match.id)
    default:
      return state;
  }
}
