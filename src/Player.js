import React from 'react'
//Add the Youtube dependency
import YouTube from 'react-youtube'

class Player extends React.Component {

  render() {
      const opts = {
        height: '200',
        width: '200',
        playerVars: {
          autoplay: 0
        }
      }

    return (
    <div id="yt-player">
    <YouTube
      videoId="o4C4jvVwjLw"
      opts={opts}
    />
    </div>
  )
}
}
export default Player
