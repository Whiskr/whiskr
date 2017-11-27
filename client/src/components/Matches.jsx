import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMatches, fetchPetById, sendEmail, resetMatchPets } from '../store';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

class Matches extends Component {
  componentDidMount() {
    this.props.onReload();
    this.props.onLoad(this.props.currentUser.id);
    this.props.matches.map(match => this.props.onMap(match.petId));
  }

  componentWillUnmount() {
    this.props.onReload();
  }

  render() {
    return (
      <div>
        <h1>Matches</h1>
        <div className="matchesList">
          {this.props.matches.length ?
              this.props.matchPets.map(pet => (
                <div key={pet.id.$t} className="matches petCard">
                  <Link to={`match/${pet.id.$t}`}>
                    <img
                      src={
                pet.media.photos
                ? pet.media.photos.photo[3].$t
                : 'http://biorem.org/wp-content/uploads/2016/07/not-available.png'}
                      className="petPic rounded"
                      alt="pet profile pic"
                    />
                    <button onClick={(event) => {
                      event.preventDefault(); this.props.onClick(this.props.currentUser, pet);
                }}
                    > <FontAwesome name="envelope-o" />
                    </button>
                    <h1>{pet.name.$t}</h1>
                    <h2>{pet.animal.$t}</h2>
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
    dispatch(fetchPetById(petId));
  },
  onClick(user, pet) {
    sendEmail(user, pet);
  },
  onReload() {
    dispatch(resetMatchPets());
  },
});

export default connect(mapState, mapDispatch)(Matches);
