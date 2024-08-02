import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header' onClick={()=>window.scroll(0,0)}>MOVIEFIX</div>
  )
}

export default Header