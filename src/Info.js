import React from 'react'
import Player from './Player'
class Info extends React.Component {
  state = {
    img: <Player/>,
    oldLoc: ''
  }


  componentDidUpdate(){
    //whenever the location changes, this function gets called
    setTimeout(
      function() {
    if(!this.props.selectedLoc) {
      this.setState({img: <Player/>})
    }
    else {
    //Third-Party API unsplash is requested
    if(this.state.oldLoc !== this.props.selectedLoc) {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.props.cat.category}`, {
      headers: {
        Authorization: 'Client-ID e8876ac4e8a100796321e72c8f1b2e264d7b84846fff5feae744aea74f8c3499'
      }
      }).then(response => response.json())
      .then(data => {
        const firstImage = data.results[1]
        let picture  = [
            <figure key={this.props.selectedLoc}>
                <img src={firstImage.urls.small}  className="info-img" alt={this.props.cat.category} />
                <figcaption>{this.props.cat.category} by {firstImage.user.name}</figcaption>
            </figure>
        ]
        this.setState({img: picture, oldLoc: this.props.selectedLoc})
      })
      .catch(e => console.log(e, 'image'))};}}
      .bind(this),
      100
    )
  }

  render() {

    return (
      <section id='information'>
      <h2 id="info-header" tabIndex="0">{this.props.selectedLoc || 'Welcome! Please Select An Emergency Service Station!'}</h2>
      <div tabIndex="0" role="application" id='information-core'>
      {this.state.img}
      </div>
      </section>
  )
}
}
export default Info
