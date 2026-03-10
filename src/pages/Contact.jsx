import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="pt-20 bg-gray-50 pb-20">
            {/* Header */}
            <div
                className="relative py-20 text-center bg-cover bg-center mb-16"
                style={{ backgroundImage: "url(/image/contacthero.jpg)" }}
            >
                <div className="absolute inset-0 bg-[#2d2f28]/90 z-0"></div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-serif text-[#E67E52] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    Contact Us
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1200px] mb-24">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Left: Contact Info */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="mb-10 pl-4 md:pl-10">
                            <h2 className="text-[40px] md:text-[50px] font-serif leading-tight mb-2" style={{ fontFamily: "Georgia, serif" }}>
                                <span className="text-[#E67E52]">Get in Touch</span> <span className="text-[#E67E52]">with</span><br />
                                <span className="text-[#89c5c5]">Satguru Printing Press</span>
                            </h2>
                        </div>

                        <div className="pl-4 md:pl-10 space-y-8">
                            <div>
                                <h3 className="text-xl font-serif text-[#4a4a4a] mb-3" style={{ fontFamily: "Georgia, serif" }}>Contacts</h3>
                                <p className="text-[#656e76] text-[15px]">09220444653</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-serif text-[#4a4a4a] mb-3" style={{ fontFamily: "Georgia, serif" }}>Timings</h3>
                                <p className="text-[#656e76] text-[15px]">24-Hrs Open (Mon-Sun)</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-serif text-[#4a4a4a] mb-3" style={{ fontFamily: "Georgia, serif" }}>Address</h3>
                                <p className="text-[#656e76] text-[15px] leading-relaxed max-w-sm">
                                    180G, Nyay Khand 2, Kala Pathar Rd, near AMRAPALI VILLAGE, Gate, Indirapuram, Ghaziabad, Uttar Pradesh 201014
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/image/gallery1.avif" alt="Satguru Printing Press Shop" className="w-[85%] max-w-[500px] h-auto object-cover shadow-sm" />
                    </div>

                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[450px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.839375225145!2d77.3591264!3d28.634575800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5c70cee8159%3A0x65e26be213d35602!2sSatguru%20Printing%20Press!5e0!3m2!1sen!2sin!4v1773131181858!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Satguru Printing Press Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
