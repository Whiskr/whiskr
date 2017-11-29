import React, { Component } from 'react';


class CurrentLocation extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: [],
    }
    this.getLocation = this.getLocation.bind(this);
  }
  getLocation(){
    console.log('clicked!',navigator)
    if ("geolocation" in navigator) {
      console.log("available")
      navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
       console.log('geolocation IS NOT available')
    }
  }

  showPosition(position){
    console.log("POSSSS", position)
    return
    // let location = <p>{position.coords.latitude + ',' + position.coords.longitude}</p>
    //  console.log(location)
  }

  render(){
    return(
      <button onClick={this.getLocation}> Get Current Location </button>
    )
  }
}

export default CurrentLocation
