import React from 'react'
import { NavLink } from 'react-router-dom'

const Interested = () => {
  return (
    <div className='flex flex-col'>
      this is interested page


      <button>
        <NavLink to="/rightplace">
                NEXT
        </NavLink>
      </button>
    </div>
  )
}

export default Interested
