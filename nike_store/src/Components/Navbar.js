import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const HandleMenuOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className='padding-x py-8 w-full'>
            <nav className=' max-lg:flex-col flex relative justify-between items-center max-container'>
                <div className='max-lg:w-full'>
                    <a href="/">
                        <img src={headerLogo}
                            alt="logo"
                            width={130}
                            height={29} />
                    </a>
                </div>

                <ul className=' flex-1 flex max-lg:flex-col items-center justify-center gap-16 '>
                    {
                        !isOpen && navLinks?.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-900'>
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>
                <div className='hidden max-lg:block absolute right-1 top-1 cursor-pointer' onClick={HandleMenuOpen}>
                    <img src={hamburger} alt="hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
