import React, {useState, useRef} from 'react'
import './Video.css'
import VideoSideBar from './VideoSideBar'

export default function Video ({url, likes, shares, messages, onVideoScroll}){
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      videoRef.current.muted = true
      setPlaying(false)
    }

    else {
      videoRef.current.play()
      videoRef.current.muted = false
      setPlaying(true)
    }
  }

  return(
    <div className='video'>
      <video 
        onClick={onVideoPress} 
        className='video__player' 
        ref={videoRef} 
        loop
        autoPlay
        muted
        preload='auto' 
        url={url}
      >
        <source src={url} type="video/webm" />
      </video>

      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  )
  
}