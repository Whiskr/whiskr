import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMatches, fetchPetById, sendEmail } from '../store';
import { connect } from 'react-redux';
import SinglePet from './SinglePet';

class MatchSingle extends Component {
  constructor(){
    super()
    this.state = {
      pet: {},
    }
  }

  render() {
    {console.log('-------', this.props)}
    return (
      <div>
        <h1>Match Single</h1>
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
