import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapCom extends Component {
  static defaultProps = {
    center: {
      lat: 47.2655697,
      lng: 11.4144684
    },
    zoom: 12
  };

renderMarkers(map, maps) {
  let marker = new maps.Marker({
    position: {
      lat: 47.2655697,
      lng: 11.4144684
    },
    map: map
  })
}
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAgsu0KDdZbhCISu_0-iDH1DmBuAv00gck' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapCom;
