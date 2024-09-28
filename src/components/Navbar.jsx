import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons
import { NAVIGATION_LINKS } from '../constants/index'; // Adjust the path

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50 bg-black/80 backdrop-blur-lg'>
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg  py-3 lg:flex'>
                    <div className='flex items-center justify-between gap-6'>
                        <div>
                            {/* <a href="#"><img src={logo} width={150} alt="logo" /></a> */}
                          <a href="#"><h1 class="flex items-center justify-center h-10 w-14 text-3xl font-bold bg-gray-200 rounded-full  text-blue-900">BN</h1></a>  

                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className='text-sm hover:text-yellow-400' onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href="#"><img src={logo} alt="logo" width={90} className='m-2' /></a>
                        </div>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {
                                    isMobileMenuOpen ? (
                                        <FaTimes className="m-2 h-6 w-5" /> // Correct component name
                                    ) : (
                                        <FaBars className="m-2 h-6 w-5" /> // Correct component name
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    {
                        isMobileMenuOpen && (
                            <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                                {
                                    NAVIGATION_LINKS.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className='block w-full text-lg' onClick={(e) => { handleLinkClick(e, item.href) }}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
