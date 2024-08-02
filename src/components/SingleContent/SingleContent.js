import React from 'react'
import './SingleContent.css'
import { img_300,img_500, unavailable } from '../../config'
import TurnedInIcon from '@mui/icons-material/TurnedIn';
function SingleContent({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average}) {
  return (
    <div className='media'>
        <TurnedInIcon className='badge' badgecontent={vote_average} color={vote_average>6 ?"primary":"secondary"}/>
        <img className='poster' src={poster ?`${img_300}/${poster}`:unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className='sunTitle'>{media_type ==='tv' ? 'TV Series':'Movies'}
            <span className='sunTitle'>{date}</span>
        </span>
    </div>
  )
}

export default SingleContent