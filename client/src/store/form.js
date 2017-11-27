//ACTION TYPES
const ADD_ITEM = 'ADD_ITEM';
const CLEAR_FORM = 'CLEAR_FORM';

//ACTION CREATORS
export const addItem = (key, value) => { type: ADD_ITEM, key, value }
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
    switch (action.type) {
        case ADD_ITEM:
        //complicated reducer due to a state with multiple keys 
        //create a dummy copy
            const newState = {...state}
            const type = typeof newState[action.key]
            //ensuring the function handles the return value correctly
            newState[action.key] = () => {
                switch (type) {
                    case 'string':
                        return newState[action.key] + action.value
                    case 'object':
                        return [...state[action.key], action.value]
                    case 'boolean':
                        return action.value
                    default:
                        return newState[action.key]
                }
            }
            return newState
        case CLEAR_FORM:
            return defaultState
        default: 
            return state
    }
}