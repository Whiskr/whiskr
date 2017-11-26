import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { updateUser, addItem } from '../../store';
import { AnimalPreferences, OtherPetTypes } from './checkboxes';
import { PersonalInfo } from './PersonalInfo';
import { PetPreferences } from './PetPreferences';
import { PetHistory } from './PetHistory';

// COMPONENT
class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { handleSubmit, handleChange, handleCheckbox, user, form } = this.props
    const { page } = this.state
    return (
      <div className="splash">
        <div className="form animated flipInX">
          <h2>{this.props.display}</h2>
          <div>
            {page === 1 && <PersonalInfo 
                              onSubmit={this.nextPage} 
                              onChange={handleChange} 
                              user={user} />}
            {page === 2 && <PetPreferences 
                              previousPage={this.previousPage} 
                              onSubmit={this.nextPage} 
                              onCheck={handleCheckbox} />}
            {page === 3 && <PetHistory 
                              previousPage={this.previousPage} 
                              onChange={handleChange} 
                              onCheck={handleCheckbox} 
                              onSubmit={event => this.handleSubmit(event, user.id, form)} 
                              user={user} />}
          </div>
        </div>
      </div>
    )
  }
}

// CONTAINER
const mapCreateProfile = state => ({
  user: state.currentUser,
  form: state.form,
  name: 'createProfile',
  display:
    'Please Create Your Profile to Better Help Us Match You With Your Purrfect Companion',
});

const mapUpdateProfile = state => ({
  user: state.currentUser,
  form: state.form,
  name: 'updateProfile',
  display: 'Update Your Preferences for Better Matching',
});

const mapDispatch = dispatch => ({
  handleChange(evt) {
    let key = evt.target.name;
    let value = evt.target.value;
    dispatch(addItem({ [key]: value} ))
  },
  handleCheckbox(checkboxState, componentName) {
    const key =
      componentName === 'animalPreferences'
        ? 'animalPreferences'
        : 'otherPetTypes';
    const array = _.keys(_.pickBy(checkboxState));
    dispatch(addItem({ [key]: array }));
  },
  handleSubmit(evt, userId, formState) {
    evt.preventDefault();
    const redirect = this.props.name === 'createProfile' ? '/pets' : '/home';
    Promise.resolve(dispatch(updateUser(userId, formState)))
    .then(() => {this.props.history.push(redirect)});
  },
});

export const CreateProfile = withRouter(connect(mapCreateProfile, mapDispatch)(ProfileForm));
export const UpdateProfile = withRouter(connect(mapUpdateProfile, mapDispatch)(ProfileForm));
