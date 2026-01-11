import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// Import ALL Images
import bImg1 from './assets/girl/m1.png';
import bImg2 from './assets/girl/m2.png';
import bImg3 from './assets/girl/m3.png';
import bImg4 from './assets/girl/m4.png';
import bImg5 from './assets/girl/m5.png';

import gImg1 from './assets/boys/b1.png';
import gImg2 from './assets/boys/b2.png';
import gImg3 from './assets/boys/b3.png';
import gImg4 from './assets/boys/b41.png';

const brideImages = [bImg1, bImg2, bImg3, bImg4, bImg5];
const groomImages = [gImg1, gImg2, gImg3, gImg4];

const GallerySection = () => {
    const [currentBrideIndex, setCurrentBrideIndex] = useState(0);
    const [currentGroomIndex, setCurrentGroomIndex] = useState(0);

    // Auto-rotate slideshows
    useEffect(() => {
        const brideInterval = setInterval(() => {
            setCurrentBrideIndex((prev) => (prev + 1) % brideImages.length);
        }, 4000); // Change every 4s

        const groomInterval = setInterval(() => {
            setCurrentGroomIndex((prev) => (prev + 1) % groomImages.length);
        }, 4500); // Change every 4.5s (offset for dynamic feel)

        return () => {
            clearInterval(brideInterval);
            clearInterval(groomInterval);
        };
    }, []);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Parallax logic
    const yLeft = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const yRight = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

    // 3D Card Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen overflow-hidden bg-[#050302] py-20 lg:py-0 flex flex-col lg:flex-row"
            onMouseMove={handleMouseMove}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none z-0"></div>

            {/* LEFT SIDE - BRIDE SLIDESHOW */}
            <div className="w-full lg:w-1/2 h-[60vh] md:h-[85vh] lg:h-screen relative overflow-hidden group border-r border-[#C6A87C]/20">
                <motion.div style={{ y: yLeft }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`bride-${currentBrideIndex}`}
                            src={brideImages[currentBrideIndex]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                </motion.div>

                {/* Animated Golden Border (Inset) */}
                <div className="absolute inset-4 md:inset-8 border border-[#C6A87C]/30 opacity-60 z-10 pointer-events-none">
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 border border-[#FFF5D1]/20"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-20 left-16 lg:left-32 z-10"
                >
                    <h2 className="font-script text-6xl md:text-8xl text-[#FFF5D1] drop-shadow-2xl">Sandhya</h2>
                    <p className="font-serif text-[#C6A87C] tracking-[0.3em] text-sm uppercase mt-2 ml-2">The Bride</p>
                </motion.div>
            </div>

            {/* CENTER CARD - 3D Glass */}
            <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-[90%] max-w-md pointer-events-none lg:pointer-events-auto perspective-1000 my-8 lg:my-0 mx-auto">
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative p-[1px] rounded-[30px] bg-gradient-to-br from-[#C6A87C] via-white/50 to-[#C6A87C] shadow-[0_0_50px_-10px_rgba(198,168,124,0.3)]"
                >
                    <div className="bg-black/60 backdrop-blur-2xl rounded-[29px] p-8 md:p-12 text-center border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                        <h3 className="text-[#C6A87C] text-xs font-bold tracking-[0.5em] uppercase mb-6">Gallery</h3>
                        <h1 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] leading-tight mb-4 drop-shadow-sm">
                            Eternal<br />Moments
                        </h1>
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent mx-auto mb-4"></div>
                        <p className="text-[#E6D593]/70 font-sans text-sm font-light tracking-widest uppercase">
                            Capturing Love
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT SIDE - GROOM SLIDESHOW */}
            <div className="w-full lg:w-1/2 h-[60vh] md:h-[85vh] lg:h-screen relative overflow-hidden group border-l border-[#C6A87C]/20">
                <motion.div style={{ y: yRight }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`groom-${currentGroomIndex}`}
                            src={groomImages[currentGroomIndex]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                </motion.div>

                {/* Animated Golden Border (Inset) */}
                <div className="absolute inset-4 md:inset-8 border border-[#C6A87C]/30 opacity-60 z-10 pointer-events-none">
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        className="absolute inset-0 border border-[#FFF5D1]/20"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-20 right-16 lg:right-32 z-10 text-right"
                >
                    <h2 className="font-script text-6xl md:text-8xl text-[#FFF5D1] drop-shadow-2xl">Bhupesh</h2>
                    <p className="font-serif text-[#C6A87C] tracking-[0.3em] text-sm uppercase mt-2 mr-2">The Groom</p>
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;
