import React, { Component } from 'react';
// import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { fetchAllPets } from '../store';
// import SinglePet from './SinglePet';

class AllPets extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    console.log('Pets in allPets: ', this.props.pets);
    return (<div />
    //   <Cards onEnd={this.props.refreshCards} className="master-root">
    //     {this.props.pets && this.props.pets.map((item, i) =>
    //   (
    //     <Card
    //       key={i}
    //       onSwipeLeft={this.props.rejectPet(i)}
    //       onSwipeRight={this.props.lovePet(i)}
    //     >
    //       <SinglePet pet={item} />
    //     </Card>
    // ))}
    //   </Cards>
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
});

export default connect(mapState, mapDispatch)(AllPets)
