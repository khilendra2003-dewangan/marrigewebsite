import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Importing Images
import img1 from './assets/images/img1.png';
import img2 from './assets/images/img2.png';
import img3 from './assets/images/img3.png';
import img4 from './assets/images/img4.png';
import img5 from './assets/images/img5.png';
import img6 from './assets/images/img6.png';
import img7 from './assets/images/img7.png';
import img8 from './assets/images/img8.png';

const journeyData = [
    {
        img: img1,
        title: "पहली मुलाक़ात",
        desc: "परिवार की मौजूदगी में, पहली मुलाक़ात ने एक अनकहे रिश्ते को नाम दिया। पहला उपहार, पहली मुस्कान और दिलों की सहमति के साथ इस रिश्ते की औपचारिक शुरुआत हुई।",
        angle: "rotate-2"
    },
    {
        img: img2,
        title: "आशीर्वाद से शुरू हुई कहानी",
        desc: "नानी–दादी के स्नेहिल हाथों और परिवार की रज़ामंदी के साथ, लड़के के घर उस दिन हमारे रिश्ते को पहली बार अपनों की स्वीकृति मिली।",
        angle: "-rotate-1"
    },
    {
        img: img3,
        title: "हँसी और उजास",
        desc: "लड़के के घर, तीसरी नंबर की बुआ के स्नेहिल आशीर्वाद और मुस्कान से भरे शब्दों के साथ, इस रिश्ते को अपनापन और शुभता मिली। उनकी दुआओं ने हमारे सफ़र को और भी सुंदर बना दिया।",
        angle: "rotate-3"
    },
    {
        img: img4,
        title: "पवित्र वचन",
        desc: "मासी और बड़ी मम्मी के स्नेह, आशीर्वाद और आत्मीय उपस्थिति में इस रिश्ते को परिवार की स्वीकृति और अपनापन मिला। उनकी दुआओं ने हमारे बंधन को और भी पवित्र बना दिया।",
        angle: "-rotate-2"
    },
    {
        img: img5,
        title: "भाई का आशीर्वाद",
        desc: "छोटे भाई के स्नेह और शुभकामनाओं से यह मांगलिक अवसर और अधिक मंगलमय हो उठा।",
        angle: "rotate-1"
    },
    {
        img: img6,
        title: "अपनों का आशीर्वाद",
        desc: "बड़ी बुआ और दूसरी बुआ के स्नेहिल आशीर्वाद ने इस रिश्ते को संस्कारों की मजबूती दी।",
        angle: "-rotate-3"
    },
    {
        img: img7,
        title: "परिवार का आशीर्वाद",
        desc: "चौथी बुआ की शुभकामनाओं के साथ इस पवित्र रिश्ते की मधुर शुरुआत हुई।",
        angle: "rotate-2"
    },
    {
        img: img8,
        title: "बुआ का मंगल आशीर्वाद",
        desc: "पाँचवीं बुआ के स्नेहिल आशीर्वाद से इस नए रिश्ते की शुभ और मंगल शुरुआत हुई।",
        angle: "-rotate-1"
    }
];

const JourneyCard = ({ data, index }) => {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 min-h-[70vh] py-12 md:py-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>

            {/* Image Side with "Angles" - Wrapped for Slide Entrance */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className={`w-full max-w-md md:max-w-lg relative ${data.angle}`}
            >
                <motion.div
                    style={{ y, opacity }}
                    className={`relative group perspective-1000 w-full`}
                >
                    {/* Vintage Gold Frame Glow */}
                    <div className={`absolute -inset-6 bg-gradient-to-tr from-[#997B3C] via-[#F2D698] to-[#997B3C] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 rounded-xl`}></div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative p-3 bg-white/10 backdrop-blur-md border border-[#F2D698]/30 shadow-2xl overflow-hidden rounded-sm"
                    >
                        {/* Polaroid-style inner frame */}
                        <div className="relative h-[50vh] bg-[#0d0d0d] p-2 border border-white/5 shadow-inner">
                            <img
                                src={data.img}
                                alt={data.title}
                                className="w-full h-full object-cover filter contrast-[1.1] saturate-[1.1] transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Film Grain Texture */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
                        </div>

                        {/* Corner Ornaments */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#F2D698] opacity-50"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F2D698] opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F2D698] opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#F2D698] opacity-50"></div>
                    </motion.div>

                    {/* Floating Chapter Number */}
                    <div className="absolute -bottom-8 -right-8 text-8xl font-serif text-[#C6A87C]/10 font-black z-0 pointer-events-none">
                        0{index + 1}
                    </div>
                </motion.div>
            </motion.div>

            {/* Content Side with Premium Typography */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                className={`max-w-md text-center ${isEven ? 'md:text-left' : 'md:text-right'} relative z-10`}
            >
                <div className={`flex flex-col gap-6 ${isEven ? 'items-center md:items-start' : 'items-center md:items-end'}`}>

                    {/* Decorative Divider */}
                    <div className="flex items-center gap-3">
                        <div className={`w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent ${isEven ? '' : 'order-last'}`}></div>
                        <span className="font-script text-2xl text-[#C6A87C] opacity-80">Our Journey</span>
                        <div className={`w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent ${isEven ? 'order-last' : ''}`}></div>
                    </div>

                    {/* Main Title - Serif Display */}
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-md leading-relaxed py-2">
                        {data.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[#E6D593]/90 leading-loose text-sm md:text-base font-light tracking-wide">
                        {data.desc}
                    </p>

                    {/* Gold Button / Link */}
                    <div className={`mt-4 px-8 py-3 w-fit border border-[#C6A87C]/30 text-[#C6A87C] text-xs tracking-[0.2em] hover:bg-[#C6A87C]/10 transition-colors uppercase cursor-default`}>
                        Moment {index + 1}
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

const BlessingsSection = () => {
    return (
        <section className="relative w-full bg-[#050302] overflow-hidden py-32">

            {/* Deep Atmosphere Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0f05] to-black opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p5.png')] opacity-30 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Premium Section Header - Centered & Majestic */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-40 relative"
                >
                    {/* Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif text-[#C6A87C]/[0.02] whitespace-nowrap pointer-events-none select-none">
                        Blessings
                    </div>

                    <h2 className="font-script text-5xl md:text-7xl text-[#C6A87C] mb-4 drop-shadow-2xl">
                        With Elders’ Blessings
                    </h2>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D1] via-[#F2D698] to-[#ffecb3] uppercase tracking-wide drop-shadow-sm">
                        Our Journey Began
                    </h1>

                    <div className="flex justify-center mt-8">
                        <div className="w-1 h-20 bg-gradient-to-b from-[#C6A87C] to-transparent"></div>
                    </div>
                </motion.div>

                {/* Vertical Timeline Line */}
                <div className="absolute left-[50%] top-[400px] bottom-20 w-[1px] bg-gradient-to-b from-transparent via-[#C6A87C]/20 to-transparent hidden md:block"></div>

                {/* Journey Cards */}
                <div className="relative">
                    {journeyData.map((item, index) => (
                        <JourneyCard key={index} data={item} index={index} />
                    ))}
                </div>

                {/* Footer Ornament */}
                <div className="flex flex-col items-center justify-center mt-32 gap-6 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-px h-16 bg-[#C6A87C]"></div>
                    <div className="w-4 h-4 border border-[#C6A87C] rotate-45"></div>
                </div>

            </div>
        </section>
    );
};

export default BlessingsSection;
