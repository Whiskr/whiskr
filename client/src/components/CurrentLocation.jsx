import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentZipcode, removeCurrentLocation } from "../store";

class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latLng: [],
      geolocationOn: false
    };
    // Bindings
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.errorHandler
      );
      this.setState({ geolocationOn: true });
    } else {
      console.log("geolocation IS NOT available");
    }
  }

  showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.setState({
      latLng: [latitude, longitude]
    });
    this.props.onLocation(
      this.state.latLng[0],
      this.state.latLng[1],
      this.props.currentUser.id
    );
  }

  errorHandler(err) {
    console.log("getCurrentPosition Error:", err);
  }

  render() {
    return (
      <div>
        {this.state.geolocationOn ? (
          <button
            className="geoLoc"
            onClick={e => {
              e.preventDefault();
              this.setState({ geolocationOn: false });
              this.props.onTurnOff();
            }}
          >
            Turn Off Current Location
          </button>
        ) : (
          <button
            className="geoLoc"
            onClick={e => {
              e.preventDefault();
              this.getLocation();
            }}
          >
            Get Current Location
          </button>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  currentUser: state.currentUser,
  currentLocation: state.currentLocation
});

const mapDispatch = dispatch => ({
  onLocation(lat, lng, userId) {
    console.log("LAT", lat, "LNG", lng);
    dispatch(getCurrentZipcode(lat, lng, userId));
  },
  onTurnOff() {
    dispatch(removeCurrentLocation());
  }
});

export default connect(mapState, mapDispatch)(CurrentLocation);
