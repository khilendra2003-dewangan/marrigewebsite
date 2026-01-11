import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import brideImg from './assets/girl.png';
import groomImg from './assets/boy.png';

const InfoRow = ({ icon, label, value }) => (
    <div className="flex items-start gap-4 mb-4">
        <div className="mt-1 text-[#C6A87C] text-lg">
            {icon}
        </div>
        <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C6A87C] font-semibold mb-1">{label}</div>
            <div className="text-[#333] font-serif text-lg leading-snug">{value}</div>
        </div>
    </div>
);

const StoryCard = ({ title, name, dob, hometown, education, career, className, alignRight }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: alignRight ? -60 : 60, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className={`relative bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)] max-w-lg z-10 hover:shadow-[0_30px_60px_rgba(198,168,124,0.15)] transition-shadow duration-500 ${className}`}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent opacity-50"></div>

            <h3 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-2">{title}</h3>
            <h2 className="font-script text-5xl md:text-6xl text-[#1a1612] mb-8">{name}</h2>

            <div className="space-y-6">
                <InfoRow
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                    label="Born"
                    value={dob}
                />
                <InfoRow
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>}
                    label="Hometown"
                    value={hometown}
                />
                <InfoRow
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6" /><path d="M2 16h20" /><path d="M12 22v-6" /><path d="M12 10V2" /><path d="M2 10h20" /><path d="M7 2v8" /><path d="M17 2v8" /></svg>}
                    label="Education"
                    value={education}
                />
                {career && (
                    <InfoRow
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>}
                        label="Career"
                        value={career}
                    />
                )}
            </div>

            <div className={`w-16 h-[2px] bg-[#C6A87C]/30 mt-8 ${alignRight ? 'ml-auto' : ''}`}></div>
        </motion.div>
    );
};

const SectionBadge = ({ label }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-2 mb-8 z-10"
    >
        <span className="text-[#C6A87C] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">{label}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A87C] to-transparent"></div>
    </motion.div>
);

const StorySection = () => {
    return (
        <section className="relative w-full bg-[#fcfaf7] overflow-hidden py-20 lg:py-0">
            {/* HER STORY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Image Side (Her) - LEFT */}
                <div className="relative h-[60vh] md:h-[85vh] lg:h-auto overflow-hidden group">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <img src={brideImg} alt="Sandhya" className="w-full h-full object-cover object-top" />
                    </motion.div>
                    {/* Golden Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#fcfaf7] opacity-80"></div>
                    <div className="absolute inset-0 bg-[#C6A87C]/10 mix-blend-overlay"></div>
                </div>

                {/* Details Side (Her) - RIGHT */}
                <div className="flex flex-col items-center justify-center p-8 lg:p-20 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 text-[150px] lg:text-[200px] leading-none font-script text-[#C6A87C]/5 pointer-events-none select-none">S</div>

                    <SectionBadge label="The Bride" />

                    <StoryCard
                        title="Her Story"
                        name="Sandhya"
                        dob="April 12, 1995"
                        hometown="Dhamtari, Chhattisgarh"
                        education={
                            <>
                                Pandit Ravishankar Shukla University<br />
                                <span className="text-sm text-gray-500 mt-1 block">PG Daga Girls College, Raipur</span>
                                <span className="text-sm text-gray-500 block">Saraswati Shishu Mandir School, Kurud</span>
                            </>
                        }
                    />
                </div>
            </div>

            {/* HIS STORY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Details Side (Him) - LEFT */}
                <div className="flex flex-col items-center justify-center p-8 lg:p-20 relative order-2 lg:order-1">
                    {/* Decorative Elements */}
                    <div className="absolute bottom-10 left-10 text-[150px] lg:text-[200px] leading-none font-script text-[#C6A87C]/5 pointer-events-none select-none">B</div>

                    <SectionBadge label="The Groom" />

                    <StoryCard
                        title="His Story"
                        name="Bhupesh"
                        dob="August 15, 1993"
                        hometown="Raipur, Chhattisgarh"
                        education="National Institute of Technology (NIT), Raipur"
                        career="Senior Software Architect"
                        alignRight
                        className="text-right"
                    />
                    {/* Override inner text alignment for mirrored look */}
                    <style jsx>{`
                        .text-right .flex { flex-direction: row-reverse; }
                        .text-right .text-left { text-align: right; }
                   `}</style>
                </div>

                {/* Image Side (Him) - RIGHT */}
                <div className="relative h-[60vh] md:h-[85vh] lg:h-auto overflow-hidden group order-1 lg:order-2">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <img src={groomImg} alt="Bhupesh" className="w-full h-full object-cover object-top" />
                    </motion.div>
                    {/* Golden Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#fcfaf7] opacity-80"></div>
                    <div className="absolute inset-0 bg-[#C6A87C]/10 mix-blend-overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
