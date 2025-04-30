import React from 'react'
import { Link } from 'react-router'

function SubNavbar() {
  return (
    <ul className='flex w-full justify-between text-lg hidden sm:flex'>
      <Link to=""><li className='subNavbar'>SE Series</li></Link>
      <Link><li className='subNavbar'>Pro Series</li></Link>
      <Link><li className='subNavbar'>6 Series</li></Link>
      <Link><li className='subNavbar'>7 Series</li></Link>
      <Link><li className='subNavbar'>8 Series</li></Link>
      <Link><li className='subNavbar'>X Series</li></Link>
      <Link><li className='subNavbar'>11 Series</li></Link>
      <Link><li className='subNavbar'>12 Series</li></Link>
      <Link><li className='subNavbar'>13 Series</li></Link>
      <Link><li className='subNavbar'>14 Series</li></Link>
      <Link><li className='subNavbar'>15 Series</li></Link>
      <Link><li className='subNavbar'>16 Series</li></Link>
    </ul>
  )
}

export default SubNavbar
