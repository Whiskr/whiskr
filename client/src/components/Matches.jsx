import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sendEmail, unMatch } from '../store';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

class Matches extends Component {
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <div className="matchesList">
          {this.props.matches.length ?
              this.props.matchPets.map(pet => (
                <div key={pet.id.$t} className="matches petCard">
                  <Link to={`matches/${pet.id.$t}`}>
                    <img
                      src={
                pet.media.photos
                ? pet.media.photos.photo[3].$t
                : 'http://biorem.org/wp-content/uploads/2016/07/not-available.png'}
                      className="petPic rounded"
                      alt="pet profile pic"
                    />
                    <button
                      className="unmatch smallIcon"
                      onClick={(event) => {
              event.preventDefault(); this.props.onUnmatch(pet.id.$t, this.props.currentUser.id);
              }}
                    >
                      <FontAwesome name="heart" />
                      <FontAwesome name="remove" />
                    </button>
                    <button
                      className="emailEnvelope smallIcon"
                      onClick={(event) => {
                      event.preventDefault(); this.props.onClick(this.props.currentUser, pet);
                }}
                    > <FontAwesome name="envelope-o" />
                    </button>
                    <div id="petInfo">
                      <h1>{pet.name.$t}</h1>
                      <h2>{pet.animal.$t}</h2>
                    </div>
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
  onUnmatch(petId, userId) {
    dispatch(unMatch(petId, userId));
  },
  onClick(user, pet) {
    sendEmail(user, pet);
  },
});

export default connect(mapState, mapDispatch)(Matches);
