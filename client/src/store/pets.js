import axios from 'axios';

/**
 * ACTION TYPES
 */

const REJECT_PET = 'REJECT_PET';
const REFRESH_CARDS = 'REFRESH_CARDS';
const LOVE_PET = 'LOVE_PET';

/**
 * ACTION CREATORS
 */

const rejectSinglePet = id => ({ type: REJECT_PET, id });
const loveSinglePet = id => ({ type: LOVE_PET, id });
const refreshAllCards = cards => ({ type: REFRESH_CARDS, cards });
/**
 * THUNK CREATORS
 */

export const rejectPet = id =>
  (dispatch) => {
    console.log('Rejected a poor pet');
    // dispatch(rejectSinglePet(id));
  };

export const lovePet = id =>
  (dispatch) => {
    console.log('Loved a super cool pet');
    // dispatch(loveSinglePet(id));
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
    case REJECT_PET:
      return `${action.id} is rejected`;
    case LOVE_PET:
      return `${action.id} is loved`;
    case REFRESH_CARDS:
      return action.cards;
    default:
      return state;
  }
}
