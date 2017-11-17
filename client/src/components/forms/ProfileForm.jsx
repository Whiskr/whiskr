import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {updateUser} from '../store'
import { AnimalPreferences, OtherPetTypes } from './checkboxes'

//COMPONENT
class ProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.props.handleSubmit.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }

    handleCheckbox(checkboxState, componentName) {
        const key = (componentName === 'animalPreferences') ? animalPreferences : otherPetTypes
        const array = _.keys(_.pickBy(checkboxState))
        this.setState( { [key]: array })
    }

    handleChange(event) {
        this.setState( { [event.target.name]: event.target.value } )   
    }
    render() {
        const {user} = this.props
        return (
            <div>
            <form onSubmit={(event) => this.handleSubmit(event, user.id, this.state)}>
            <div>
                <label htmlFor="email"><small>Email</small></label>
                <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="phoneNumber"><small>Phone Number</small></label>
                <input name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="zipCode"><small>Zip Code</small></label>
                <input name="zipCode" type="text" value={this.state.zipCode} onChange={this.handleChange}/>
            </div>
            <div>
                <AnimalPreferences onCheck={this.handleCheckbox} /> 
            </div>
            <div>
                <OtherPetTypes onCheck={this.handleCheckbox} />
            </div>
            <div>
                <label htmlFor="hasYoungChildren">Do You Have Small Children?</label>
                <input id="YesChildren" name="hasYoungChildren" value={true} type="radio" onChange={this.handleChange} />
                <label htmlFor="YesChildren">Yes</label>
                <input id="NoChildren" name="hasYoungChildren" value={false} type="radio" onChange={this.handleChange}/>
                <label htmlFor="NoChildren">No</label>
            </div>
            <div>
                <label htmlFor="petHistory"><small>What is Your Pet Owning History?</small></label>
                <textarea name="petHistory" type="textarea" onChange={this.handleChange}>{this.state.petHistory}</textarea>
            </div>
            <div>
                <button type="submit">Update Profile</button>
            </div>
            {/* {error && error.response && <div> {error.response.data} </div>} */}
            </form>
            {/* <a href="/auth/google">{displayName} with Google</a> */}
        </div>
        )
    }
}

//CONTAINER
const mapState = (state) =>  ({ user: state.currentUser })

const mapDispatch = dispatch => {
    return {
      handleSubmit (evt, userId, localState) {
        evt.preventDefault()
        dispatch(updateUser(userId, localState))
      }
    }
  }


export default connect(mapState, mapDispatch)(ProfileForm)