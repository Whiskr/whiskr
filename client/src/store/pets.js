import axios from 'axios';
import _ from 'lodash';
import { updateUser } from './'

/**
 * ACTION TYPES
 */
const FETCH_PETS = 'FETCH_PETS';
const REJECT_PET = 'REJECT_PET';
const REFRESH_CARDS = 'REFRESH_CARDS';

/**
 * ACTION CREATORS
 */
const fetchPets = pets => ({ type: FETCH_PETS, pets });
const rejectSinglePet = id => ({ type: REJECT_PET, id });
const refreshAllCards = cards => ({ type: REFRESH_CARDS, cards });
/**
 * THUNK CREATORS
 */

//helper function
export const grabKey = (type, currentUser) => {
  //utilizing regex to find the right key to update
  const searchWord = '\w+' + type
  const re = new RegExp(searchWord, "i")
  //array of the user object's keys --> a string of the keys --> an a array of the key that has the type in it
  const keyArray = _.keys(currentUser).join(' ').match(re)
  return keyArray[0]
}

// Had to add in extra https to get cors to work
export const fetchAllPets = (type, currentUser) =>
  (dispatch) => {
    const key = grabKey(type, currentUser)
    const currentOffset = currentUser[key]
    axios.get('https://cors-anywhere.herokuapp.com/'
    +
    `http://api.petfinder.com/pet.find?format=json&animal=${type}&location=11226&offset=${currentOffset}&key=01e0c19609326eb33ed70df84f870392`)
      .then((res) => {
        // const update = {}
        // const nextOffset = res.data.petfinder.lastOffset.$t;
        // update[key] = nextOffset
        dispatch(fetchPets(res.data.petfinder.pets.pet))
        //updates the offset value in the database and on currentUser in state
        //dispatch(updateUser(currentUser.id, update));
      })
      .catch(err => console.log(err));
  };

export const rejectPet = id =>
  (dispatch) => {
    console.log(`Rejected a poor pet # ${id}`);
    // dispatch(rejectSinglePet(id));
  };

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
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PETS:
      return action.pets;
    case REJECT_PET:
      return `${action.id} is rejected`;
    case REFRESH_CARDS:
      return action.cards;
    default:
      return state;
  }
}
