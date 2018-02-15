import React, { Component } from 'react';


class CurrentLocation extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: [],
    }
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }
  getLocation(){
    console.log('clicked!',navigator)
    if ("geolocation" in navigator) {
      console.log("available")
      navigator.geolocation.getCurrentPosition( this.showPosition, this.errorHandler)
    } else {
       console.log('geolocation IS NOT available')
    }
  }

  showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log('lat',latitude,'long', longitude)
 }

 errorHandler(err){
  console.log('getCurrentPosition Error:',err)
 }

  render(){
    return(
      <button onClick={this.getLocation}> Get Current Location </button>
    )
  }
}

export default CurrentLocation
