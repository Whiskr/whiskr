import axios from 'axios';

// ACTION TYPES
const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// INITIAL STATE
const defaultUser = {};

// ACTION CREATORS
const getUser = user => ({ type: GET_USER, user });
const logOutUser = () => ({ type: LOGOUT_USER });

// THUNK CREATORS
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err));

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then((res) => {
        dispatch(getUser(res.data));
      })
      .catch(error =>
        dispatch(getUser({ error })));

export const logout = () =>
  (dispatch) => {
    axios.post('/auth/logout')
      .then((_) => {
        dispatch(logOutUser());
        localStorage.clear();
      })
      .catch(err => console.log(err));
  };
// updateUser expects the state's currentUser.id, and updated info to be prepackaged into a single, nested object
export const updateUser = (userId, updateInfo) => (dispatch) => {
  axios.put(`/api/userAccount/${userId}`, updateInfo)
    .then((res) => {
      dispatch(getUser(res.data));
    })
    .catch(error => console.error(error));
};

export const deleteAccount = userId => (dispatch) => {
  dispatch(logOutUser());
  axios.delete(`/api/userAccount/${userId}`)
    .catch(err => console.log(err));
};

// REDUCER

export default function currentUser(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case LOGOUT_USER:
      return defaultUser;
    default:
      return state;
  }
}
