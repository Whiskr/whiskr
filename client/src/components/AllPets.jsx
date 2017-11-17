import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { fetchMatches, addMatches } from '../store';
import { rejectPet, lovePet } from '../store';


const data = ['Spot', 'Duke', 'Fluffy'];

 class AllPets extends Component {


  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h1> heeey</h1>
        {this.props.matches.length && this.props.matches.filter(match => match.userId === this.props.user.id
        ).map(match => (
          <div>{match.petId}</div>
        ))}
        <p>{this.props.currentUser.id}</p>
      </div>
    )
  }
}

const mapState = (state) => {
  return ({
    currentUser: state.currentUser,
    matches: state.matches
  }
  )
}

// const mapDispatch = (dispatch) => {
//   return{
//     getAllMatches: (userId) => {
//       dispatch(fetchMatches(userId))
//     },
//     createAMatch: (matchData) =>{
//       dispatch(addMatches(matchData))
//     }
//   }
// }

export default connect(mapState)(AllPets);
//swipe tech

// <Cards onEnd={this.props.refreshCards} className="master-root">
//   {data.map((item, i) =>
//     (
//       <Card
//         key={i}
//          onSwipeLeft={this.props.rejectPet(i)}
//          onSwipeRight={this.props.lovePet(i)}
//         >
//         <h2>{item}</h2>
//       </Card>
//     ))}
//   </Cards>
