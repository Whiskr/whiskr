import axios from "axios";

/**
 * ACTION TYPES
 */
const FETCH_PETS = "FETCH_PETS";
const CLEAR_PETS = "CLEAR_PETS";

/**
 * ACTION CREATORS
 */
const fetchPets = (pets, species) => ({
  type: FETCH_PETS,
  pets,
  species
});
export const clearPets = species => ({
  type: CLEAR_PETS,
  species
});
/**
 * THUNK CREATORS
 */

// Had to add in extra https to get cors to work
const wasItSeen = (petId, userId) =>
  axios.get(`/api/seen/${userId}/${petId}`).then(res => res.data.length);

let callCount = 0;
const axiosCall = (type, currentUser) =>
  axios
    .get(
      `/api/pets?animal=${type}&location=${currentUser.currentLocation ||
        currentUser.zipCode ||
        "11226"}&_ts=${Date.now()}&_call=${callCount++}`,
      {
        "Cache-Control": "no-cache",
        pragma: "no-cache"
      }
    )
    .then(res => {
      return res.data;
    });

export const fetchAllPets = (type, currentUser) => async dispatch => {
  while (true) {
    const pet = await axiosCall(type, currentUser);
    if (!(await wasItSeen(pet.id.$t, currentUser.id))) {
      return dispatch(fetchPets(pet, type));
    }
  }
};

/**
 * REDUCER
 */
export default function(
  state = {
    bird: [],
    dog: [],
    horse: [],
    cat: [],
    smallfurry: [],
    reptile: [],
    barnyard: [],
    rabbit: []
  },
  action
) {
  switch (action.type) {
    case FETCH_PETS: {
      const newState = {
        ...state
      };
      newState[action.species] = [...state[action.species], action.pets];
      return newState;
    }
    case CLEAR_PETS: {
      const newState = {
        ...state
      };
      newState[action.species] = [];
      return newState;
    }
    default:
      return state;
  }
}
