import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div
                className="relative py-20 text-center bg-cover bg-center"
                style={{ backgroundImage: "url(/image/about1.jpg)" }}
            >
                <div className="absolute inset-0 bg-[#2d2f28]/90 z-0"></div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-serif text-[#E67E52] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    About Us
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-16">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Images Left Side */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top Image spanning full width */}
                            <div className="col-span-2">
                                <img src="/image/about2.avif" alt="Wedding Card" className="w-full h-auto object-cover shadow-md" />
                            </div>
                            {/* Bottom two images */}
                            <div>
                                <img src="/image/about3.avif" alt="Visiting Card" className="w-full h-[250px] object-cover shadow-md" />
                            </div>
                            <div>
                                <img src="/image/about4.avif" alt="T-Shirt Printing" className="w-full h-[250px] object-cover shadow-md" />
                            </div>
                        </div>
                    </div>

                    {/* Content Right Side */}
                    <div className="lg:w-1/2 w-full flex flex-col pt-2 md:pl-6">
                        <p className="text-[#656e76] font-medium text-[13px] mb-2">About</p>
                        <h2 className="text-4xl md:text-[2.8rem] font-serif text-[#E67E52] mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                            Satguru Printing Press
                        </h2>

                        <p className="text-[#4a4a4a] text-[13px] leading-relaxed mb-10 text-justify">
                            Satguru Printing Press is your one-stop solution for high-quality printing services. We specialize in crafting elegant <strong>wedding cards, visiting cards, invitation cards, and mundan cards</strong>, ensuring every occasion is memorable. Our expertise extends to <strong>sunpack sheet printing, vinyl printing, and T-shirt printing</strong>, delivering vibrant and durable prints. We also offer professional <strong>pamphlets, bill books, letterheads, and screen printing</strong> services, catering to businesses and individuals alike. With a commitment to excellence and customer satisfaction, we use top-grade materials and modern printing techniques to bring your ideas to life. Trust Satguru Printing Press for all your printing needs with precision and creativity.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-[28px] font-serif mb-3" style={{ fontFamily: "Georgia, serif" }}>
                                <span className="text-[#E67E52]">Our</span> <span className="text-[#89c5c5]">Mission</span>
                            </h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                Our mission is to provide high-quality, creative, and affordable printing solutions with precision, reliability, and customer satisfaction at the core.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[28px] font-serif mb-3" style={{ fontFamily: "Georgia, serif" }}>
                                <span className="text-[#E67E52]">Our</span> <span className="text-[#89c5c5]">Vision</span>
                            </h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                Our vision is to provide high-quality, innovative, and affordable printing solutions, ensuring customer satisfaction and excellence in every print.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Call to Action Final */}
            <section className="relative py-32 bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/image/about5.webp)" }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 z-0"></div>

                <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-7xl">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-[3.5rem] font-serif text-white mb-2 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                            Illuminate Your Brand with
                        </h2>
                        <h2 className="text-4xl md:text-[3.5rem] font-serif text-[#E67E52] mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                            Satguru Printing Press
                        </h2>
                        <p className="text-gray-300 text-[13px] md:text-[14px] mb-10 max-w-lg leading-relaxed font-sans">
                            We offer high-quality printing services, including wedding cards, T-
                            <br className="hidden md:block" />
                            shirts, banners, and more.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#E67E52] hover:bg-[#d66b40] text-[#2d2f28] px-10 py-3.5 tracking-[0.1em] font-semibold text-[13px] transition duration-300">
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
