import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2d2f28] text-gray-300 py-16 font-sans">
            <div className="container mx-auto px-4 md:px-12 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">

                    {/* Column 1: Logo & CTA */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <img src="/image/logo.avif" alt="Satguru Printing Press" className="w-[200px] h-auto object-contain" />
                        <a href="tel:09220444653" className="w-full max-w-[250px] text-center bg-[#E67E52] hover:bg-[#d66b40] text-gray-900 px-6 py-3.5 tracking-[0.1em] font-medium text-[13px] transition duration-300">
                            CALL US : 09220444653
                        </a>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-start md:pl-10">
                        <h4 className="text-[22px] font-serif text-[#E67E52] mb-6 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                            Quick Link
                        </h4>
                        <ul className="space-y-4 text-[14px] text-gray-200">
                            <li><Link to="/" className="hover:text-[#89c5c5] transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[#89c5c5] transition">About</Link></li>
                            <li><Link to="/services" className="hover:text-[#89c5c5] transition">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-[#89c5c5] transition">Contact</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-[#89c5c5] transition">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-[#89c5c5] transition">Terms and Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-start space-y-6 text-[14px] text-gray-200">
                        <div>
                            <h4 className="text-[22px] font-serif text-[#E67E52] mb-3 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                                Contact Us :
                            </h4>
                            <p>09220444653</p>
                        </div>
                        <div>
                            <h4 className="text-[22px] font-serif text-[#E67E52] mb-3 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                                Timing :
                            </h4>
                            <p>24-Hrs Open (Mon-Sun)</p>
                        </div>
                        <div>
                            <h4 className="text-[22px] font-serif text-[#E67E52] mb-3 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                                Address :
                            </h4>
                            <p className="leading-relaxed">
                                180G ,Nyay Khand 2, Kala Pathar Rd,<br />
                                near AMRAPALI VILLAGE, Gate,<br />
                                Indirapuram, Ghaziabad, Uttar Pradesh<br />
                                201014
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700/50 pt-8 flex justify-center text-[13.5px] text-gray-300 text-center">
                    <p>
                        © {currentYear} | This Website is owned and managed by | <span className="text-[#E67E52]">SATGURU</span> <span className="text-[#89c5c5] font-bold">PRINTING PRESS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
