import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { fetchMatches, addMatches, fetchAllPets, clearPets, rejectPet } from '../store';
import SinglePet from './SinglePet';


const CustomAlertLeft = () => (
  <span>
    <img alt="reject pet icon" src="../reject-icon.png" className="icon" />
  </span>);
const CustomAlertRight = () => (
  <span>
    <img alt="accept pet icon" src="../favorite-icon.png" className="icon" />
  </span>);

class AllPets extends Component {
  componentDidMount() {
    this.props.onLoad(this.props.currentUser);
  }

  componentWillUnmount() {
    const species = this.props.match.params.type;
    this.props.onDismount(species);
  }

  render() {
    const { pets, currentUser, onReject, onLove, onLoad, match  } = this.props
    const petTypeArray = pets[match.params.type];
    return (
      <div className="container">
        <div id="card-stack" />
        <Cards
          alertRight={<CustomAlertRight />}
          alertLeft={<CustomAlertLeft />}
          onEnd={() => onLoad(currentUser)}
          className="master-root"
        >
          {petTypeArray && petTypeArray.map((pet) => {
      return (
        <Card
          key={pet.id.$t}
          onSwipeLeft={() => { onReject(pet.id.$t, currentUser.id, match.params.type); }}
          onSwipeRight={() => { onLove(pet.id.$t, currentUser.id, match.params.type); }}
        >
          <SinglePet pet={pet} expand={false} />
        </Card>
    )})}
        </Cards>
      </div>
    );
  }
}

const mapState = state => ({
  pets: state.pets,
  currentUser: state.currentUser,
});

const mapDispatch = (dispatch, ownProps) => ({
  onLoad(user) {
    for (let i = 0; i < 25; i++) {
      dispatch(fetchAllPets(ownProps.match.params.type, user));
    }
  },
  loadMatches(id) {
    dispatch(fetchMatches(id));
  },
  onReject(petId, userId, petSpecies) {
    dispatch(rejectPet(petId, userId, petSpecies));
  },
  onLove(petId, userId, petSpecies) {
    dispatch(addMatches(petId, userId, petSpecies));
  },
  onDismount(petSpecies) {
    dispatch(clearPets(petSpecies));
  },
});

export default connect(mapState, mapDispatch)(AllPets);
