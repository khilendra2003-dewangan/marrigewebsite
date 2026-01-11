import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import images from assets/event
import img1 from './assets/event/c-1img.png'; // Mehendi
import img2 from './assets/event/c-2img.png'; // Sangeet
import img3 from './assets/event/c-3img.png'; // Chulmati
import img4 from './assets/event/c-4 img.png'; // Baraat
import img5 from './assets/event/c-5imag.png'; // Jaimala
import img6 from './assets/event/c-6img.png'; // Saptapadi
import img7 from './assets/event/c-7img.png'; // Pani Grahan
import img8 from './assets/event/c-8img.png'; // Vidaai

const eventsData = [
    {
        id: 1,
        title: "Mehendi",
        date: "February 9, 2026",
        desc: "The color of love deepens with every stroke. Hands adorned with intricate henna, marking the beginning of the joyous festivities.",
        img: img1,
        time: "10:00 AM"
    },
    {
        id: 2,
        title: "Sangeet",
        date: "February 9, 2026",
        desc: "A night of melody and dance, where families unite in celebration. Beats of the dhol, laughter, and rhythmic steps fill the air.",
        img: img2,
        time: "07:00 PM"
    },
    {
        id: 3,
        title: "Chulmati",
        date: "February 09, 2026",
        desc: "A sacred ritual honoring Mother Earth, seeking her blessings for a prosperous and grounded life ahead.",
        img: img4,
        time: "09:00 AM"
    },
    {
        id: 4,
        title: "Baraat",
        date: "February 10, 2026",
        desc: "The royal procession arrives! With pomp and grandeur, the groom makes his way to sweep his bride off her feet.",
        img: img3,
        time: "04:00 PM"
    },
    {
        id: 5,
        title: "Jaimala",
        date: "February 10, 2026",
        desc: "A playful yet profound exchange of garlands, symbolizing the first step of acceptance and union between the two souls.",
        img: img8,
        time: "07:00 PM"
    },
    {
        id: 6,
        title: "Saptapadi",
        date: "February 10, 2026",
        desc: "Seven steps, seven vows. Encircling the sacred fire, we promise companionship, love, and loyalty for seven lifetimes.",
        img: img5,
        time: "11:00 PM"
    },
    {
        id: 7,
        title: "Pani Grahan",
        date: "February 10, 2026",
        desc: "The acceptance of hand in marriage. A solemn promise to hold, protect, and cherish each other through all tides of life.",
        img: img6,
        time: "02:00 AM"
    },
    {
        id: 8,
        title: "Vidaai",
        date: "February 10, 2026",
        desc: "A tearful goodbye and a hopeful beginning. Leaving the warmth of her home to build a new world of love.",
        img: img7,
        time: "05:00 AM"
    }
];

const EventCard = ({ event, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 mb-20 md:mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative group perspective-1000">
                <div className="relative transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                    {/* Golden Frame */}
                    <div className="absolute -inset-4 border border-[#C6A87C]/30 rounded-tr-[50px] rounded-bl-[50px]"></div>
                    <div className="absolute inset-0 border border-[#F2D698]/20 rotate-2 scale-105"></div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <img
                            src={event.img}
                            alt={event.title}
                            className="w-full h-[300px] md:h-[400px] object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Date Badge */}
                    <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} z-20 bg-black/40 backdrop-blur-md border border-[#C6A87C]/50 px-4 py-2 rounded-full`}>
                        <span className="text-[#F2D698] font-serif text-sm tracking-widest">{event.date.split(',')[0]}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`flex flex-col gap-4 ${isEven ? 'md:items-start' : 'md:items-end md:text-right'}`}>

                    {/* Decorative Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[2px] bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent"
                    ></motion.div>

                    <h3 className="font-script text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D1] via-[#F2D698] to-[#C6A87C] drop-shadow-md py-2">
                        {event.title}
                    </h3>

                    <div className="flex flex-col md:flex-row items-center gap-3 text-[#E6D593]/80 font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-center md:text-left">
                        <span className="font-bold text-[#F2D698]">{event.date}</span>
                        <div className="hidden md:block w-1.5 h-1.5 bg-[#C6A87C] rounded-full"></div>
                        <span>{event.time}</span>
                        <div className="hidden md:block w-1.5 h-1.5 bg-[#C6A87C] rounded-full"></div>
                        <span>Dhamtari, Chhattisgarh, India</span>
                    </div>

                    <p className="text-[#F2E5C9]/70 font-sans text-lg leading-relaxed max-w-md mt-2">
                        {event.desc}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-8 py-3 bg-[#C6A87C]/10 border border-[#C6A87C]/30 text-[#F2D698] font-serif tracking-widest text-xs uppercase hover:bg-[#C6A87C]/20 transition-colors"
                    >
                        View Details
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const EventsSection = () => {
    return (
        <section id="events" className="relative w-full py-32 bg-[#050302] overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] pointer-events-none"></div>
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 md:mb-32"
                >
                    <span className="text-[#C6A87C] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase block mb-4">Itinerary</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#F2D698] to-[#C6A87C]">
                        The Royal Celebrations
                    </h2>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent mx-auto mt-8"></div>
                </motion.div>

                {/* Events List */}
                <div className="max-w-6xl mx-auto">
                    {eventsData.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default EventsSection;
