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
    init: '',
    error: ''
  }

  //Connecting the list with the marker, when clicked
    onListClick = () => {
      let listclicker
      const match = new RegExp(escapeRegExp(this.props.selectedLoc))
      listclicker = this.state.shownMarkers.filter((marker) => match.test(marker.title))
      listclicker[0].setAnimation(this.state.maps.Animation.BOUNCE)
    }
    //Gets called when a marker is clicked - Sets the selected location
    onMarkerClick = (marker, location) => {
          this.setState({
            selectedPlace: marker,
            activeMarker: marker.title,
            showingInfoWindow: true
          })
          if(this.props.selectedLoc !== marker.title) {
            this.props.deleteLoc()
            this.props.updateLoc(marker.title, this.props.locations)
          }
        marker.setAnimation(this.state.maps.Animation.BOUNCE)
    }

  //Changing colors of markers depending on their type
  changeMarkerColor(color ,maps) {
    var markerImage = new maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + color +
      '|40|_|%E2%80%A2',
      new maps.Size(20, 36),
      new maps.Point(0, 0),
      new maps.Point(10, 34),
      new maps.Size(20, 36));
      return markerImage;
  }

  //Whenever the list changes, the map will too
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
    if(this.props.selectedLoc) {
      this.onListClick()
    }
  }

  //Setting the markers on the map
  setMapOnMarkers(markers, map) {
    markers.map(marker => {
      return marker.setMap(map);
    }
    )
  }

  //making the unwanted markers invisible
  clearMarkers() {
    this.setMapOnMarkers(this.state.shownMarkers, null)
  }

  error(e) {
    this.setState({ error: 'Something went wrong while fetching information.'})
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
      <section>
      <div role="application" id="map">
      <p id="map-error">{this.state.error}</p>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAgsu0KDdZbhCISu_0-iDH1DmBuAv00gck' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onError= {e => this.error(e)}
          onGoogleApiLoaded={({location, map, maps}) => this.renderMarker(this.props.locations, map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
        </GoogleMapReact>
      </div>
      </section>
    )
  }
}

export default MapCom;
