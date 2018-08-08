import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapCom extends Component {
  static defaultProps = {
    center: {
      lat: 47.2655697,
      lng: 11.4144684
    },
    zoom: 12,
    selectedPlace: {},
    activeMarker: {},
  };
  onMarkerClick = (marker) => {
        this.setState({
          selectedPlace: marker,
          activeMarker: marker.title,
          showingInfoWindow: true
        })
  }

  changeMarkerColor(color ,maps) {
    var markerImage = new maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + color +
      '|40|_|%E2%80%A2',
      new maps.Size(21, 34),
      new maps.Point(0, 0),
      new maps.Point(10, 34),
      new maps.Size(21, 34));
      return markerImage;
  }


renderMarkers(locations, map, maps) {
  var fireIcon = this.changeMarkerColor('ff0000', maps)
  var ambuIcon = this.changeMarkerColor('ffffff', maps)
  locations.map((location) => {
  if(location.iconstate === 'fireIcon') {
        location.icon = fireIcon;
      }
      else {
        location.icon = ambuIcon;
      }
    let marker = new maps.Marker({
    title: location.title,
    position: location.position,
    icon: location.icon,
    map: map,
    key: location.title,
  })
  marker.addListener('click', () => {
    this.onMarkerClick(marker)
  })
  return marker
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
          onGoogleApiLoaded={({location, map, maps}) => this.renderMarkers(this.props.locations, map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
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
