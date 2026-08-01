"use client"
import '@/Components/Navabar/Navabar.css'
import Image from 'next/image'
import logo from '@/Components/assets/logo.jpg'

function Navabar() {
  return (
    <div className='navbar'>
        <div>
          <Image src={logo} alt='logo-image' className='logo'/>
        </div>
        <ul className='nav'>
          <li className='nav-item'>
            <a href='#home'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#service'>Services</a>
          </li>
          <li className='nav-item'>
            <a href='#protfolio'>Portfolio</a>
          </li>
          <li className='nav-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div>
           <button className='btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navabar