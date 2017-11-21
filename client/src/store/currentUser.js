import axios from 'axios'

//ACTION TYPES
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const UPDATE_OFFSET= 'UPDATE_OFFSET'

//INITIAL STATE
const defaultUser = {}

//ACTION CREATORS
const getUser = user => ({type: GET_USER, user})
const logOutUser = () => ({type: LOGOUT_USER})
export const updateOffset = (offset) => ({type: UPDATE_OFFSET, offset})

//THUNK CREATORS
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
      })
      .catch(error =>
        dispatch(getUser({error})))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(logOutUser())
      })
      .catch(err => console.log(err))

//updateUser expects the state's currentUser.id, and updated info to be prepackaged into a single, nested object
export const updateUser = (userId, updateInfo) => {
  console.log('made it into updateUser', userId, updateInfo)
  return dispatch => {
    axios.put(`/api/userAccount/${userId}`, updateInfo)
    .then(res => {
      dispatch(getUser(res.data))
    })
    .catch(error => console.error(error))
  }
}

export const deleteAccount = (userId) => {
  return dispatch => {
    dispatch(logOutUser())
    axios.delete(`/api/userAccount/${userId}`)
    .catch(err => console.log(err))
  }
}

//REDUCER

export default function currentUser (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      //return action.user
    case LOGOUT_USER:
      return defaultUser
    case UPDATE_OFFSET:
      return Object.assign({}, state, action)
    default: 
      return state
  }
}
