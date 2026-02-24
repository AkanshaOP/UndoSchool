import { motion } from 'framer-motion';
import { Calendar, Clock, Play, ArrowRight, Video } from 'lucide-react';

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
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
    {
        id: 4,
        label: 'CODING',
        title: 'Intro to Game Development for Kids',
        description: 'Create simple interactive games using block-based and beginner-friendly tools.',
        date: 'February, 22nd',
        time: '16:00 – 17:00',
        teacher: 'Amit Shah',
        teacherRole: 'Instructor',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
    {
        id: 5,
        label: 'CREATIVE ARTS',
        title: 'Finger Painting & Colors',
        description: 'Hands-on fun with colors, textures and simple painting techniques for young learners.',
        date: 'February, 24th',
        time: '11:00 – 12:00',
        teacher: 'Sara Lin',
        teacherRole: 'Instructor',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=600',
        badge: 'UPCOMING',
    },
];

export default function WebinarSection() {
    const [main, ...rest] = webinars;

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

            {/* Upcoming Webinar Cards Row */}
            <div className="relative w-full">
                <div ref={(el) => (window.webinarScroller = el)} className="flex gap-6 overflow-x-auto pb-6 w-full no-scrollbar">
                    {rest.map((webinar, idx) => (
                        <motion.div
                            key={webinar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="w-full sm:flex-shrink-0 sm:min-w-[320px] relative bg-[#1a1a2e] rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-xl hover:shadow-[0_0_40px_rgba(247,183,49,0.15)] transition-shadow duration-300 group"
                        >
                        {/* Image */}
                        <div className="sm:w-44 h-48 sm:h-auto relative flex-shrink-0 overflow-hidden">
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
                </div>

                <button
                    aria-label="Scroll webinars right"
                    onClick={() => { if (window.webinarScroller) window.webinarScroller.scrollBy({ left: 520, behavior: 'smooth' }); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
