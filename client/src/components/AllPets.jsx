import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { fetchMatches, addMatches, fetchAllPets, clearPets, rejectPet } from '../store';
import SinglePet from './SinglePet';


const CustomAlertLeft = () => (
  <span>
    <img alt="reject pet icon" src="../styles/favorite-icon.png" className="icon" />
  </span>);
const CustomAlertRight = () => (
  <span>
    <img alt="accept pet icon" src="../styles/reject-icon.png" className="icon" />
  </span>);

class AllPets extends Component {
  componentDidMount() {
    this.props.onLoad(this.props.currentUser);
  }
  // there is a lag with getting the currentUser on state so this is needed to work fetch matches:
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser && nextProps.currentUser.id !== this.props.currentUser.id) {
  //     this.props.loadMatches(nextProps.currentUser.id);
  //   }
  // }

  componentWillUnmount() {
    const species = this.props.match.params.type;
    this.props.onDismount(species);
  }

  render() {
    // this is the object of pets held by the species' key in state
    const species = this.props.pets[this.props.match.params.type];
    return (
      <div className="container">
        <div id="card-stack" />
        <Cards
          alertRight={<CustomAlertRight />}
          alertLeft={<CustomAlertLeft />}
          onEnd={() => this.props.onLoad(this.props.currentUser)}
          className="master-root"
        >
          {species && Object.keys(species).map((el, i) =>
      (
        <Card
          key={i}
          onSwipeLeft={() => { this.props.onReject(species[el].id.$t, this.props.currentUser.id, this.props.match.params.type); }}
          onSwipeRight={() => { this.props.onLove(species[el].id.$t, this.props.currentUser.id, this.props.match.params.type); }}
        >
          <SinglePet pet={species[el]} expand={false} />
        </Card>
    ))}
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
    let i = 0;
    for (;i < 25; i++) {
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
