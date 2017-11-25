import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMatches, fetchPetById, sendEmail } from '../store';
import { connect } from 'react-redux';

class Matches extends Component {
  componentDidMount() {
    this.props.onLoad(this.props.currentUser.id);
    this.props.matches.map(match => this.props.onMap(match.petId));
  }

  componentWillMount() {
  // reset state here maybe?
  }

  render() {
    return (
      <div>
        <h1> Matches </h1>
        <div className="matchesList">
          {this.props.matches.length ?
              this.props.matchPets.map(pet => (
                <div key={pet.id.$t} className="matches petCard">
                  <Link to={`/petDetail/${pet.id.$t}`}>
                    <img
                      src={
            pet.media.photos
            ? pet.media.photos.photo[3].$t
            : 'http://biorem.org/wp-content/uploads/2016/07/not-available.png'}
                      className="petPic rounded"
                      alt="pet profile pic"
                    />
                    <h1>{pet.name.$t},{pet.age.$t}</h1>
                    <h2>{pet.breeds.breed.$t},{pet.animal.$t}</h2>
                    <button onClick={(event) => {
                      event.preventDefault(); this.props.onClick(this.props.currentUser, pet);
}}
                    > Contact
                    </button>
                  </Link>
                </div>
                ))
              : <p>NO MATCHES!</p>
          }
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  currentUser: state.currentUser,
  matches: state.matches,
  matchPets: state.matchPets,
});

const mapDispatch = dispatch => ({
  onLoad(id) {
    dispatch(fetchMatches(id));
  },
  onMap(petId) {
    return (dispatch(fetchPetById(petId)));
  },
  onClick(user, pet) {
    sendEmail(user, pet);
  },
});

export default connect(mapState, mapDispatch)(Matches);


// mapStatethis.props.matches.map(match =>  {
//   this.props.onMap(match.petId)
// })
// // this.props.matchPets.map(matchPet =>{
// //   <div>
// //     <h1>{matchPet.name.$t}</h1>
// //   </div>
// })
