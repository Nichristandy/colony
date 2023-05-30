import React,{useState} from 'react'
// import { Link } from 'react-scroll'
import { Transition } from '@headlessui/react'
import Link from 'next/link';


function Navbar2() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='aeonik'>
        <div className='w-full px-12 py-7'>
            <div className='flex flex-row align-middle justify-between w-full '>
                <div className='w-1/2 flex items-center'>
                    <Link 
                    href='/home'
                    activeClass='home'
                    to='/home'
                    smooth = {true}
                    offset={50}
                    duration={500}
                    className=''>
                        <img src='assets/logo-ungu.svg'/>
                    </Link>
                </div>
                <div className='hidden md:flex md:flex-row w-1/2 justify-end space-x-8'>
                        <Link 
                            href="/about"
                            activeClass='about'
                            to='/pages/about'
                            smooth = {true}
                            offset={50}
                            duration={500}
                            className='text-xl cursor-pointer'>
                            About Us
                        </Link>
                        <Link 
                        href="/contact"
                            activeClass='contact'
                            to='contact'
                            smooth = {true}
                            offset={50}
                            duration={500}
                            className='text-xl cursor-pointer'>
                            Contact Us
                        </Link>
                </div>
                {/* mobile menu */}
                <div className='flex md:hidden'>

                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className='inline-flex items-center text-white bg-[#5F59F7] px-2 py-2 rounded-md'
                        aria-controls ="mobile-menu"
                        aria-expanded = "false">
                        
                            <span className='sr-only'>Open main menu</span>
                                {/* tking icon from w3 website */}
                                {/* d = shape code */}
                                {!isOpen ?(
                                    <svg 
                                        className='block h-6 w-6' 
                                        xmlns='http:www.w3.org/2000/svg' 
                                        fill='none' 
                                        viewBox='0 0 24 24' 
                                        stroke='currentColor' 
                                        aria-hidden="true"
                                    >
                                        <path 
                                            strokeLinecap='round' 
                                            strokeLinejoin='round' 
                                            strokeWidth="2" 
                                            d='M4 6h16M4 12h16M4 18h16'// for menu shape
                                        />

                                    </svg>
                                ):(
                                    <svg 
                                        className='block h-6 w-6' 
                                        xmlns='http:www.w3.org/2000/svg' 
                                        fill='none' 
                                        viewBox='0 0 24 24' 
                                        stroke='currentColor' 
                                        aria-hidden="true"
                                    >
                                        <path 
                                            strokeLinecap='round' 
                                            strokeLinejoin='round' 
                                            strokeWidth="2" 
                                            d='M6 18L18 6M6 6l12 12'//for cross shape
                                        />
                                    </svg>
                                )}
                    </button>
                </div>
            </div>
            <Transition 
                show={isOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave='transition ease-in duration-75 transform'
                leaveFrom="opacity-100 scale-100"
                leaveTo='opacity-0 scale-95'>

                    {(ref) =>(
                        <div className='md:hidden id=mobile-menu'>
                            <div ref={ref} className='bg-white mt-2 px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-md'>
                            <Link 
                                href='/about'
                                activeClass='about'
                                to="about"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-[#5F59F7] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                >
                                    About Us
                                </Link>

                                <Link 
                                href='/contact'
                                activeClass='contact'
                                to="contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer hover:bg-[#5F59F7] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                >
                                    Contact us
                                </Link>

                            </div>

                        </div>
                    )}

            </Transition>
        </div>

    </nav>
  )
}

export default Navbar2