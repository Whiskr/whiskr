import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store'

//COMPONENT
class UserEditProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.props.handleSubmit.bind(this)
    }

    handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        })   
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
                <legend>Types of Animals You Prefer to Match With:</legend>
                <div>
                    <label htmlFor="animalPreferences"><small>Dog</small></label>
                    <input name="dogs" type="checkbox" value="dog" checked={this.state.preferDog} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="animalPreferences"><small>Cat</small></label>
                    <input name="cats" type="checkbox" value="cat" checked={this.state.preferCat} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="animalPreferences"><small>Bird</small></label>
                    <input name="birds" type="checkbox" value="bird" checked={this.state.preferBird} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="animalPreferences"><small>Small Mammal</small></label>
                    <input name="smallFurries" type="checkbox" value="smallFurry" checked={this.state.preferSmallFurry} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="animalPreferences"><small>Reptile</small></label>
                    <input name="reptiles" type="checkbox" value="reptile" checked={this.state.preferReptile} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="animalPreferences"><small>Horse</small></label>
                    <input name="horses" type="checkbox" value="horse" checked={this.state.preferHorse} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="animalPreferences"><small>Barnyard Animal</small></label>
                    <input name="barnyardAnimals" type="checkbox" value="barnyardAnimal" checked={this.state.preferBarnyardAnimal} onChange={this.handleChange} />
                </div>
            </div>
            <div>
            <legend>Types of Animals You Currently Own:</legend>
            <div>
                <label htmlFor="otherPetTypes"><small>Dog</small></label>
                <input name="dog" type="checkbox" value="dog" checked={this.state.ownsDog} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Cat</small></label>
                <input name="cat" type="checkbox" value="cat" checked={this.state.ownsCat} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Bird</small></label>
                <input name="bird" type="checkbox" value="bird" checked={this.state.ownsBird} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Small Mammal</small></label>
                <input name="smallFurry" type="checkbox" value="smallFurry" checked={this.state.ownsSmallFurry} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Reptile</small></label>
                <input name="reptile" type="checkbox" value="reptile" checked={this.state.ownsReptile} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Horse</small></label>
                <input name="horse" type="checkbox" value="horse" checked={this.state.ownsHorse} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="otherPetTypes"><small>Barnyard Animal</small></label>
                <input name="barnyardAnimal" type="checkbox" value="barnyardAnimal" checked={this.state.ownsBarnyardAnimal} onChange={this.handleChange} />
            </div>
            </div>
            <div>
                <label htmlFor="hasYoungChildren">Do You Have Small Children?</label>
                <input id="YesChildren" name="hasYoungChildren" value="Yes" type="radio" onChange={this.handleChange} />
                <label htmlFor="YesChildren">Yes</label>
                <input id="NoChildren" name="hasYoungChildren" value="No" type="radio" onChange={this.handleChange}/>
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


export default connect(mapState, mapDispatch)(UserEditProfileForm)