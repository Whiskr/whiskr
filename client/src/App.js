import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from './store';
import Navbar from './components/Navbar';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Navbar />
        {children}
      </div>
    );
  }
}

const mapState = state => ({
  isLoggedIn: !!state.currentUser.id,
});
const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  },
});
export default withRouter(connect(mapState, mapDispatch)(App));
/**
 * PROP TYPES
 */
App.propTypes = {
  children: PropTypes.object,
};
