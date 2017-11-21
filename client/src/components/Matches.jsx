import React, { Component } from 'react';
import { fetchMatches } from '../store';
import { connect } from 'react-redux';


class Matches extends Component {
  componentDidMount() {
    this.props.onLoad(this.props.currentUser.id);
  }

  render(){
    return (
      <div>
        <h1> Matches </h1>
        <ul className='matchesList'>
          {this.props.matches.length?
             this.props.matches.map(match =>  {
            return (<li key={match.id}>{match.petId}</li>)})
          : <p>NO MATCHES</p>}
        </ul>

      </div>
    )
  }
}









const mapState = state => ({
    currentUser: state.currentUser,
    matches: state.matches
})

const mapDispatch = (dispatch) => ({
    onLoad(id) {
        dispatch(fetchMatches(id));
    }
})

export default connect(mapState, mapDispatch)(Matches);
