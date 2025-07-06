import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'


const Navbar = () => {
const [isOpen, setIsOpen]=useState(false)
const {user} = useUser()
const{openSignIn}=useClerk()
const navigate =useNavigate()


  return (
<div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
  <Link to='/' className='max-md:flex-1'>
    <img src={assets.logo1} alt="" className='w-36 h-auto'/>
  </Link>

  <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 px-8 py-3 bg-black/70 backdrop-blur transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:flex-row md:justify-between md:gap-8 md:bg-white/10 md:border border-gray-300/20 md:rounded-full`}>
    <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={() => setIsOpen(false)} />
    <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/'>Home</Link>
    <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/movies'>Events</Link>
    <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/'>Teaters</Link>
    <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/'>Releases</Link>
    <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/favourite'>Favourits</Link>
  </div>

  <div className='flex items-center gap-8'>
    <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer'/>
   {
    !user ? (
   
    <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Login</button>
    ) : (
    <>
  <Link to="/my-bookings" className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
    My Bookings
  </Link>
  <UserButton afterSignOutUrl="/" />
</>

     
    )
  }
    </div>

  <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
</div>

  )
}

export default Navbar
