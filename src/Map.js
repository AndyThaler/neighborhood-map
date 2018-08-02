/* global google */
import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'


export class MapContainer extends Component {
  render() {

    var locations = [
    {title: 'Fire Brigade Innsbruck', position: { lat: 47.2608639, lng: 11.4051108 }},
    {title: 'Red Cross Innsbruck', position: { lat: 47.2600461, lng: 11.4046938 }},
    {title: 'Tyrolean Air Ambulance', position: { lat: 47.2576489, lng: 11.3513075 }},
    {title: 'Public County & University Hospital Innsbruck', position: { lat: 47.2576489, lng: 11.3513075 }},
    {title: 'Volunteer Fire Department Hötting', position: { lat: 47.2722737, lng: 11.385355 }},
    {title: 'Volunteer Fire Department Hungerburg', position: { lat: 47.2863071, lng: 11.3956279 }},
    {title: 'Volunteer Fire Department Mühlau', position: { lat: 47.2809358, lng: 11.4072096 }},
    {title: 'Volunteer Fire Department Reichenau', position: { lat: 47.2724776, lng: 11.4310706 }},
    {title: 'Volunteer Fire Department Arzl', position: { lat: 47.2840728, lng: 11.4332432 }},
    {title: 'Volunteer Fire Department New Arzl', position: { lat: 47.2738388, lng: 11.4444762 }}
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
                  color = 'blue'
                  animation= {google.maps.Animation.DROP}
                  id = {i}
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
