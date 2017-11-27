//ACTION TYPES
const ADD_STRING = 'ADD_STRING';
const ADD_ARRAY = 'ADD_ARRAY';
const ADD_BOOLEAN = 'ADD_BOOLEAN';
const CLEAR_FORM = 'CLEAR_FORM';

//ACTION CREATORS
export const addString = (key, value) => {
    //I hate this, but it prevents a TypeError
    let val = { type: ADD_STRING, key, value }
    return val
} 
export const addArray = (key, value) => {
    let val = { type: ADD_ARRAY, key, value }
    return val
} 
export const addBoolean = (key, value) => {
    let val = { type: ADD_BOOLEAN, key, value }
    return val
} 
export const clearForm = () => {
    let val = {type: CLEAR_FORM}
    return val
} 

//THUNKS

//DEFAULTSTATE
const defaultState = {
    // email: '',
    // phoneNumber: '',
    // zipCode: '',
    // animalPreferences: [],
    // otherPetTypes: [],
    // hasYoungChildren: false,
    // petHistory: ''
}

//REDUCER
export default function (state = defaultState, action) {
    const {key, value, type} = action
    switch (type) {
        case ADD_STRING:
            return Object.assign({}, state, { [key]: value })
        case ADD_ARRAY:
            return Object.assign({}, state, { [key]: value })
        case ADD_BOOLEAN:
            return Object.assign({}, state, { [key]: value })
        case CLEAR_FORM:
            return defaultState
        default: 
            return state
    }
}