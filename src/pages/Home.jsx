import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiStar, FiArrowRight } from 'react-icons/fi';

const Home = () => {
    const services = [
        { title: "Wedding Cards", desc: "Elegant, customized wedding cards with beautiful designs and premium quality." },
        { title: "Visiting Cards", desc: "Premium-quality visiting cards with elegant designs and sharp printing." },
        { title: "T-Shirt Printing", desc: "Custom T-shirt printing with vibrant designs and high-quality prints." },
        { title: "Vinyl Printing", desc: "Durable and weather-resistant vinyl prints for banners, hoardings, and signages." },
        { title: "Pamphlets & Flyers", desc: "High-resolution mass printing for effective local marketing campaigns." },
        { title: "Bill Books", desc: "Custom bill books, letterheads, and stationery for professional branding." },
    ];

    const testimonials = [
        { name: "Darshan Kumar", rating: 5, text: "Satguru Printing Press delivers excellent quality, timely service, and vibrant prints. Highly satisfied with their professionalism and attention to detail!" },
        { name: "Rohan Singh", rating: 4, text: "Amazing service! Satguru Printing Press delivers high-quality prints, timely delivery, and great customer support. Highly recommended for all printing needs!" },
        { name: "Aditya Sharma", rating: 5, text: "Satguru Printing Press exceeded my expectations! High-quality prints, timely delivery, and excellent service. Highly recommended!" },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center text-center">
                {/* Background Image with Dark Red/Brown Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/image/hero.png)" }}
                >
                    <div className="absolute inset-0 bg-[#3a1c1d]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20 pb-12 flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                        Satguru Printing Press
                    </h1>
                    <h2 className="text-3xl md:text-4xl text-white font-serif mb-8" style={{ fontFamily: "Georgia, serif" }}>
                        Wedding Card Printing
                    </h2>

                    <p className="text-[#e2e2e2] max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-10 font-sans tracking-wide">
                        Satguru Printing Press offers high-quality printing services, invitation cards, mundan cards, visiting cards, flex board, sun pack sheet printing, vinyl printing, t-shirt Printing, pamphlet printing, bill book printing, and letterhead printing.
                    </p>

                    <Link to="/contact" className="bg-[#eb8c64] hover:bg-[#d67b53] text-[#2d2f28] px-8 py-3.5 font-bold tracking-widest text-sm transition duration-300 shadow-lg uppercase">
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* About Snippet Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-sm font-medium text-gray-500 tracking-wider mb-2">Welcome to</h2>
                        <h3 className="text-4xl md:text-[3.5rem] text-[#eb8c64] font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
                            Satguru Printing Press
                        </h3>
                        <p className="text-[#4a4a4a] leading-[1.8] text-[15px] font-sans">
                            At <strong>Satguru Printing Press</strong>, we bring your ideas to life with high-quality printing solutions tailored to meet your unique needs. With years of experience in the industry, we have established ourselves as a trusted name in the world of printing, offering a wide range of services that cater to both personal and business requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
                        {/* Feature 1 */}
                        <div className="text-center flex flex-col items-center">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-8 relative" style={{ clipPath: "polygon(50% 0%, 61% 5%, 72% 3%, 81% 10%, 91% 13%, 95% 23%, 100% 32%, 98% 43%, 100% 53%, 94% 63%, 96% 74%, 87% 81%, 83% 91%, 72% 93%, 63% 100%, 52% 98%, 41% 100%, 31% 93%, 20% 90%, 12% 81%, 4% 73%, 0% 61%, 3% 51%, 0% 41%, 5% 30%, 8% 20%, 18% 12%, 27% 5%, 39% 3%)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-[#eb8c64] font-serif text-2xl leading-tight mb-4 min-h-[60px]" style={{ fontFamily: "Georgia, serif" }}>
                                Affordable Pricing & Timely Delivery
                            </h4>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                Quality printing doesn't have to be expensive! We offer <strong>budget-friendly solutions</strong> without compromising on excellence. Plus, we ensure <strong>on-time delivery</strong>, so you never have to worry about missing a deadline.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center flex flex-col items-center">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-8 relative" style={{ clipPath: "polygon(50% 0%, 61% 5%, 72% 3%, 81% 10%, 91% 13%, 95% 23%, 100% 32%, 98% 43%, 100% 53%, 94% 63%, 96% 74%, 87% 81%, 83% 91%, 72% 93%, 63% 100%, 52% 98%, 41% 100%, 31% 93%, 20% 90%, 12% 81%, 4% 73%, 0% 61%, 3% 51%, 0% 41%, 5% 30%, 8% 20%, 18% 12%, 27% 5%, 39% 3%)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-[#eb8c64] font-serif text-2xl leading-tight mb-4 min-h-[60px]" style={{ fontFamily: "Georgia, serif" }}>
                                High-Quality & Customization
                            </h4>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                We use advanced printing technology to deliver <strong>sharp, vibrant, and long-lasting prints</strong>. Whether you need <strong>wedding cards, business cards, or promotional materials</strong>, we provide fully <strong>customized designs</strong> that match your vision and leave a lasting impression.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center flex flex-col items-center">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-8 relative" style={{ clipPath: "polygon(50% 0%, 61% 5%, 72% 3%, 81% 10%, 91% 13%, 95% 23%, 100% 32%, 98% 43%, 100% 53%, 94% 63%, 96% 74%, 87% 81%, 83% 91%, 72% 93%, 63% 100%, 52% 98%, 41% 100%, 31% 93%, 20% 90%, 12% 81%, 4% 73%, 0% 61%, 3% 51%, 0% 41%, 5% 30%, 8% 20%, 18% 12%, 27% 5%, 39% 3%)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-[#eb8c64] font-serif text-2xl leading-tight mb-4 min-h-[60px]" style={{ fontFamily: "Georgia, serif" }}>
                                Customer Satisfaction
                            </h4>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                With years of experience, we have built a <strong>strong reputation for reliability and excellence</strong>. Our priority is <strong>customer satisfaction, and we go the extra mile to meet and exceed expectations</strong>, making us the preferred printing partner for many.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Advanced About Section */}
            <section className="relative py-24 overflow-hidden bg-[#f5f8fa]">
                {/* Parallax Background Circles */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at center, rgba(170, 195, 220, 0.6) 0%, rgba(170, 195, 220, 0.6) 10vw, transparent 10.2vw),
                            radial-gradient(circle at center, rgba(170, 195, 220, 0.35) 0%, rgba(170, 195, 220, 0.35) 20vw, transparent 20.2vw),
                            radial-gradient(circle at center, rgba(170, 195, 220, 0.15) 0%, rgba(170, 195, 220, 0.15) 35vw, transparent 35.2vw)
                        `,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                <div className="container mx-auto px-4 lg:px-12 relative z-10 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                        {/* Left Side: Image */}
                        <div className="w-full md:w-[45%]">
                            <div className="relative shadow-2xl overflow-hidden bg-white p-2 shrink-0">
                                <img
                                    src="/image/heroabout.avif"
                                    alt="Premium Wedding Invitation"
                                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                                />
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="w-full md:w-[55%] pt-4 md:pt-0">
                            <p className="text-[#656e76] font-medium tracking-wide mb-3">About</p>
                            <h2 className="text-4xl md:text-5xl text-[#E67E52] mb-6 font-serif tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                                Satguru Printing Press
                            </h2>
                            <p className="text-[#4a4a4a] text-[15px] leading-[1.8] mb-10 font-sans max-w-2xl">
                                Satguru Printing Press offers top-quality printing services, specializing in wedding cards, visiting cards, invitation cards, mundan cards, and more. We also provide sunpack sheet printing, vinyl printing, T-shirt printing, pamphlets, bill books, letterheads, and screen printing. Our commitment to excellence ensures vibrant prints and premium-quality products tailored to your needs.
                            </p>
                            <Link to="/about" className="inline-block bg-[#E67E52] hover:bg-[#d66b40] text-white px-8 py-3.5 tracking-[0.1em] font-medium text-sm transition duration-300 rounded shadow-md">
                                ABOUT US
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
                            <span className="text-[#E67E52]">Our</span> <span className="text-[#89c5c5]">Services</span>
                        </h2>
                        <p className="mt-4 text-[#4a4a4a] text-[15px] font-sans leading-relaxed max-w-2xl mx-auto">
                            Satguru Printing Press specializes in wedding cards, visiting cards, invitation cards, mundan cards, vinyl printing, T-shirt printing, pamphlets, bill books, and more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Service 1 */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                                <img
                                    src="/image/service1.avif"
                                    alt="Wedding Cards"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h4 className="text-[22px] font-serif text-[#89c5c5] mb-3" style={{ fontFamily: "Georgia, serif" }}>Wedding Cards</h4>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                Elegant, customized wedding cards with beautiful designs and premium quality.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                                <img
                                    src="/image/service2.avif"
                                    alt="Visiting Cards"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h4 className="text-[22px] font-serif text-[#89c5c5] mb-3" style={{ fontFamily: "Georgia, serif" }}>Visiting Cards</h4>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                Premium-quality visiting cards with elegant designs and sharp printing.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                                <img
                                    src="/image/service3.avif"
                                    alt="T-Shirt Printing"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h4 className="text-[22px] font-serif text-[#89c5c5] mb-3" style={{ fontFamily: "Georgia, serif" }}>T-Shirt Printing</h4>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                Custom T-shirt printing with vibrant designs and high-quality prints.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-16 flex justify-center">
                        <Link to="/services" className="inline-block bg-[#E67E52] hover:bg-[#d66b40] text-[#2d2f28] px-10 py-3.5 tracking-[0.1em] font-semibold text-[13px] transition duration-300">
                            EXPLORE MORE
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
                            <span className="text-[#E67E52]">Our</span> <span className="text-[#89c5c5]">Gallery</span>
                        </h2>
                        <p className="text-[#4a4a4a] text-[15px] font-sans">
                            Provide a short description of the gallery, highlighting key things.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mb-16">
                        <div className="w-full md:w-1/2 overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] md:aspect-auto">
                            <img
                                src="/image/gallery1.avif"
                                alt="Satguru Printing Press Shop Front"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                            />
                        </div>
                        <div className="w-full md:w-1/2 overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] md:aspect-auto">
                            <img
                                src="/image/gallery2.avif"
                                alt="Inside Satguru Printing Press"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="/gallery" className="inline-block bg-[#E67E52] hover:bg-[#d66b40] text-[#2d2f28] px-12 py-3.5 tracking-[0.1em] font-semibold text-[13px] transition duration-300">
                            VIEW MORE
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-24 overflow-hidden bg-[#f5f8fa]">
                {/* Parallax Background Circles */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at center, rgba(170, 195, 220, 0.6) 0%, rgba(170, 195, 220, 0.6) 10vw, transparent 10.2vw),
                            radial-gradient(circle at center, rgba(170, 195, 220, 0.35) 0%, rgba(170, 195, 220, 0.35) 20vw, transparent 20.2vw),
                            radial-gradient(circle at center, rgba(170, 195, 220, 0.15) 0%, rgba(170, 195, 220, 0.15) 35vw, transparent 35.2vw)
                        `,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-[#656e76] font-medium tracking-[0.2em] text-[11px] uppercase mb-4">TESTIMONIALS</p>
                        <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
                            <span className="text-[#E67E52]">Happy</span> <span className="text-[#89c5c5]">Clients</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-16 px-4">
                        {/* Client 1 */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="text-[20px] font-serif text-[#4a4a4a] mb-2" style={{ fontFamily: "Georgia, serif" }}>Aditya Sharma</h4>
                            <div className="flex text-[#FBBF24] mb-4 gap-1">
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                            </div>
                            <p className="text-[#4a4a4a] text-[13.5px] leading-relaxed max-w-sm">
                                Satguru Printing Press exceeded my expectations! High-quality prints, timely delivery, and excellent service. Highly recommended for all printing needs!
                            </p>
                        </div>

                        {/* Client 2 */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="text-[20px] font-serif text-[#4a4a4a] mb-2" style={{ fontFamily: "Georgia, serif" }}>Darshan Kumar</h4>
                            <div className="flex text-[#FBBF24] mb-4 gap-1">
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                            </div>
                            <p className="text-[#4a4a4a] text-[13.5px] leading-relaxed max-w-sm">
                                Satguru Printing Press delivers excellent quality, timely service, and vibrant prints. Highly satisfied with their professionalism and attention to detail!
                            </p>
                        </div>

                        {/* Client 3 */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="text-[20px] font-serif text-[#4a4a4a] mb-2" style={{ fontFamily: "Georgia, serif" }}>Rohan Singh</h4>
                            <div className="flex text-[#FBBF24] mb-4 gap-1">
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                                <FiStar className="fill-current w-4 h-4" />
                            </div>
                            <p className="text-[#4a4a4a] text-[13.5px] leading-relaxed max-w-sm">
                                Amazing service! Satguru Printing Press delivers high-quality prints, timely delivery, and great customer support. Highly recommended for all printing needs!
                            </p>
                        </div>
                    </div>

                    <div className="text-center flex justify-center">
                        <Link to="/contact" className="inline-block bg-[#E67E52] hover:bg-[#d66b40] text-[#2d2f28] px-10 py-3.5 tracking-[0.1em] font-semibold text-[13px] transition duration-300">
                            LEAVE US REVIEW
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="relative py-32 bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/image/bottom1.avif)" }}
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

export default Home;
