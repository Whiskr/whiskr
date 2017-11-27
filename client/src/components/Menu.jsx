import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../store';

export class Menu extends React.Component {

  constructor(){
    super();
    this.state = {
      menuOpen : false
    }
    this.handleClickEvent = this.handleClickEvent.bind(this)
  }

  handleClickEvent(event) {
    event.preventDefault();
    const newState = !this.state.menuOpen
    this.setState({ menuOpen: newState })
  }

  render () {
  const { handleClick, isLoggedIn } = this.props;
  const { menuOpen } = this.state
  return (
    <div>
      {isLoggedIn ?
        <nav className="menu">
          <input type="checkbox" checked={menuOpen} href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1" />
            <span className="lines line-2" />
            <span className="lines line-3" />
          </label>
          <Link to="/home" className="menu-item item-1" ><FontAwesome name="user" /></Link>
          <Link to="/matches" className="menu-item item-2"><FontAwesome name="heart" /></Link>
          <Link to="/pets" className="menu-item item-3" ><FontAwesome name="paw" /></Link>
          <Link to="/logout" className="menu-item item-4" onClick={handleClick} ><FontAwesome name="sign-out" /></Link>
        </nav>
: null
    }
    </div>
    );
  };
}

const mapState = state => ({
  currentUser: state.currentUser,
  isLoggedIn: !!state.currentUser.id,
});

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  },
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Menu));


Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
