import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {logout} from '../store';

const Navbar = (props) => {
  const {handleClick, isLoggedIn} = props


  return (
    <nav className="navbar">
     <div>
            {
              isLoggedIn
                ? <div>
                  {/* The navbar will show these links after you log in */}
                  <Link to="/home">Home</Link>
                  <a href="#" onClick={handleClick}>Logout</a>
                </div>
                : <div>
                  {/* The navbar will show these links before you log in */}
                  <Link to="/login">Login</Link>
                  <br/>
                  <Link to="/signup">Sign Up</Link>
                </div>
            }

         
      </div>
    </nav>
  )
};



const mapState = (state) => {
  return {
    isLoggedIn: !!state.currentUser.id,
    categories: state.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
