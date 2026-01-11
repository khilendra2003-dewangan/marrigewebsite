import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// Import the new luxurious background
import bgImage from './assets/couple_showcase_bg.png';

const CoupleShowcase = () => {
    // 3D Parallax Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the mouse movement
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        // Calculate normalized mouse position (-0.5 to 0.5)
        const xPos = (clientX - left) / width - 0.5;
        const yPos = (clientY - top) / height - 0.5;

        x.set(xPos);
        y.set(yPos);
    }

    // Transform values for different layers (depth effect)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); // Tilt X
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]); // Tilt Y

    // Elements moving at different speeds - REDUCED MOVEMENT for stability
    const nameX = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
    const nameY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

    const heartX = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);
    const heartY = useTransform(mouseY, [-0.5, 0.5], [-3, 3]);

    const bgX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
    const bgY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

    return (
        <section
            id="couple"
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-20 perspective-1000 bg-[#FAF9F6]"
        >
            {/* 1. Premium Light Background with Silk Texture */}
            <div className="absolute inset-0 z-0">
                {/* Main 8k Background Image */}
                <img
                    src={bgImage}
                    alt="Luxury Pearl Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                />

                {/* 2. Soft Light Overlay for Text Readability */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[0px]"></div>

                {/* Optional: Subtle Moving Sparkle Overlay */}
                <motion.div
                    style={{ x: bgX, y: bgY }}
                    className="absolute inset-0 z-10 pointer-events-none"
                >
                    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#FFD700] rounded-full mix-blend-multiply opacity-5 filter blur-[80px]"></div>
                </motion.div>
            </div>

            {/* 2. Floating Crystal Card Container */}
            <motion.div
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative z-10 container mx-auto px-4 flex justify-center items-center"
            >
                {/* The Glass Card - Adjusted for Light Background */}
                <div className="relative w-full max-w-7xl py-8 px-4 md:py-20 md:px-12 rounded-[40px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden">

                    {/* Glass Shine Effect - Subtle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                    {/* Content Layers with Parallax */}
                    <div className="relative z-20 flex flex-col items-center text-center" style={{ transform: "translateZ(50px)" }}>

                        {/* Welcome Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mb-8 md:mb-12"
                        >
                            <h3 className="font-serif text-[#8B4513] text-sm md:text-lg tracking-[0.4em] uppercase font-light drop-shadow-sm">
                                The Union Of
                            </h3>
                            <div className="mx-auto mt-4 w-16 h-[1px] bg-[#8B4513]/30"></div>
                        </motion.div>

                        {/* Names & Heart Row */}
                        <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-4 md:gap-12">

                            {/* Sandhya */}
                            <motion.div style={{ x: nameX, y: nameY }} className="relative">
                                <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-[#D21F3C] drop-shadow-sm filter brightness-105 leading-tight py-2">
                                    Sandhya
                                </h1>
                            </motion.div>

                            {/* Center 3D Heart */}
                            <motion.div
                                style={{ x: heartX, y: heartY }}
                                className="relative mx-6 perspective-500"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    }}
                                    className="relative z-10"
                                >
                                    {/* Glass Heart SVG */}
                                    <svg className="w-24 h-24 md:w-32 md:h-32 drop-shadow-xl" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="glassHeart" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ff4d6d" />
                                                <stop offset="100%" stopColor="#c9184a" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                            fill="url(#glassHeart)"
                                            stroke="rgba(255,255,255,0.6)"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                </motion.div>

                                {/* Reflected Shadow for 3D feel */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#D21F3C]/20 blur-sm rounded-full"></div>
                            </motion.div>

                            {/* Bhupesh */}
                            <motion.div style={{ x: nameX, y: nameY }} className="relative">
                                <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-[#D21F3C] drop-shadow-sm filter brightness-105 leading-tight py-2">
                                    Bhupesh
                                </h1>
                            </motion.div>

                        </div>

                        {/* Quote Footer with Glass Effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-16 md:mt-24 inline-block relative py-3 px-8 rounded-full border border-[#8B4513]/10 bg-white/40"
                        >
                            <p className="font-serif italic text-xl md:text-2xl text-[#8B4513] font-light tracking-wide opacity-90">
                                "Two hearts intertwined in a destiny of love"
                            </p>
                        </motion.div>

                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default CoupleShowcase;
