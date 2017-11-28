import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { sendEmail, unMatch } from '../store';
import SinglePet from './SinglePet';

class MatchSingle extends Component {
  render() {
    const searchPet = this.props.match.params.petId;
    const petDetail = this.props.matchPets.filter(matchPet => matchPet.id.$t === searchPet)[0];
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
                  petDetail.id.$t,
                  this.props.currentUser.id,
                );
              }}
              >
                <FontAwesome name="heart" />
                <FontAwesome name="remove" />
              </button>
              <button
                className="emailEnvelope largeIconRight"
                onClick={(event) => {
                event.preventDefault();
                this.props.onClick(this.props.currentUser, petDetail);
              }}
              >
                {' '}
                <FontAwesome name="envelope-o" />
              </button>
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
});

const mapDispatch = (dispatch, ownProps) => ({
  onClick(user, pet) {
    sendEmail(user, pet);
  },
  onUnmatch(petId, userId) {
    dispatch(unMatch(petId, userId));
    ownProps.history.push('/matches');
  },
});

export default connect(mapState, mapDispatch)(MatchSingle);
