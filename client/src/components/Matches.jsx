import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { sendEmail, unMatch } from '../store';
import { connect } from 'react-redux';
import { EmailPreview } from './';

class Matches extends Component {
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <div className="matchesList">
          {this.props.matches.length ?
              this.props.matchPets.map(pet => { 
                const contacted = this.props.matches.filter(match => match.petId === Number(pet.id.$t))[0].contacted
                console.log(contacted)
                return (
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
              event.preventDefault(); this.props.onUnmatch(pet, this.props.currentUser.id);
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
                  <EmailPreview user={this.props.currentUser} pet={pet} name="matches" contacted={contacted} />
                </div>
                )})
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
  onUnmatch(pet, userId) {
    if (window.confirm(`Are you sure you want to delete your match with ${pet.name.$t}?`))
      dispatch(unMatch(pet.id.$t, userId));
  },
  onClick(user, pet) {
    sendEmail(user, pet);
  },
});

export default connect(mapState, mapDispatch)(Matches);
