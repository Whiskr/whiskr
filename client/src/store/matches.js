import axios from 'axios';
import { fetchPetById, removeUnmatchedPets } from './';

// ACTION TYPES

const GET_MATCHES = 'GET_MATCHES';
const CREATE_MATCHES = 'CREATE_MATCHES';

// ACTION CREATOR

const getMatches = matches => ({
  type: GET_MATCHES,
  matches,
});


const createMatches = match => ({
  type: CREATE_MATCHES,
  match,
});

// THUNK CREATORS

const markContacted = (user, pet) => {
    axios.put(`/api/match/${user.id}/${pet.id.$t}`)
  }
  
export const sendEmail = (user, pet) => {
  markContacted(user, pet)
  axios.get(`/api/contact?userEmail=${user.email}&userPhoneNumber=${user.phoneNumber}&userZipCode=${user.zipCode}&userHasYoungChildren=${user.hasYoungChildren}&userPetHistory=${user.petHistory}&petName=${pet.name.$t}&petId=${pet.id.$t}&petCity=${pet.contact.city.$t}&petState=${pet.contact.state.$t}&to=${pet.contact.email.$t}&petOptions=${pet.options.option}`)
  .catch(err => console.log(err));
}

export const fetchMatches = userId =>
  dispatch =>
    axios.get(`/api/match/${userId}`)
      .then(res =>
        dispatch(getMatches(res.data)))
        .then(results => results.matches.map( pet => dispatch(fetchPetById(pet.petId))))
      .catch(err => console.log(err));

export const petWasSeen = (petId, userId) =>
  (dispatch) => {
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
        dispatch(fetchPetById(petId));
      })
      .catch(err => console.log(err));

export const unMatch = (petId, userId) =>
  dispatch =>
    axios.delete('/api/match', {data:{petId: petId, userId: userId}})
      .then((res) => {
        dispatch(removeUnmatchedPets())
        dispatch(fetchMatches(userId))
      })
      .catch(err => console.log(err));

// REDUCER

export default function (state = [], action) {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches;
    case CREATE_MATCHES:
      return [...state, action.match];
    default:
      return state;
  }
}
