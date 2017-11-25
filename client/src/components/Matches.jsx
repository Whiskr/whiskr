import React, { Component } from 'react';
import { fetchMatches, fetchPetById } from '../store';
import { connect } from 'react-redux';

class Matches extends Component {

  componentDidMount() {
    this.props.onLoad(this.props.currentUser.id);
  }

componentWillMount() {
  this.props.matches.map(match => {
    this.props.onMap(match.petId);
  })
}

  render(){
    return (
      <div>
        <h1> Matches </h1>
        <div className='matchesList'>
          <table className='matches'>
            {this.props.matches.length?
              this.props.matchPets.map (pet => {
                return(
                  <tr>
                    <td>{pet.name.$t}</td>
                    <td>{pet.animal.$t}</td>
                  </tr>
                )
              })
              : <p>NO MATCHES!</p>
          }
          </table>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
    currentUser: state.currentUser,
    matches: state.matches,
    matchPets: state.matchPets
})

const mapDispatch = (dispatch) => ({
    onLoad(id) {
        dispatch(fetchMatches(id));
    },
    onMap(petId) {
     return (dispatch(fetchPetById(petId)));
    }
})

export default connect(mapState, mapDispatch)(Matches);



// mapStatethis.props.matches.map(match =>  {
//   this.props.onMap(match.petId)
// })
// // this.props.matchPets.map(matchPet =>{
// //   <div>
// //     <h1>{matchPet.name.$t}</h1>
// //   </div>
// })
