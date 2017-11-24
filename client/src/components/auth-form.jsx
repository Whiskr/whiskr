import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { auth } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { handleSubmit } = props;
  let type;
  return (
    <div className="splash">
      <div className="form animated flipInX login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
        <label htmlFor="tab-1" className="tab">Log In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">Sign Up</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form onSubmit={event => handleSubmit(event, type)}>
              <div className="group">
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <input name="email" type="text" />
              </div>
              <div className="group">
                <label htmlFor="password">
                  <small>Password</small>
                </label>
                <input name="password" type="password" />
              </div>
              <div className="group">
                <button
                  type="submit"
                  onClick={() => {
                type = 'login';
              }}
                >
              Log In
                </button>

              </div>
            </form>
            <div className="group">
              <span>or Log in with </span>
              <a href="/auth/google" >
                <FontAwesome name="google" className="social google" />
              </a>
              <a href="/auth/facebook">
                <FontAwesome name="facebook" className="social facebook" />
              </a>
            </div>
          </div>
          <div className="sign-up-htm">
            <form onSubmit={event => handleSubmit(event, type)}>
              <div className="group">
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <input name="email" type="text" />
              </div>
              <div className="group">
                <label htmlFor="password">
                  <small>Password</small>
                </label>
                <input name="password" type="password" />
              </div>
              <div className="group">
                <label htmlFor="password">
                  <small>Verify Password</small>
                </label>
                <input name="password" type="password" />
              </div>
              <div className="group">
                <button
                  type="submit"
                  onClick={() => {
                type = 'signup';
              }}
                >
              Sign Up
                </button>
              </div>
              {/* error && error.response && <div> {error.response.data} </div> */}
            </form>

            <div>
              <span>or Sign up with </span>
              <a href="/auth/google" >
                <FontAwesome name="google" className="social google" />
              </a>
              <a href="/auth/facebook" >
                <FontAwesome
                  name="facebook"
                  className="social facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
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
    Promise.resolve(dispatch(auth(email, password, type))).then(() => {
      ownProps.history.push(redirect);
    });
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
