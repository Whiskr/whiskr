import React from 'react';
import {fetchMatches} from '../store';
import { connect } from 'react-redux';


const Matches = (props) => {
    console.log(props.currentUser, "propsz", props.userId)
    return (
        <div>
        <h1> Matches </h1>
        <ul>
        {props.currentUser.matches ? <p>matches</p>
            : <p>no matches</p>
        }
        </ul>
        </div>
    )
}









const mapState = state => ({
    currentUser: state.currentUser
})

const mapDispatch = (dispatch) => ({
    onload(id) {
        dispatch(fetchMatches(id));
    }
})

export default connect(mapState, mapDispatch)(Matches);