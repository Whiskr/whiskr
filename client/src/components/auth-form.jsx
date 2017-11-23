import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { auth } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { handleSubmit } = props;
  let type;
  return (
    <div>
      <h1>Whiskr</h1>
      <form onSubmit={event => handleSubmit(event, type)}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit" onClick={() => { type = 'login'; }}>Log In</button>
          <button type="submit" onClick={() => { type = 'signup'; }}>Sign Up</button>
        </div>
        {/* error && error.response && <div> {error.response.data} </div> */}
      </form>
      <a href="/auth/google">Log in with Google</a>
      <a href="/auth/google">Sign up with Google</a>
      <br/>
      <a href="/auth/facebook">Log in with Facebook</a>
      <a href="/auth/facebook">Sign up with Facebook</a>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapState = state => ({
  error: state.currentUser.error,
});

const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit(evt, type) {
    evt.preventDefault();
    console.log(type);
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    const redirect = type === 'login' ? '/pets' : '/createProfile';
    Promise.resolve(dispatch(auth(email, password, type)))
      .then(() => { ownProps.history.push(redirect); });
  },
});



export const Login = withRouter(connect(mapState, mapDispatch)(AuthForm));

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
