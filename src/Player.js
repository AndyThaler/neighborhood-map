import React from 'react'
import YouTube from 'react-youtube'

class Player extends React.Component {

  render() {
      const opts = {
        height: '250',
        width: '400',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      }

    return (
    <YouTube
      videoId="o4C4jvVwjLw"
      opts={opts}
    />
  )
}
}
export default Player
