import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, UserHome, AllPets, CreateProfile, UpdateProfile, PetTypes, Matches, MatchSingle } from './components';
import App from './App';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router>
        <App>
          <Switch>
            {/* Root route renders Login when not logged in already, and pets when logged in */}
            <Route exact path="/" render={() => ( isLoggedIn ? ( <Redirect to="/pets" />) : (
                <Login />
              )
            )}
            />
            <Route exact path="/login" component={Login} />
            <Route path="/createProfile" component={CreateProfile} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/home" component={UserHome} />
                  <Route path="/updateProfile" component={UpdateProfile} />
                  <Route exact path="/pets" component={PetTypes} />
                  <Route exact path="/pets/:type" component={AllPets} />
                  <Route exact path="/matches" component={Matches} />
                  <Route exact path="/match/:petId" component={MatchSingle}/>
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </App>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
  // Otherwise, state.user will be an empty object, and state.user.id will be falsey
  isLoggedIn: !!state.currentUser.id,
  currentUser: state.currentUser,
  matches: state.matches,
});

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(me());
  },
});

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};