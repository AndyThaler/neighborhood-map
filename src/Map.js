/* global google */
import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'


export class MapContainer extends Component {
  render() {



    var fireIcon = changeMarkerColor('ff0000')
    var ambuIcon = changeMarkerColor('ffffff')
    var poliIcon = changeMarkerColor('0000ff')

    function changeMarkerColor(markerColor) {
      var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
        return markerImage;
    }
    var locations = [
    {title: 'Fire Brigade Innsbruck', icon: fireIcon, position: { lat: 47.2608639, lng: 11.4051108 }},
    {title: 'Red Cross Innsbruck', icon: ambuIcon, position: { lat: 47.2600461, lng: 11.4046938 }},
    {title: 'Tyrolean Air Ambulance', icon: ambuIcon, position: { lat: 47.2576489, lng: 11.3513075 }},
    {title: 'Public County & University Hospital Innsbruck', icon: ambuIcon, position: { lat: 47.2576489, lng: 11.3513075 }},
    {title: 'Volunteer Fire Department Hötting', icon: fireIcon, position: { lat: 47.2722737, lng: 11.385355 }},
    {title: 'Volunteer Fire Department Hungerburg', icon: fireIcon, position: { lat: 47.2863071, lng: 11.3956279 }},
    {title: 'Volunteer Fire Department Mühlau', icon: fireIcon, position: { lat: 47.2809358, lng: 11.4072096 }},
    {title: 'Volunteer Fire Department Reichenau', icon: fireIcon, position: { lat: 47.2724776, lng: 11.4310706 }},
    {title: 'Volunteer Fire Department Arzl', icon: fireIcon, position: { lat: 47.2840728, lng: 11.4332432 }},
    {title: 'Volunteer Fire Department New Arzl', icon: fireIcon, position: { lat: 47.2738388, lng: 11.4444762 }}
   ];

    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < locations.length; i++) {
      bounds.extend(locations[i].position);
    };


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

      {locations.map((location, i) => {
        return <Marker
                  title={locations[i].title}
                  position={locations[i].position}
                  icon= {locations[i].icon}
                  animation= {google.maps.Animation.DROP}
                  key = {locations[i].title}
                />
      })}



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
