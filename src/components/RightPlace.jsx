import React from 'react'
import { NavLink } from 'react-router-dom'
const RightPlace = () => {
  return (
    <div className='flex flex-col'>
      This is right place page 


      <button>
        <NavLink to="/mathlvl">NEXT</NavLink>
      </button>
    </div>
  )
}

export default RightPlace
