import axios from 'axios';

// ACTION TYPES
const SET_ZIPCODE = 'SET_ZIPCODE';
const REMOVE_LOCATION = 'REMOVE_LOCATION';

// ACTION CREATORS
const setCurrentLocation = (location) => ({
  type: SET_ZIPCODE,
  location
});

const removeCurrentZipcode = () => ({
  type: REMOVE_LOCATION
});

// THUNK

export const getCurrentZipcode = (lat, lng) =>
  dispatch => {
    console.log("FIRE!")
    axios.get(`/api/zipcode/?lat=${lat}&lng=${lng}`)
      .then(res => {
        console.log("HELLLOO RES", res.data)
        dispatch(setCurrentLocation(res.data))
      })
      .catch(err => console.log(err));
  };

export const removeCurrentLocation = () =>
  dispatch => {
    dispatch(removeCurrentZipcode());
  };

// REDUCER

export default function(state = [], action) {
  switch (action.type) {
    case SET_ZIPCODE:
      return [action.location]
    case REMOVE_LOCATION:
      return state = [];
    default:
      return state;
  }
};
