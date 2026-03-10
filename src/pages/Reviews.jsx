import React from 'react';
import { FiStar, FiMessageSquare } from 'react-icons/fi';

const Reviews = () => {
    const reviews = [
        {
            name: "Rajesh Kumar",
            rating: 5,
            text: "Excellent quality and fast service! My wedding cards turned out beautifully. Highly recommended for all printing needs!"
        },
        {
            name: "Priya",
            rating: 5,
            text: "Great customer service and affordable pricing. The visiting cards were exactly as I wanted. Will order again!"
        },
        {
            name: "Amit Singh",
            rating: 4,
            text: "Impressed with the T-shirt printing quality. Vibrant colors and durable prints. Best printing press in town!"
        }
    ];

    return (
        <div className="bg-[#f5f8fa] min-h-screen">
            {/* Header */}
            <div
                className="relative pt-40 pb-20 text-center bg-cover bg-center"
                style={{ backgroundImage: "url(/image/reviewhero.jpg)" }}
            >
                <div className="absolute inset-0 bg-[#2d2f28]/90 z-0"></div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-serif text-[#E67E52] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    Happy Clients
                </h1>
            </div>

            <div className="relative overflow-hidden py-24">
                {/* Parallax Background Circles */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                        radial-gradient(circle at center 40%, rgba(170, 195, 220, 0.4) 0%, rgba(170, 195, 220, 0.4) 15vw, transparent 15.2vw),
                        radial-gradient(circle at center 40%, rgba(170, 195, 220, 0.25) 0%, rgba(170, 195, 220, 0.25) 30vw, transparent 30.2vw),
                        radial-gradient(circle at center 40%, rgba(170, 195, 220, 0.1) 0%, rgba(170, 195, 220, 0.1) 45vw, transparent 45.2vw)
                    `,
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100vw 100vh'
                    }}
                ></div>

                <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
                    <div className="text-center mb-20">
                        <p className="text-[#656e76] font-medium tracking-[0.2em] text-[11px] uppercase mb-4">TESTIMONIALS</p>
                        <h1 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: "Georgia, serif" }}>
                            <span className="text-[#E67E52]">Happy</span> <span className="text-[#89c5c5]">Clients</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-20">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex flex-col items-center text-center px-4">
                                <h4 className="text-[20px] font-serif text-[#4a4a4a] mb-2" style={{ fontFamily: "Georgia, serif" }}>{review.name}</h4>
                                <div className="flex text-[#FBBF24] mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar key={i} className={i < review.rating ? 'fill-current w-4 h-4' : 'text-gray-300 w-4 h-4'} />
                                    ))}
                                </div>
                                <p className="text-[#4a4a4a] text-[13.5px] leading-relaxed max-w-sm">
                                    "{review.text}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center flex justify-center mt-12">
                        <a href="https://g.page/r/CQJW0xPia-JlEAI/review" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E67E52] hover:bg-[#d66b40] text-white px-10 py-3.5 tracking-[0.1em] font-semibold text-[13px] transition duration-300 rounded shadow-sm">
                            LEAVE US REVIEW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
