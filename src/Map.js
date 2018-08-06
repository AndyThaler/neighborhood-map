/* global google */
import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import Player from './Player'


export class MapContainer extends Component {

  state = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        })
  }

  onMapClicked = (props) => {
     if (this.state.showingInfoWindow) {
       this.setState({
         showingInfoWindow: false,
         activeMarker: null,
         selectedPlace: [],
       })
     }
   }

  render() {

    const changeMarkerColor = markerColor => {
      var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
        return markerImage;
    }

    var fireIcon = changeMarkerColor('ff0000')
    var ambuIcon = changeMarkerColor('ffffff')

    this.props.locations.map((location, i) => {
      if(this.props.locations[i].iconstate === 'fireIcon') {
      return  this.props.locations[i].icon = fireIcon;
      }
      else {
        return this.props.locations[i].icon = ambuIcon;
      }
    })




    return (
      <Map
      google={this.props.google}
      style = {{height: '60%', width: '100%'}}
      initialCenter={{
        lat: 47.2655697,
        lng: 11.4144684
      }}
      zoom={13}
      onClick= {this.onMapClicked}
      id= "map-div">

      {this.props.locations.map((location, i) => {
        return <Marker
                  title={this.props.locations[i].title}
                  position={this.props.locations[i].position}
                  icon= {this.props.locations[i].icon}
                  key = {this.props.locations[i].title}
                  animation={(this.state.selectedPlace.title === location.title || this.props.selectedLoc === location.title)
                    && this.props.google.maps.Animation.BOUNCE}
                  onClick= {this.onMarkerClick}
                />
      })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div id="infodiv">
          <h1>{this.state.selectedPlace.title}</h1>
          <Player/>
          </div>
          </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAgsu0KDdZbhCISu_0-iDH1DmBuAv00gck')
})(MapContainer)
