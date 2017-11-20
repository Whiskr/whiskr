import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { fetchMatches, addMatches } from '../store';
import { rejectPet, lovePet, refreshCards, fetchAllPets } from '../store';
import SinglePet from './SinglePet';

class AllPets extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    console.log('Pets in allPets: ', this.props);
    return (
      <Cards onEnd={this.props.onEnd} className="master-root">
        {this.props.pets && this.props.pets.map((el, i) =>
      (
        <Card
          key={i}
          onSwipeLeft={() => { this.props.onReject(el.id.$t) }}
          onSwipeRight={() => { this.props.onLove(el.id.$t, this.props.currentUser.id ) }}
        >
          <SinglePet pet={el} />
        </Card>
    ))}
      </Cards>
    )
  }
}

const mapState = state => ({
  pets: state.pets,
  currentUser: state.currentUser,
});

const mapDispatch = (dispatch, ownProps) => ({
  onLoad() {
    dispatch(fetchAllPets(ownProps.match.params.type)),
    dispatch(fetchMatches(1));
  },
  onEnd() {
    dispatch(refreshCards());
  },
  onReject(i) {
    dispatch(rejectPet(i));
  },
  onLove(petId, userId) {
    dispatch(addMatches(petId, userId));
  },
});

export default connect(mapState, mapDispatch)(AllPets)
