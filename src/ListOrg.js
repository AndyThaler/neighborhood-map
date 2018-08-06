import React from 'react'
import MapContainer from './Map.js'
import escapeRegExp from 'escape-string-regexp'

class ListOrg extends React.Component {

    state = {
      query: ''
    }

    updateQuery = (query) => {
      this.setState({ query: query })
    }

  render() {


    var locations = [
    {title: 'Fire Brigade Innsbruck', iconstate: 'fireIcon', position: { lat: 47.2608639, lng: 11.4051108 }},
    {title: 'Red Cross Innsbruck', iconstate: 'ambuIcon', position: { lat: 47.2600461, lng: 11.4046938 }},
    {title: 'Tyrolean Air Ambulance', iconstate: 'ambuIcon', position: { lat: 47.2576489, lng: 11.3513075 }},
    {title: 'Public County- & University Hospital Innsbruck', iconstate: 'ambuIcon', position: { lat: 47.2632716, lng: 11.3877864 }},
    {title: 'Volunteer Fire Department Hötting', iconstate: 'fireIcon', position: { lat: 47.2722737, lng: 11.385355 }},
    {title: 'Volunteer Fire Department Hungerburg', iconstate: 'fireIcon', position: { lat: 47.2863071, lng: 11.3956279 }},
    {title: 'Volunteer Fire Department Mühlau', iconstate: 'fireIcon', position: { lat: 47.2809358, lng: 11.4072096 }},
    {title: 'Volunteer Fire Department Reichenau', iconstate: 'fireIcon', position: { lat: 47.2724776, lng: 11.4310706 }},
    {title: 'Volunteer Fire Department Arzl', iconstate: 'fireIcon', position: { lat: 47.2840728, lng: 11.4332432 }},
    {title: 'Volunteer Fire Department New Arzl', iconstate: 'fireIcon', position: { lat: 47.2738388, lng: 11.4444762 }}
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
          <li key={service.title} className="service-list-item" onClick= { (event) => this.updateQuery(event.currentTarget.childNodes[0].innerText.replace(/[\n\t\r]/g,""))}>
          <div className="service-name">
                <h3>{service.title}</h3>
          </div>
          <div className="service-description">
                <p>{service.iconstate}</p>
          </div>
          </li>
          ))}
        </ul>

        <MapContainer locations={showingServices}/>

      </div>
  )
}
}

export default ListOrg
