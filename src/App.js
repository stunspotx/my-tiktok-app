import React from 'react'
import './App.css'
import videoMetadata from './metadata/videos.json'
import Video from './components/Video.js'
import VideoFooter from './components/VideoFooter.js'

function App() {
  const videos = videoMetadata

  return (
    <div className='app'>
      <div className='container'>   
        {
          videos.map((video, index) => {
            return (
              <>
                <Video url={video.url} likes={video.likes} shares={video.shares} messages={video.messages} />
                <VideoFooter channel={video.channel} description={video.description} song={video.song}/>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
