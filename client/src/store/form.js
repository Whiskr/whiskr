//ACTION TYPES
const ADD_ITEM = 'ADD_ITEM'

//ACTION CREATORS
export const addItem = (fieldObject) => {type: ADD_ITEM, fieldObject}

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
            return Object.assign({}, ...state, action.fieldObject)
        default: 
            return state
    }
}