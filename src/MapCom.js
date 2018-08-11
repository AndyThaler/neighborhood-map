import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import escapeRegExp from 'escape-string-regexp';


class MapCom extends Component {
  static defaultProps = {
    center: {
      lat: 47.2655697,
      lng: 11.4144684
    },
    zoom: 12
  }
  state = {
    selectedPlace: {},
    activeMarker: {},
    map: {},
    maps: {},
    places: [],
    markers: [],
    shownmarkers: [],
    init: ''
  }
    onMarkerClick = (marker, location) => {
          this.setState({
            selectedPlace: marker,
            activeMarker: marker.title,
            showingInfoWindow: true
          })
          if(this.props.selectedLoc !== marker.title) {
            this.props.deleteLoc();
            this.props.updateLoc(marker.title, this.props.locations);
          }

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

  componentDidUpdate() {
    if(this.state.places !== this.props.locations && this.state.init === '1'){
    this.setState({ places: this.props.locations})
    let showingMarkers
    if (this.props.query) {
      this.clearMarkers()
      const match = new RegExp(escapeRegExp(this.props.query), 'i')
      showingMarkers = this.state.markers.filter((marker) => match.test(marker.title))
    } else {
      showingMarkers = this.state.markers
    }
    this.setState({ shownMarkers: showingMarkers})
    this.setMapOnMarkers(showingMarkers, this.state.map)
  }
  }

  setMapOnMarkers(markers, map) {
    markers.map(marker => {
      return marker.setMap(map);
    }
    )
  }

  clearMarkers() {
    this.setMapOnMarkers(this.state.shownMarkers, null)
  }


  renderMarker(locations, map, maps) {
   this.setState({map: map, maps: maps, markers: []})
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
     key: location.title
   })
     marker.addListener('click', () => {
       this.onMarkerClick(marker)
     })
     this.setState({
       markers: [...this.state.markers, marker]
     })
     return marker
    })
    this.setState({ init: '1'})
    var array = [...this.state.markers]
    array.splice(0, 0)
    this.setState({markers: array})
  }


  render() {

    return (

      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAgsu0KDdZbhCISu_0-iDH1DmBuAv00gck' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({location, map, maps}) => this.renderMarker(this.props.locations, map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapCom;
