import React from 'react'
import MapCom from './MapCom.js'
import Info from './Info.js'
import escapeRegExp from 'escape-string-regexp'

class ListOrg extends React.Component {

    state = {
      query: '',
      selectedLocation: '',
      chosenLocation: ''
    }

    updateQuery = (query) => {
      this.setState({ query: query })
    }

    updateSelectedLocation = (loc, locations) => {
      this.setState({ selectedLocation: loc})

      const match = new RegExp(escapeRegExp(loc))
      let chosenLoc = locations.filter((location) => match.test(location.title))
      this.setState({ chosenLocation: chosenLoc})
    }

    deleteLoc = () => {
      this.setState({ selectedLocation: '' })
    }

  render() {


    var locations = [
    {title: 'Fire Brigade Innsbruck', category: 'Fire', description: 'The only paid fire brigade in the county, that does not belong to a company.', iconstate: 'fireIcon', position: { lat: 47.2608639, lng: 11.4051108 }},
    {title: 'Red Cross Innsbruck', category: 'Ambulance', description: 'The biggest ambulance station in the whole county.', iconstate: 'ambuIcon', position: { lat: 47.2600461, lng: 11.4046938 }},
    {title: 'Tyrolean Air Ambulance', category: 'Plane', description: 'A tyrolean service, to bring heavily injured back home.', iconstate: 'ambuIcon', position: { lat: 47.2576489, lng: 11.3513075 }},
    {title: 'Public County- & University Hospital Innsbruck', category: 'Hospital', description: 'The biggest hospital in the county, with worldwide known doctors.', iconstate: 'ambuIcon', position: { lat: 47.2632716, lng: 11.3877864 }},
    {title: 'Volunteer Fire Department Hötting', category: 'Fire', description: 'The voluntary fire outpost in Hötting.', iconstate: 'fireIcon', position: { lat: 47.2722737, lng: 11.385355 }},
    {title: 'Volunteer Fire Department Hungerburg', category: 'Fire', description: 'The voluntary fire outpost in Hungerburg.', iconstate: 'fireIcon', position: { lat: 47.2863071, lng: 11.3956279 }},
    {title: 'Volunteer Fire Department Mühlau', category: 'Fire', description: 'The voluntary fire outpost in Mühlau.', iconstate: 'fireIcon', position: { lat: 47.2809358, lng: 11.4072096 }},
    {title: 'Volunteer Fire Department Reichenau', category: 'Fire', description: 'The voluntary fire outpost in Reichenau.', iconstate: 'fireIcon', position: { lat: 47.2724776, lng: 11.4310706 }},
    {title: 'Volunteer Fire Department Arzl', category: 'Fire', description: 'The voluntary fire outpost in Arzl.', iconstate: 'fireIcon', position: { lat: 47.2840728, lng: 11.4332432 }},
    {title: 'Volunteer Fire Department New Arzl', category: 'Fire', description: 'The voluntary fire outpost in New Arzl.', iconstate: 'fireIcon', position: { lat: 47.2738388, lng: 11.4444762 }}
   ];

   let showingServices
   if (this.state.query) {
     const match = new RegExp(escapeRegExp(this.state.query), 'i')
     showingServices = locations.filter((location) => match.test(location.title))
   } else {
     showingServices = locations
   }

    return (
      <div id="list-div">
      <input
        className="search-places"
        type="text"
        placeholder="Search places"
        value={this.state.query}
        onChange={(event) => this.updateQuery(event.target.value)}
        />
        <ul className='service-list'>
          {showingServices.map((service) => (
          <li key={service.title} className={"service-list-item " + ( service.title === this.state.selectedLocation ? 'selected' : '')} onClick= { (event) => this.updateSelectedLocation(event.currentTarget.childNodes[0].innerText.replace(/[\n\t\r]/g,""), locations)}>
          <div className="service-name">
                <h3>{service.title}</h3>
          </div>
          <div className="service-description">
                <p>{service.description}</p>
          </div>
          </li>
          ))}
        </ul>

        <div className='map-div'>
        <MapCom locations={showingServices} query={this.state.query} selectedLoc={this.state.selectedLocation} updateLoc={this.updateSelectedLocation} deleteLoc={this.deleteLoc}/>
        </div>
        <div id="information-container">
        <Info locations={showingServices} selectedLoc={this.state.selectedLocation} cat={this.state.chosenLocation[0]}/>
        </div>
        </div>
  )
}
}

export default ListOrg
