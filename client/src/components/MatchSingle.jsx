import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import EmailPreview from './EmailPreview';
import { sendEmail, unMatch } from '../store';
import SinglePet from './SinglePet';

class MatchSingle extends Component {
  render() {
    const searchPet = this.props.match.params.petId;
    const petDetail = this.props.matchPets.filter(matchPet => matchPet.id.$t === searchPet)[0];
    const contacted = this.props.matches.filter(match => match.petId === Number(searchPet))[0].contacted
    console.log('contacted?', contacted)
    return (
      <div className="flex">
        <div id="singleMatchContainer">
          {this.props.matchPets.length ? (
            <div>
              <button
                className="unmatch largeIconLeft"
                onClick={(event) => {
                event.preventDefault();
                this.props.onUnmatch(
                  petDetail,
                  this.props.currentUser.id,
                );
              }}
              >
                <FontAwesome name="heart" />
                <FontAwesome name="remove" />
              </button>
              <EmailPreview user={this.props.currentUser} pet={petDetail} name={'matchSingle'} contacted={contacted} />
              <SinglePet pet={petDetail} />
            </div>
        ) : (
          <p>Loading</p>
        )}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  currentUser: state.currentUser,
  matchPets: state.matchPets,
  matches: state.matches
});

const mapDispatch = (dispatch, ownProps) => ({
  onClick(user, pet) {
    sendEmail(user, pet);
  },
  onUnmatch(pet, userId) {
    if (window.confirm(`Are you sure you want to delete your match with ${pet.name.$t}?`))
    dispatch(unMatch(pet.id.$t, userId));
    ownProps.history.push('/matches');
  },
});

export default connect(mapState, mapDispatch)(MatchSingle);
