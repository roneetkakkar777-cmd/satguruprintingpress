import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed w-full z-50 bg-[#2d2f28] shadow-md border-b border-gray-800">
            <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center h-20">

                {/* Logo Section */}
                <Link to="/" className="flex items-center justify-center">
                    <img src="/image/logo.avif" alt="Satguru Printing Press" className="h-[46px] md:h-[54px] object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium pb-1.5 border-b-2 transition duration-200 text-[15px] ${isActive
                                    ? 'text-[#71b9b9] border-[#71b9b9]'
                                    : 'text-[#df7c54] border-transparent hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA Button Desktop */}
                <div className="hidden md:block">
                    <a href="tel:09220444653" className="bg-[#eb8c64] hover:bg-[#d67b53] text-[#2d2f28] px-6 py-2.5 font-semibold tracking-wider text-[13px] transition duration-300">
                        CALL NOW : 09220444653
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-[#df7c54] text-2xl focus:outline-none" onClick={toggleMenu}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#2d2f28] border-t border-gray-700 py-4 flex flex-col px-6 space-y-4 shadow-xl">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block text-lg py-2 border-b border-gray-700 ${isActive ? 'text-[#71b9b9] font-bold' : 'text-[#df7c54]'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <a href="tel:09220444653" className="flex items-center justify-center gap-2 bg-[#eb8c64] text-[#2d2f28] px-5 py-3 font-bold mt-4">
                        CALL NOW : 09220444653
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
