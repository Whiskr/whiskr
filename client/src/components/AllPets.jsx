import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { rejectPet, lovePet, refreshCards, fetchAllPets } from '../store';
import SinglePet from './SinglePet';

class AllPets extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    console.log('Pets in allPets: ', this.props.pets);
    return (
      <Cards onEnd={this.props.onEnd} className="master-root">
        {this.props.pets && this.props.pets.map((el, i) =>
      (
        <Card
          key={i}
          onSwipeLeft={() => { this.props.onReject(i) }}
          onSwipeRight={() => { this.props.onLove(i) }}
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
  user: state.user,
});

const mapDispatch = (dispatch, ownProps) => ({
  onLoad() {
    dispatch(fetchAllPets(ownProps.match.params.type));
  },
  onEnd() {
    dispatch(refreshCards());
  },
  onReject(i) {
    dispatch(rejectPet(i));
  },
  onLove(i) {
    dispatch(lovePet(i));
  },
});

export default connect(mapState, mapDispatch)(AllPets)
