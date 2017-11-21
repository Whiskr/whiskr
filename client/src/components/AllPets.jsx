import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import Fav from '../styles/favorite-icon.png';
import Reject from '../styles/reject-icon.png';
import { fetchMatches, addMatches, fetchAllPets, rejectPet, updateOffset, grabKey } from '../store';
import SinglePet from './SinglePet';


const CustomAlertLeft = () => (
  <span>
    <img alt="reject pet icon" src={Reject} className="icon" />
  </span>);
const CustomAlertRight = () => (
  <span>
    <img alt="accept pet icon" src={Fav} className="icon" />
  </span>);

class AllPets extends Component {
  componentDidMount() {
    if(this.props.currentUser.id){
      this.props.onLoad(this.props.currentUser);
    }
  }
  // there is a lag with getting the currentUser on state so this is needed to work fetch matches:
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && nextProps.currentUser.id !== this.props.currentUser.id) {
      this.props.loadMatches(nextProps.currentUser.id);
    }
  }

  render() {
    const { key, currentUser } = this.props
    const offset = Number(currentUser[key])
    const update = {}
    return (
      <Cards
        alertRight={<CustomAlertRight />}
        alertLeft={<CustomAlertLeft />}
        onEnd={this.props.onEnd}
        className="master-root"
      >
        {this.props.pets && this.props.pets.map((el, i) =>
      (
        <Card
          key={i}
          onSwipeLeft={() => {
            console.log(typeof offset)
            //update[key] = offset
            //this.props.changeOffset(update); 
            this.props.onReject(el.id.$t); }}
          onSwipeRight={() => {
            console.log(offset)
            //update[key] = offset
            //this.props.changeOffset(update);
            this.props.onLove(el.id.$t, currentUser.id); }}
        >
          <SinglePet pet={el} expand={false} />
        </Card>
    ))}
      </Cards>
    );
  }
}

const mapState = (state, ownProps) => ({
  pets: state.pets,
  currentUser: state.currentUser,
  key: grabKey(ownProps.match.params.type, state.currentUser)

});

const mapDispatch = (dispatch, ownProps) => ({
  onLoad(user) {
    dispatch(fetchAllPets(ownProps.match.params.type, user));
  },
  loadMatches(id) {
    dispatch(fetchMatches(id));
  },
  // onEnd() {
  //   dispatch(refreshCards());
  // },
  onReject(i) {
    dispatch(rejectPet(i));
  },
  onLove(petId, userId) {
    dispatch(addMatches(petId, userId));
  },
  changeOffset(offset) {
    dispatch(updateOffset(offset))
  }
});

export default connect(mapState, mapDispatch)(AllPets);
