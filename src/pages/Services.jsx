import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
    const allServices = [
        {
            titlePart1: "Wedding", titlePart2: "Cards",
            image: "/image/wedding cards.avif",
            desc: "We create elegant, customized wedding cards with premium designs, vibrant colors, and high-quality prints to make your special day unforgettable."
        },
        {
            titlePart1: "Visiting", titlePart2: "Cards",
            image: "/image/visiting cards.avif",
            desc: "Make a lasting impression with our premium visiting cards—high-quality, stylish, and customized to reflect your brand identity with perfection."
        },
        {
            titlePart1: "Invitation", titlePart2: "Cards",
            image: "/image/invitation cards.avif",
            desc: "Celebrate your special moments with our beautifully designed invitation cards, crafted with elegance, precision, and high-quality printing for every occasion."
        },
        {
            titlePart1: "Mundan", titlePart2: "Cards",
            image: "/image/mundan cards.avif",
            desc: "Celebrate your child's Mundan ceremony with our beautifully designed cards, featuring elegant designs, vibrant colors, and customized details for a memorable invitation."
        },
        {
            titlePart1: "Sunpack", titlePart2: "Sheet Printing",
            image: "/image/sunpack sheet printing.avif",
            desc: "We offer high-quality Sunpack sheet printing with vibrant colors and durable materials, perfect for advertisements, signage, promotions, and business branding."
        },
        {
            titlePart1: "Vinyl", titlePart2: "Printing",
            image: "/image/vinyl printing.avif",
            desc: "We provide high-quality vinyl printing with vibrant colors and durable finishes, ideal for signage, branding, promotions, and customized decorative solutions."
        },
        {
            titlePart1: "T-Shirt", titlePart2: "Printing",
            image: "/image/t shirt printing.avif",
            desc: "We offer high-quality T-shirt printing with vibrant designs, durable prints, and custom solutions for businesses, events, and personal use."
        },
        {
            titlePart1: "Letter", titlePart2: "Head",
            image: "/image/letter head.avif",
            desc: "Satguru Printing Press offers premium letterhead printing with high-quality materials, professional designs, and crisp prints to enhance your brand identity."
        },
        {
            titlePart1: "Bill", titlePart2: "Book",
            image: "/image/bill book.avif",
            desc: "We provide high-quality customized bill books with clear printing, durable paper, and professional design to enhance your business transactions efficiently."
        },
        {
            titlePart1: "Pamphlet", titlePart2: "Printing",
            image: "/image/pamplet printing.avif",
            desc: "Satguru Printing Press offers high-quality wedding cards, visiting cards, vinyl printing, bill books, pamphlets, and more."
        },
        {
            titlePart1: "Screen", titlePart2: "Printing",
            image: "/image/screen printing.avif",
            desc: "Screen printing ensures vibrant, long-lasting prints on various surfaces, offering precision, durability and high-quality results for all your printing needs."
        }
    ];

    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Header */}
            <div
                className="relative py-20 text-center bg-cover bg-center mb-16"
                style={{ backgroundImage: "url(/image/service3.jpg)" }}
            >
                <div className="absolute inset-0 bg-[#2d2f28]/90 z-0"></div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-serif text-[#E67E52] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    Our Services
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1200px] mb-20">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
                    {allServices.map((service, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col group">
                            <div className="w-full mb-4">
                                <img src={service.image} alt={`${service.titlePart1} ${service.titlePart2}`} className="w-full aspect-[4/3] object-cover" />
                            </div>
                            <h3 className="text-[22px] font-serif mb-3 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                                <span className="text-[#E67E52]">{service.titlePart1}</span> <span className="text-[#89c5c5]">{service.titlePart2}</span>
                            </h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed text-justify">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
