import React from 'react';
import { motion } from 'framer-motion';
// Importing the local background image
import bgImage from './assets/dewangan_family_bg.png';

const FamilyWelcomeSection = () => {
    return (
        <section className="relative w-full py-32 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Fallback/Overlay */}
                <div className="absolute inset-0 bg-[#FDFBF7]"></div>

                {/* Background Image - Using the local 8k asset */}
                <img
                    src={bgImage}
                    alt="Luxury Floral Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                />

                {/* Subtle Light Overlay for Text Readability */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[0px]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    {/* "Wedding of the" */}
                    <h3 className="font-script text-4xl md:text-5xl text-[#2F5C56] opacity-90 mb-[-10px]">
                        Wedding of the
                    </h3>

                    {/* "Dewangan Family" - The Hero Text */}
                    <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-[#2F5C56] drop-shadow-sm mb-8 py-4">
                        Dewangan Family
                    </h1>

                    {/* "You all are cordially welcome" */}
                    <p className="font-serif text-xl md:text-3xl text-[#8B4513] tracking-wide mb-8">
                        You all are cordially welcome
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-8 opacity-60">
                        <div className="w-16 h-[1px] bg-[#8B4513]"></div>
                        <div className="text-[#8B4513] text-xl">✦</div>
                        <div className="w-16 h-[1px] bg-[#8B4513]"></div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col md:flex-row items-center gap-3 text-[#5A3E2B] font-serif text-lg md:text-xl">
                        {/* Map Pin Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 md:h-8 md:w-8 fill-[#8B4513]"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>Dhamtari, Chhattisgarh, India</span>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default FamilyWelcomeSection;
