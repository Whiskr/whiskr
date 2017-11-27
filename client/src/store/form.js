//ACTION TYPES
const ADD_STRING = 'ADD_STRING';
const ADD_ARRAY = 'ADD_ARRAY';
const ADD_BOOLEAN = 'ADD_BOOLEAN';
const CLEAR_FORM = 'CLEAR_FORM';

//ACTION CREATORS
export const addString = (key, value) => { type: ADD_STRING, key, value }
export const addArray = (key, value) => { type: ADD_ARRAY, key, value }
export const addBoolean = (key, value) => { type: ADD_BOOLEAN, key, value }
export const clearForm = () => {type: CLEAR_FORM}

//THUNKS

//DEFAULTSTATE
const defaultState = {
    email: '',
    phoneNumber: '',
    zipCode: '',
    animalPreferences: [],
    otherPetTypes: [],
    hasYoungChildren: false,
    petHistory: ''
}

//REDUCER
export default function (state = defaultState, action) {
    const {key, value, type} = action
    switch (type) {
        case ADD_STRING:
            return Object.assign({}, state, { [key]: value })
        case ADD_ARRAY:
            return Object.assign({}, state, { [key]: state[key].concat(value) })
        case ADD_BOOLEAN:
            return Object.assign({}, state, { [key]: value })
        case CLEAR_FORM:
            return defaultState
        default: 
            return state
    }
}