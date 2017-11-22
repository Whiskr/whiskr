import axios from 'axios';

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


// Had to add in extra https to get cors to work
export const fetchAllPets = (type, currentUser) =>
  (dispatch) => {
    axios.get(`/api/pets?animal=${type}&location=${currentUser.zipCode || 11226}&key=01e0c19609326eb33ed70df84f870392`)
      .then((res) => {
        console.log(res);
        // dispatch(fetchPets(res.data.petfinder.pets.pet));
      })
      .catch(err => console.log(err));
  };

export const rejectPet = id =>
  (dispatch) => {
    console.log(`Rejected a poor pet # ${id}`);
    // dispatch(rejectSinglePet(id));
  };

export const refreshCards = () =>
  dispatch =>
    axios.get('/cards')
      .then((_) => {
        // dispatch(refreshAllCards());
      })
      .catch(err => console.log(err));

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
