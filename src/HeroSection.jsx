import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import heroImg from './assets/wedding_hero.png';

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Parallax Setup
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    // 3D Tilt Setup
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);
    const brightness = useTransform(mouseY, [-0.5, 0.5], ["1.1", "0.9"]);

    useEffect(() => {
        const targetDate = new Date("2026-02-10T00:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div
            ref={ref}
            className="relative w-full h-screen overflow-hidden font-sans flex items-center justify-start perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Parallax Background Image */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: backgroundY }}
            >
                <img
                    src={heroImg}
                    alt="Wedding Background"
                    className="w-full h-full object-cover object-right md:object-center md:scale-110 brightness-110"
                />
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#E6D593] rounded-full opacity-40"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Light Vignette for Focus - Significantly reduced darkness */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/10 via-transparent to-transparent z-0"></div>


            {/* Main Content Container - Compact Bottom Phone Layout */}
            <div className="relative w-full px-4 lg:px-20 h-full flex items-end md:items-center pb-10 md:pb-0 z-10 perspective-1000">

                {/* 
                    Target: "Ultra-Premium Dark Panel" with 3D Tilt
                    REMOVED: backdrop-blur, dark background
                */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        filter: `brightness(${brightness})`,
                        transformStyle: "preserve-3d"
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full max-w-[340px] md:max-w-[480px] h-auto relative p-2 flex flex-col justify-center group z-20"
                >

                    {/* Glossy Sheen Overlay - Removed for text-only clean look */}

                    {/* Content Wrapper with Glass Effect for Visibility */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 px-4 py-2 md:px-6 md:py-8 flex flex-col items-center text-center space-y-0.5 md:space-y-3 h-full justify-center transform-style-3d bg-black/20 backdrop-blur-sm rounded-[30px] md:rounded-[40px] border border-white/10 shadow-xl"
                        style={{ transform: "translateZ(20px)" }}
                    >

                        {/* Title Section */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center pt-0 pb-0 md:pt-2 md:pb-2">
                            <h2 className="font-script text-3xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] filter contrast-125 pb-0 md:pb-3 leading-normal py-0 md:py-2">
                                Sandhya
                            </h2>
                            <h2 className="font-serif italic text-xl md:text-3xl text-[#F2D698] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] py-0 md:py-1">
                                &
                            </h2>
                            <h2 className="font-script text-3xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] filter contrast-125 pb-0 md:pb-3 leading-normal py-0 md:py-2">
                                Bhupesh
                            </h2>
                        </motion.div>

                        {/* Date & Location */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center gap-0.5 md:gap-2 text-[#FFF5D1] font-serif tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pb-1 md:pb-4 border-b border-white/20 w-3/4 mb-1 md:mb-2 font-medium">
                            <span>February 10, 2026</span>
                            <span className="text-[10px] md:text-xs opacity-100 font-bold text-[#F2D698]">Dhamtari, Chhattisgarh</span>
                        </motion.div>


                        {/* 
                            Countdown - Simplified Premium Style (Numbers Only)
                        */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-sm flex justify-center items-center gap-3 md:gap-8"
                        >
                            <div className="flex flex-col items-center">
                                <span className="font-serif text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-lg leading-none">
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[5px] md:text-[8px] text-[#C6A87C] tracking-[0.2em] font-medium uppercase mt-1">Days</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="font-serif text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-lg leading-none">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[5px] md:text-[8px] text-[#C6A87C] tracking-[0.2em] font-medium uppercase mt-1">Hrs</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="font-serif text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-lg leading-none">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[5px] md:text-[8px] text-[#C6A87C] tracking-[0.2em] font-medium uppercase mt-1">Mins</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="font-serif text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-lg leading-none">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[5px] md:text-[8px] text-[#C6A87C] tracking-[0.2em] font-medium uppercase mt-1">Secs</span>
                            </div>
                        </motion.div>

                    </motion.div>

                </motion.div>
            </div>
        </div >
    );
};

export default HeroSection;
