import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Play, ArrowRight, ArrowLeft, Video } from 'lucide-react';

const webinars = [
    {
        id: 1,
        label: 'CODING',
        title: 'Summer Robotics Camp: Fun Projects with Arduino',
        description: 'Build circuits & smart projects like alarms, weather stations, and more!',
        date: 'February, 16th',
        time: '16:00 – 18:00',
        teacher: 'Daniel James',
        teacherRole: 'Best Speaker',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
        badge: 'LIVE',
    },
    {
        id: 2,
        label: 'PUBLIC SPEAKING',
        title: 'Master the Art of Communication & Confidence',
        description: 'Empower kids with presentation skills, storytelling and stage confidence.',
        date: 'February, 18th',
        time: '17:00 – 19:00',
        teacher: 'Sarah Wilson',
        teacherRole: 'Best Speaker',
        image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
    {
        id: 3,
        label: 'MATHS MAGIC',
        title: 'Math Magic: Making Numbers Fun for Kids',
        description: 'A fun and engaging webinar that turns complex maths into simple magic tricks.',
        date: 'February, 20th',
        time: '15:00 – 16:30',
        teacher: 'Priya Sharma',
        teacherRole: 'Best Speaker',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd482180c?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
    {
        id: 4,
        label: 'SCIENCE LAB',
        title: 'Explosive Science Experiments at Home',
        description: 'Learn chemical reactions and physics principles with safe kitchen experiments.',
        date: 'February, 22nd',
        time: '11:00 – 12:30',
        teacher: 'Dr. Newton',
        teacherRole: 'Expert Scientist',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
    {
        id: 5,
        label: 'DIGITAL ART',
        title: 'Introduction to Procreate & Digital Illustration',
        description: 'Master the basics of digital drawing, brushes, and layers for stunning art.',
        date: 'February, 24th',
        time: '18:00 – 20:00',
        teacher: 'Lila Artista',
        teacherRole: 'Lead Designer',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
    {
        id: 6,
        label: 'CHESS PRO',
        title: 'Advanced Openings and Endgame Mastery',
        description: 'Serious chess strategies for competitive play and tournament preparation.',
        date: 'February, 26th',
        time: '10:00 – 12:00',
        teacher: 'Grandmaster Zee',
        teacherRole: 'Chess Pro',
        image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
];

export default function WebinarSection() {
    const [main, ...rest] = webinars;
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h2 className="text-4xl font-extrabold text-[#1a1a2e]">
                    Webinar starting within{' '}
                    <span className="text-[#F7B731]">24 hrs</span> ⚡
                </h2>
                <p className="text-gray-500 mt-2 text-lg">Join live sessions led by industry experts</p>
            </motion.div>

            {/* Hero Webinar Banner */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden bg-[#1a1a2e] flex flex-col lg:flex-row min-h-[340px] mb-8 shadow-2xl group"
            >
                {/* Dot decorations */}
                <div className="absolute top-6 left-60 grid grid-cols-5 gap-1 opacity-30">
                    {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                    ))}
                </div>
                <div className="absolute bottom-6 right-80 grid grid-cols-4 gap-1 opacity-20">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                    ))}
                </div>

                {/* Left Content */}
                <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center z-10">
                    {/* Top bar */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#F7B731] text-[#1a1a2e] text-xs font-black px-3 py-1 rounded-full tracking-widest uppercase">
                            {main.label}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                            {main.badge}
                        </span>
                    </div>

                    <h3 className="text-white text-3xl lg:text-4xl font-black leading-tight mb-3 max-w-md">
                        WEBINAR
                        <span className="block text-[#F7B731] text-xl font-bold mt-1 tracking-wider uppercase">
                            {main.label} CONFERENCE
                        </span>
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                        {main.description}
                    </p>

                    {/* Date & Time */}
                    <div className="flex flex-col gap-2 mb-8">
                        <div className="flex items-center gap-2 text-[#F7B731] font-bold text-base">
                            <Calendar size={16} />
                            {main.date}
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                            <Clock size={15} />
                            {main.time}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-fit flex items-center gap-2 bg-[#F7B731] hover:bg-yellow-400 text-[#1a1a2e] font-black px-7 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 hover:scale-105 text-sm uppercase tracking-wide">
                        <Play size={14} className="fill-[#1a1a2e]" />
                        Read More
                    </button>
                </div>

                {/* Right Image Panel */}
                <div className="relative lg:w-[42%] min-h-[260px] lg:min-h-0 overflow-hidden">
                    {/* Curved mask */}
                    <div className="absolute inset-0 bg-[#1a1a2e] lg:rounded-l-[80px] z-10" style={{ clipPath: 'ellipse(15% 100% at 0% 50%)' }} />
                    <img
                        src={main.image}
                        alt="Webinar Speaker"
                        className="w-full h-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                    {/* Best Speaker badge */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#1a1a2e]/80 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] tracking-[0.25em] uppercase px-5 py-2 rounded-full font-semibold whitespace-nowrap">
                        ● Best Speaker &nbsp;●&nbsp; Best Speaker
                    </div>
                    {/* Teacher */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Video size={12} className="text-[#F7B731]" />
                        <span className="text-white text-xs font-semibold">{main.teacher}</span>
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-between items-end mb-6 w-full">
                <h3 className="text-[#1a1a2e] text-2xl font-bold px-4 md:px-0">Upcoming Sessions</h3>
                <div className="flex gap-3 px-4 md:px-0">
                    <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#F7B731] hover:border-[#F7B731] hover:text-[#1a1a2e] transition-all">
                        <ArrowLeft size={20} />
                    </button>
                    <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#F7B731] hover:border-[#F7B731] hover:text-[#1a1a2e] transition-all">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Upcoming Webinar Cards Row */}
            <div ref={scrollRef} className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x no-scrollbar px-2 md:px-0 w-full scroll-smooth">
                {rest.map((webinar, idx) => (
                    <motion.div
                        key={webinar.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="min-w-[280px] md:min-w-[420px] h-auto sm:h-[240px] shrink-0 snap-center relative bg-[#1a1a2e] rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-xl hover:shadow-[0_0_40px_rgba(247,183,49,0.15)] transition-shadow duration-300 group"
                    >
                        {/* Image */}
                        <div className="w-full sm:w-44 h-48 sm:h-auto relative flex-shrink-0 overflow-hidden">
                            <img
                                src={webinar.image}
                                alt={webinar.title}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-transparent to-transparent sm:block hidden" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-[#F7B731] text-[#1a1a2e] text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-widest uppercase">
                                    {webinar.label}
                                </span>
                                <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest border border-gray-600 px-2 py-0.5 rounded-full">
                                    {webinar.badge}
                                </span>
                            </div>
                            <h4 className="text-white font-bold text-base leading-snug mb-2 line-clamp-2">
                                {webinar.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                                {webinar.description}
                            </p>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1.5 text-[#F7B731] text-xs font-bold">
                                    <Calendar size={12} />
                                    {webinar.date}
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                                    <Clock size={12} />
                                    {webinar.time}
                                </div>
                            </div>
                            <button className="w-fit flex items-center gap-1.5 text-[#F7B731] hover:text-yellow-300 text-xs font-bold uppercase tracking-wide group/btn transition-colors">
                                Register Now
                                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}

                {/* Register/CTA Div */}
                <div className="min-w-[280px] md:min-w-[320px] h-[240px] shrink-0 snap-center flex items-center justify-center relative bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:shadow-[0_0_40px_rgba(247,183,49,0.15)] transition-all cursor-pointer group p-8">
                    <div className="flex flex-col items-center text-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-[#F7B731] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-yellow-400/20">
                            <ArrowRight size={28} className="text-[#1a1a2e]" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-white font-black tracking-wide uppercase text-sm block">See more webinars</span>
                            <span className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.2em]">Explore all live events</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
