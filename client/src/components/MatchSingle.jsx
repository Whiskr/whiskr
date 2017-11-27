import React, { Component } from 'react';
import { sendEmail, unMatch } from '../store';
import { connect } from 'react-redux';
import SinglePet from './SinglePet';
import FontAwesome from 'react-fontawesome';

class MatchSingle extends Component {

  render() {
    const searchPet = this.props.match.params.petId;
    const petDetail = this.props.matchPets.filter(matchPet => matchPet.id.$t === searchPet)[0]
    return (
      <div>
        {
          this.props.matchPets.length ?
          <div>
          <SinglePet pet={petDetail} />
            <button onClick={(event) => {
              event.preventDefault(); this.props.onUnmatch(petDetail.id.$t, this.props.currentUser.id);
              }} >UnMatch</button>
              <button onClick={(event) => {
                event.preventDefault(); this.props.onClick(this.props.currentUser, petDetail);
                  }}
              > <FontAwesome name="envelope-o" />
              </button>
          </div>
          : <p>Loading</p>
        }
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
  onUnmatch(petId, userId){
    dispatch(unMatch(petId, userId));
    ownProps.history.push('/matches');
  },
});

export default connect(mapState, mapDispatch)(MatchSingle);
