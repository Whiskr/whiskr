import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { sendEmail, fetchMatches, removeUnmatchedPets } from '../store';

// const className = {
//     base: 'myClass',
//     afterOpen: 'myClass_after-open',
//     beforeClose: 'myClass_before-close'
// }

// const overlayClassName = {
//     base: 'myOverlayClass',
//     afterOpen: 'myOverlayClass_after-open',
//     beforeClose: 'myOverlayClass_before-close'
// }

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class EmailPreview extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSend = this.onSend.bind(this)
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    onSend(user, pet) {
        sendEmail(user, pet);
        this.closeModal();
        this.props.resetMatches(user);
        this.props.history.push('/matches')
    }

    render() {
        const { user, pet, name, contacted } = this.props;
        const buttonClass = (name === 'matches') ? "emailEnvelope smallIcon" : "emailEnvelope largeIconRight"
        const wasContacted = contacted ? "check" : "envelope-o"
        console.log(contacted)
        return (
            <div>
                <button className={buttonClass} onClick={this.openModal}> <FontAwesome name={wasContacted} /> </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="email-header">to: {pet.contact.email.$t}</div>
                    <div className="email-header">subject: An Inquiry About One of Your Pets</div>
                    <div>
                        <h3 className="email-greeting">Greetings from Whiskr!</h3>
                        <p className="email-introduction">
                            We’re reaching out to you because one of our users has shown interest
                        in adopting a pet in your care. This letter is a courtesy our service
                        provides to connect users with potential pets, so that caregivers may
                        also ensure the best possible matches for their pets. Please review
                        the following information, and reach out to the user directly if you
                        would like to pursue further communication.
                        </p>
                        <h5>User Profile:</h5>
                        <div className="email-details">
                            <strong>Email: </strong><a href={user.email}>{user.email}</a>
                        </div>
                        <div className="email-details">
                            <strong>Phone Number: </strong>{user.phoneNumber}
                        </div>
                        <div className="email-details">
                            <strong>Location: </strong>{user.zipCode}
                        </div>
                        <div className="email-details" hidden={!user.hasYoungChildren}>
                            <p className="children">The User has Young Children In the Home</p>
                        </div>
                        <div className="email-details">
                            <strong>Pet Owning History: </strong>
                                <div className="email-text plain">{user.petHistory}</div>
                        </div>
                        <h5>This user is interested in {pet.name.$t}: </h5>
                        <div className="email-details">
                            <strong>Id: </strong>{pet.id.$t}
                        </div>
                        <div className="email-details">
                            <strong>Location: </strong>{pet.contact.city.$t}, {pet.contact.state.$t}
                        </div>
                        <div>
                            <p className="email-text plain">
                                Thank you for all that you do to help these animals find their
                            furrever homes.
                        </p>
                            <p className="email-signoff">Sincerely,</p>
                            <div className="email-signoff">The Whiskr Team</div>
                        </div>
                        <button className="email-button" type="button" onClick={this.closeModal}>Cancel</button>
                        <button className="email-button" type="button" onClick={() => this.onSend(user, pet) }>Yes! Send it!</button>
                        <Link to={'/updateProfile'}><button className="email-button" onClick={this.closeModal} type="button">Update Profile First</button></Link>
                    </div>
            </Modal>        
        </div>
                )
    }
}

//CONTAINER
const mapDispatch = (dispatch) => ({
    resetMatches(user) {
        dispatch(removeUnmatchedPets())
        dispatch(fetchMatches(user.id))
    }
})

export default withRouter(connect(null, mapDispatch)(EmailPreview))
