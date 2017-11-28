import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import { sendEmail } from '../store';


export const EmailPreview = (props) => {
    const {user, pet, sendTheEmail} = props;
    return (
        <div>
            <div>to: {pet.contact.email.$t}</div>
            <div>subject: An Inquiry About One of Your Pets</div>
            <div>
                <h1>Greetings from Whiskr!</h1>
                    <p>
                    We’re reaching out to you because one of our users has shown interest
                    in adopting a pet in your care. This letter is a courtesy our service
                    provides to connect users with potential pets, so that caregivers may
                    also ensure the best possible matches for their pets. Please review
                    the following information, and reach out to the user directly if you
                    would like to pursue further communication.
                    </p>
                <h2>User Profile:</h2>
                    <div>
                        <strong>Email: </strong>{user.email}
                    </div>
                    <div>
                        <strong>Phone Number: </strong>{user.phoneNumber}
                    </div>
                    <div>
                        <strong>Location: </strong>{user.zipCode}
                    </div>
                    <div>
                        <strong>Young Children In the Home: </strong>{user.hasYoungChildren}
                    </div>
                    <div>
                        <strong>Pet Owning History: </strong>{user.petHistory}
                    </div>
                <h2>This user is interested in {pet.name.$t}: </h2>
                    <div>
                        <strong>Id: </strong>{pet.id.$t}
                    </div>
                    <div>
                        <strong>Location: </strong>{pet.contact.city.$t}, {pet.contact.state.$t}
                    </div>
                <div>
                    <p>
                        Thank you for all that you do to help these animals find their
                        furrever homes.
                    </p>
                    <p>Sincerely,</p>
                    <div>The Whiskr Team</div>
                </div>
            </div>
        <button type="button" onClick={() => {sendTheEmail(user, pet)}}>Yes! Send it!</button>
        <Link to={'/updateProfile'}><button type="button">Update Profile First</button></Link>
      </div>
    )
}

//CONTAINER
const mapDispatch = (dispatch, ownProps) => ({
    sendTheEmail(user, pet) {
        Promise.resolve(dispatch(sendEmail(user, pet)))
        .then(ownProps.history.push('/matches'))
    }
})

export default connect(null, mapDispatch)(EmailPreview);