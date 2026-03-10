import React from 'react';

const Gallery = () => {
    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Header */}
            <div
                className="relative py-20 text-center bg-cover bg-center mb-16"
                style={{ backgroundImage: "url(/image/galleryhero.jpg)" }}
            >
                <div className="absolute inset-0 bg-[#2d2f28]/90 z-0"></div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-serif text-[#E67E52] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    Our Gallery
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-24">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <img src="/image/gallery1.avif" alt="Satguru Printing Workshop 1" className="w-full aspect-[4/5] object-cover block" />
                    <img src="/image/gallery2.avif" alt="Satguru Printing Workshop 2" className="w-full aspect-[4/5] object-cover block" />
                    <img src="/image/gallery3.avif" alt="Satguru Printing Work 3" className="w-full aspect-[4/5] object-cover block" />
                    <img src="/image/gallery4.avif" alt="Satguru Printing Work 4" className="w-full aspect-[4/5] object-cover block" />
                    <img src="/image/gallery5.avif" alt="Satguru Printing Work 5" className="w-full aspect-[4/5] object-cover block" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
