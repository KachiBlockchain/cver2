import React from 'react'

// import navigation data
import { navigation } from '../data'
import { Link } from 'react-scroll'
const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
            {navigation.map((item, index) => {
                return (
                    <li className='text-black text-[20px] hover:text-blue-800 border-b-2 border-transparent hover:border-blue-800  cursor-pointer ' key={index}>
                        <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duraction-300'>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav