import axios from 'axios'

//ACTION TYPES 

const GET_MATCHES = 'GET_MATCHES'
const CREATE_MATCHES = 'CREATE_MATCHES'
const REMOVE_MATCHES = 'REMOVE_MATCHES'

// ACTION CREATOR 

const getMatches = matches => ({type: GET_MATCHES, matches})
const removeMatches = () => ({type: REMOVE_MATCHES})
const createMatches = matches => ({type: CREATE_MATCHES, matches})

//THUNK CREATORS

export const fetchMatches = (userId) => 
    dispatch =>
    axios.get(`/api/match/${userId}`)
        .then(res => 
          dispatch(getMatches(res.data)))
          .catch(err => console.log(err))

// export const removeMatches = (matchId) =>
//     dispatch =>
//     dispatch(removeMatches(`/api/match/${matchId}`))
//     axios.delete(``)


// Change delete model from API route to take matchId instead of user and pet Id