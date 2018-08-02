import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export class MapContainer extends Component {
  render() {
    var points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 }
    ]

    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <Map
      google={this.props.google}
      style = {{height: '100%', width: '100%'}}
      initialCenter={{
        lat: 47.2655697,
        lng: 11.4144684
      }}
      bounds={bounds}
      zoom={13}>

      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 47.2608639, lng: 11.4051108}} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello There</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAgsu0KDdZbhCISu_0-iDH1DmBuAv00gck')
})(MapContainer)
