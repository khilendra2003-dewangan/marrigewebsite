import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import loveImg from './assets/img2.png';

const Petal = ({ delay }) => {
    const randomX = Math.random() * 100;
    const randomDuration = 10 + Math.random() * 10;

    return (
        <motion.div
            className="absolute top-[-10%] text-2xl md:text-4xl opacity-60 pointer-events-none z-20"
            style={{ left: `${randomX}%` }}
            animate={{
                y: ["0vh", "120vh"],
                rotate: [0, 360],
                x: [0, Math.random() * 50 - 25]
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
        >
            🌹
        </motion.div>
    );
};

const LoveSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={ref} className="relative w-full h-[100dvh] max-h-[1080px] bg-[#1a0f0f] overflow-hidden flex flex-col items-center justify-between py-6 md:py-10">

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080503] via-[#2a1a1a] to-[#080503] opacity-80"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            {/* Floating Petals */}
            {[...Array(15)].map((_, i) => (
                <Petal key={i} delay={i * 1.5} />
            ))}

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full justify-between">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center mt-4 md:mt-8"
                >
                    <h2 className="font-script text-4xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a9e] via-[#fecfef] to-[#ff9a9e] drop-shadow-[0_0_15px_rgba(255,154,158,0.5)] leading-relaxed py-4">
                        Captured Moments
                    </h2>
                    <p className="font-serif text-[#C6A87C] text-[10px] md:text-sm tracking-[0.3em] uppercase mt-2">
                        Of Pure Love
                    </p>
                </motion.div>

                {/* Main Content Row */}
                <div className="flex items-center justify-center w-full gap-8 md:gap-16 flex-1">

                    {/* Left Signature */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
                        className="hidden md:flex flex-col items-center gap-4 justify-center"
                    >
                        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#C6A87C] to-transparent opacity-50"></div>
                        <span className="writing-vertical-rl rotate-180 font-script text-[#C6A87C] text-2xl md:text-3xl tracking-widest opacity-80" style={{ writingMode: 'vertical-rl' }}>
                            Bhupesh
                        </span>
                        <div className="text-xl">🤵</div>
                    </motion.div>

                    {/* Main Image Frame - Wrapped for Entrance */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="relative group perspective-1000"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A87C] via-[#ff9a9e] to-[#C6A87C] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <motion.div
                            style={{ y }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
                        >
                            <div className="relative overflow-hidden rounded-xl h-[40vh] md:h-[50vh] aspect-[3/4] object-cover">
                                <img
                                    src={loveImg}
                                    alt="Romantic Moment"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Signature */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
                        className="hidden md:flex flex-col items-center gap-4 justify-center"
                    >
                        <div className="text-xl">👰</div>
                        <span className="writing-vertical-rl font-script text-[#C6A87C] text-2xl md:text-3xl tracking-widest opacity-80" style={{ writingMode: 'vertical-rl' }}>
                            Sandhya
                        </span>
                        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#C6A87C] to-transparent opacity-50"></div>
                    </motion.div>
                </div>

                {/* Bottom Quote & Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mb-8 md:mb-12 text-center"
                >
                    <p className="font-serif italic text-white/90 text-lg md:text-xl drop-shadow-md mb-3">
                        "Forever & Always"
                    </p>
                    <div className="w-16 h-[1px] bg-[#C6A87C] mx-auto opacity-50"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default LoveSection;
