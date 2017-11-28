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
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleOutsideClick() {
    const { menuOpen } = this.state
    if (menuOpen) {
      this.setState({ menuOpen: false })
    }
  }

  handleMenuClick() {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }

  handleLogout() {
    this.handleOutsideClick()
    this.props.handleClick()
  }
  
  render () {
  const { isLoggedIn } = this.props;
  const { menuOpen } = this.state
  return (
    <div>
      {isLoggedIn ?
        <nav className="menu">
          <input type="checkbox" checked={menuOpen} href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label onClick={this.handleMenuClick} className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1" />
            <span className="lines line-2" />
            <span className="lines line-3" />
          </label>
          <Link to="/home" 
                onClick={this.handleOutsideClick} 
                className="menu-item item-1" >
                  <FontAwesome name="user" />
                </Link>
          <Link to="/matches" 
                onClick={this.handleOutsideClick} 
                className="menu-item item-2">
                  <FontAwesome name="heart" />
                </Link>
          <Link to="/pets" 
                onClick={this.handleOutsideClick} 
                className="menu-item item-3" >
                  <FontAwesome name="paw" />
                </Link>
          <Link to="/logout" 
                onClick={this.handleLogout} 
                className="menu-item item-4" >
                  <FontAwesome name="sign-out" />
                </Link>
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

export default withRouter(connect(mapState, mapDispatch)(Menu));

Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
