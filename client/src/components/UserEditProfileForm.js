import React from 'react'
import {connect} from 'react-redux'
import updateUser from '../store'

//COMPONENT
class UserEditProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            phoneNumber: '',
            zipCode: '',
            animalPreferences: [],
            otherPetTypes: [],
            hasYoungChildren: false,
            petHistory: ''
        }
    }
    render() {
        const {user, handleSubmit} = props
        return (
            <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"><small>Email</small></label>
                <input name="email" type="text" />
            </div>
            <div>
                <label htmlFor="phoneNumber"><small>Phone Number</small></label>
                <input name="phoneNumber" type="text" />
            </div>
            <div>
                <label htmlFor="zipCode"><small>Zip Code</small></label>
                <input name="zipCode" type="text" />
            </div>
            <div>
                <label htmlFor="animalPreferences"><small>Types of Animals You Prefer to Match With</small></label>
                <input name="animalPreferences" type="checkbox" />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Types of Animals You Currently Own</small></label>
                <input name="otherPetTypes" type="checkbox" />
            </div>
            <div>
                <label htmlFor="hasYoungChildren"><small>Do You Have Small Children?</small></label>
                <input name="hasYoungChildren" type="radio" />
            </div>
            <div>
                <label htmlFor="petHistory"><small>What is Your Pet Owning History?</small></label>
                <textarea name="petHistory" type="textarea">{user.petHistory}</textarea>
            </div>
            <div>
                <button type="submit">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
            </form>
            <a href="/auth/google">{displayName} with Google</a>
        </div>
        )
    }
}

//CONTAINER
const mapState = (state) =>  ({ user: state.currentUser })

const mapDispatch = (dispatch) => {
    return {
        //////INCOMPLETE!!!!
      handleSubmit (evt) {
        evt.preventDefault()

        const updateInfo = {}
        dispatch(updateUser(state.currentUser.id, updateInfo))
      }
    }
  }


export default connect(mapState)(UserEditProfileForm)