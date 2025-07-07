import React from 'react'
import { Link } from 'react-router-dom'
const Dropdown = () => {
  return (
    <>
    <div className='flex flex-col Dropdown'>
        <ul className='flex flex-col gap-4'>
            
            <Link to={'/apply'}><li>Apply</li></Link>
            <Link to={'/history'}><li>History</li></Link>
            <li>Logout</li>
        </ul>
    </div>
    </>
  )
}

export default Dropdown
