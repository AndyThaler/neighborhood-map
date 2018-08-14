import React from 'react'
import Player from './Player'
class Info extends React.Component {
  state = {
    img: <Player/>,
    oldLoc: ''
  }


  componentDidUpdate(){
    setTimeout(
      function() {
    if(!this.props.selectedLoc) {
      this.setState({img: <Player/>})
    }
    else {
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
      <div id='information'>
      <h1>{this.props.selectedLoc || 'Welcome! Please Select An Emergency Service Station!'}</h1>
      <div id='information-core'>
      {this.state.img}
      </div>
      </div>
  )
}
}
export default Info
