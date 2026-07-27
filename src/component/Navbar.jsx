import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import darkLogo from '../assets/images/darkLogo.png'
import { navItems } from '../data/navbardata'
import Button from './ui/Button'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const menuRef = useRef(null)
  const location = useLocation()


  const handleClose = () =>{
    setIsOpen(false)
  }

  useEffect(() =>{
    setIsOpen(false)
  },[location.pathname])

  useEffect(() =>{
    const handleClick = (e) => {
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  },[])

 const {theme} = useTheme()
  return (
    <header className='sticky top-0 z-50 h-20 w-full shadow bg-white dark:bg-[#202738]'>
      <div className='max-w-7xl w-full h-full mx-auto  px-7 lg:px-12 xl:px-14 py-2 flex items-center justify-between'>
        <NavLink to='/'>
          <img src={theme ==="dark"? darkLogo : logo} alt="logo" className=' h-10 lg:h-14 '/>
        </NavLink>

        <nav className='hidden min-[900px]:flex items-center gap-4 lg:gap-6'>
          <ul className='flex items-center gap-4 lg:gap-6 '>
            {navItems.map((item) =>(
            <li key={item.name}>
              <NavLink  to={item.path} className={({isActive}) => ` font-medium text-sm 
              lg:text-base ${isActive ? "text-primary" :"text-gray-900 dark:text-white"}`}>
                {item.name}
              </NavLink>
            </li>
          ))}
          </ul>

          <div className='flex gap-4'>
            <Button text="Login" variant='secondary' className='border border-[#E0E0E0]'shine/>
            <Link to='/request-demo'><Button text="Request Demo" className='font-bold ' shine/></Link>
          </div>
          <ThemeToggle/>
        </nav>

         {/* mobile-menu */}

        <div className='block min-[900px]:hidden' ref={menuRef} >
        <div className='flex gap-6'>
          <ThemeToggle onToggle={handleClose}/>
          <button className=' cursor-pointer' onClick={toggleMenu}>
            {isOpen ? (<X/>) : (<Menu/>)}
          </button>
        </div>
        <div 
          className={`absolute top-full left-0 w-full bg-white dark:bg-[#0B0F19]  transition-all duration-300 
            ease-in-out min-[900px]:hidden overflow-hidden ${isOpen ? 'max-h-125 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <nav className='flex flex-col gap-4 px-6'>
            <ul className='flex flex-col gap-3'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.path} className={({isActive}) => ` font-medium text-sm 
                  ${isActive ? "text-primary" :"text-gray-900 dark:text-white"}`} >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2">
              <Button text="Login" variant='secondary' className='border border-[#E0E0E0] w-full 
              justify-center' onClick={handleClose} shine/>
              <Link to='/request-demo' className="w-full" >
                <Button text="Request Demo" className='font-bold w-full justify-center' shine
                onClick={handleClose}/>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      </div>   
      
    </header>
  )
}

export default Navbar
