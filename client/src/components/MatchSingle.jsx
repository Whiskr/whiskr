import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPetById, sendEmail, resetMatchPets } from '../store';
import { connect } from 'react-redux';
import SinglePet from './SinglePet';

class MatchSingle extends Component {
  componentDidMount() {
    this.props.onLoad(this.props.match.params.petId);
  }

  // componentWillUnmount() {
  //   this.props.onReload();
  // }

  render() {
    return (
      <div>
        <h1>Match Single</h1>
        {
          this.props.matchPets.length ?
          <SinglePet pet={this.props.matchPets[0]} />
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
  onLoad(petId){
    dispatch(fetchPetById(petId))
  },
  onClick(user, pet) {
    sendEmail(user, pet);
  },
  onReload() {
    dispatch(resetMatchPets());
  },
});

export default connect(mapState, mapDispatch)(MatchSingle);
