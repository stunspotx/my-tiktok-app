import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

export default function VideoFooter ({channel, description, song}){
  
    return (
      <div className="videoFooter">
  
        <div className='videoFooter_text'>
          <h3>@{channel}</h3>
          <p>{description}</p>
  
          <div className='videoFooter_ticker'>
            <MusicNoteIcon className='musicFooter_icon'/>
            <p>{song}</p>
          </div>  
  
        </div>
  
        <img className='videoFooter_record' src="/images/record disk icon.png" alt='Record disk'/>
        
      </div>
    )
}