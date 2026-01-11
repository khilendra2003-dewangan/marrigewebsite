import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full bg-[#1a0505] text-[#F2D698] overflow-hidden">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a0505] via-[#D21F3C] to-[#1a0505]"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col items-center text-center">

                {/* Decorative Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <svg className="w-12 h-12 md:w-16 md:h-16 fill-[#D21F3C] opacity-80" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>

                {/* Thank You Message */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-script text-5xl md:text-7xl lg:text-8xl mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] py-4 leading-relaxed"
                >
                    Thank You
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-lg md:text-xl tracking-wider opacity-80 max-w-2xl leading-relaxed mb-10"
                >
                    For being a part of our journey and making our special day even more beautiful with your presence.
                </motion.p>

                {/* Names */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-4 text-2xl md:text-3xl font-serif text-[#D21F3C] mb-12"
                >
                    <span>Sandhya</span>
                    <span className="text-[#F2D698] text-xl">&</span>
                    <span>Bhupesh</span>
                </motion.div>

                {/* Divider */}
                <div className="w-24 h-[1px] bg-[#F2D698] opacity-30 mb-8"></div>

                {/* Developer Credit - Premium Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col items-center gap-2 mb-10 text-center"
                >
                    <p className="font-serif text-[#F2D698] text-sm md:text-base tracking-widest uppercase mb-2 opacity-80">
                        Want a luxurious premium website like this?
                    </p>
                    <div className="flex flex-col items-center gap-1">
                        <p className="font-script text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C]">
                            Contact Khilendra Dewangan
                        </p>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-[#C6A87C] text-xs md:text-sm font-sans tracking-wider mt-2 opacity-90">
                            <span>📞 +91 96913 82427</span>
                            <span className="hidden md:inline">•</span>
                            <span>📞 +91 74890 72491</span>
                        </div>
                        <a href="mailto:khilendra24dewangan@gmail.com" className="text-[#E6D593]/70 text-xs tracking-widest hover:text-[#FFF5D1] transition-colors mt-1">
                            khilendra24dewangan@gmail.com
                        </a>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xs md:text-sm font-serif tracking-widest opacity-60 flex flex-col gap-2"
                >
                    <p>&copy; {currentYear} Sandhya & Bhupesh. All Rights Reserved.</p>
                    <p className="opacity-50 text-[10px]">Designed with Love</p>
                </motion.div>

            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] mix-blend-overlay pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
