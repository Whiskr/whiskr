import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentZipcode, removeCurrentZipcode} from '../store';

class CurrentLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latLng: []
    }
    // Bindings
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }
  getLocation() {
    // console.log('clicked!', navigator)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.errorHandler)
    } else {
      console.log('geolocation IS NOT available')
    }
  }

  showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.setState({
      latLng: [latitude, longitude]
    });
    // console.log(this.state.latLng)
    this.props.onLocation(this.state.latLng[0], this.state.latLng[1])
  }

  errorHandler(err) {
    console.log('getCurrentPosition Error:', err)
  }

  render() {
    return (<button onClick={this.getLocation}>
      Get Current Location
    </button>)
  }
}

const mapState = state => ({currentLocation: state.currentLocation});

const mapDispatch = dispatch => ({
  onLocation(lat, lng) {
    console.log('LAT', lat, 'LNG', lng)
    dispatch(getCurrentZipcode(lat, lng));
  }
});

export default connect(mapState, mapDispatch)(CurrentLocation);
