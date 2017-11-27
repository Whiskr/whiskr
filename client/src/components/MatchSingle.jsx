import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { sendEmail } from '../store';
import { connect } from 'react-redux';
import SinglePet from './SinglePet';

class MatchSingle extends Component {
  render() {
    const searchPet = this.props.match.params.petId;
    return (
      <div id="singleMatchContainer">
        {
          this.props.matchPets.length ?
            <SinglePet pet={this.props.matchPets.filter(matchPet => matchPet.id.$t === searchPet)[0]} />
          : <p>MatchPets did not load in time to pass to props maybe we can make this a loading animation?</p>
        }
      </div>
    );
  }
}

const mapState = state => ({
  matchPets: state.matchPets,
});

const mapDispatch = dispatch => ({
  onClick(user, pet) {
    sendEmail(user, pet);
  },
});

export default connect(mapState, mapDispatch)(MatchSingle);
