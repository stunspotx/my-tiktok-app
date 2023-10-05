import React, { useState } from 'react'
import './VideoSideBar.css'
import ShareIcon from '@mui/icons-material/Share'
import MessageIcon from '@mui/icons-material/Message'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function VideoSideBar ({likes, shares, messages}){ 
  const [liked, setLiked] = useState(false)
  
  return (
    <div className='videoSideBar'>
      
      <div className='videoSideBar__button'>
       
        {
          liked ? (
            <FavoriteIcon fontSize='large' onClick={(e) => {setLiked(false)}} />
          ) : 
          (
            <FavoriteBorderIcon fontSize='small' onClick={(e) => {setLiked(true)}} />
          )
        }
    
        <p>{liked ? `${likes + 1}` : `${likes}`}</p>

      </div>

      <div className='videoSideBar__button'>
        <MessageIcon fontSize='small'/>
        <p>{messages}</p>
      </div>

      <div className='videoSideBar__button'>
        <ShareIcon fontSize='small'/>
        <p>{shares}</p>
      </div>
      
    </div>
  )
  
} 