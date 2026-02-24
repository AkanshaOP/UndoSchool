import { ShoppingCart, Star, Clock, User, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useRef, useState } from 'react';
import { useModal } from './AppProviders';

// Flip Card Component — front face shows image, back face shows course details
function CourseCardItem({ course, idx }) {
    const cardRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const rotateYVal = useMotionValue(0);
    const { openEnroll } = useModal();

    const handleMouseEnter = () => {
        setIsFlipped(true);
        animate(rotateYVal, 180, { duration: 0.6, ease: [0.4, 0, 0.2, 1] });
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
        animate(rotateYVal, 0, { duration: 0.6, ease: [0.4, 0, 0.2, 1] });
    };

    return (
        <div className="relative pt-6 w-full h-[400px]" style={{ perspective: 1200 }}>
            {/* Rating bar above card */}
            <div className="absolute top-0 w-full text-center flex justify-center items-center text-xs text-[#F7B731] font-bold gap-1 z-10">
                <Star size={12} className="fill-[#F7B731]" />
                {course.rating}
                <span className="text-gray-400 font-medium">| {course.learners}+ learners</span>
            </div>

            {/* Flip container */}
            <motion.div
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY: rotateYVal,
                    transformStyle: 'preserve-3d',
                }}
                className="relative w-full mt-2 cursor-pointer h-[calc(100%-24px)] group"
            >
                {/* ===== FRONT FACE ===== */}
                <div
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                    className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col w-full h-full"
                >
                    {course.sellingFast && (
                        <div className="absolute top-6 left-0 z-20 bg-[#F7B731] text-[#1a1a2e] px-3 py-1 rounded-r-full text-xs font-black tracking-wide shadow-sm uppercase">
                            Selling Fast
                        </div>
                    )}

                    <div className="h-44 w-full relative p-2 pb-0 overflow-hidden">
                        <div className="w-full h-full relative overflow-hidden rounded-t-[16px] bg-gray-100">
                            <img
                                src={course.image}
                                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                                alt={course.title}
                            />
                        </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {course.tags?.slice(0, 2).map(tag => (
                                <span key={tag.name} className={`text-[10px] uppercase tracking-wider font-bold border px-2 py-0.5 rounded-full ${tag.color}`}>
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                        <h3 className="font-bold text-[15px] text-[#1a1a2e] leading-tight line-clamp-2">
                            {course.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-gray-100">
                            <img src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt="teacher" className="w-5 h-5 rounded-full border border-gray-100" />
                            <span className="text-xs text-gray-500">By <strong className="text-[#1a1a2e]">{course.teacher}</strong></span>
                        </div>
                    </div>
                </div>

                {/* ===== BACK FACE ===== */}
                <div
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#411C6B] to-[#1E90FF] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(65,28,107,0.3)] flex flex-col p-5 justify-between text-white"
                >
                    {/* Top area */}
                    <div>
                        {course.sellingFast && (
                            <div className="inline-block bg-[#F7B731] text-[#1a1a2e] px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide mb-3">
                                🔥 Selling Fast
                            </div>
                        )}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {course.tags?.map(tag => (
                                <span key={tag.name} className="text-[9px] uppercase tracking-wider font-bold bg-white/20 border border-white/30 px-2 py-0.5 rounded-full text-white">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                        <h3 className="font-extrabold text-[16px] leading-snug mb-2 text-white">
                            {course.title}
                        </h3>
                        {course.description && (
                            <p className="text-[12px] text-white/75 leading-snug line-clamp-3">
                                {course.description}
                            </p>
                        )}
                    </div>

                    {/* Middle info */}
                    <div className="flex items-center gap-3 py-3 border-y border-white/20 text-[11px] text-white/80">
                        <div className="flex items-center gap-1"><User size={13} /> {course.age}</div>
                        <div className="flex items-center gap-1"><Clock size={13} /> {course.time}</div>
                        <div className="flex items-center gap-1 ml-auto">
                            <Star size={13} className="fill-[#F7B731] text-[#F7B731]" />
                            <span className="font-bold text-white">{course.rating}</span>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex items-center justify-between mt-1">
                        <div className="text-2xl font-black text-white">{course.price}</div>
                        {course.isWebinar ? (
                            <button
                                onClick={() => openEnroll(course, 'join')}
                                className="flex items-center gap-1.5 bg-white text-[#411C6B] px-4 py-2 rounded-full font-bold text-xs shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                Join Webinar <ArrowRight size={14} />
                            </button>
                        ) : (
                            <button
                                onClick={() => openEnroll(course, 'enroll')}
                                className="flex items-center gap-1.5 bg-white text-[#411C6B] px-4 py-2 rounded-full font-bold text-xs shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                Enroll Now <ArrowRight size={14} />
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function CourseCards({ sectionTitle, sectionSubtitle, coursesData }) {
    // Default dummy data matching structure and adding `imageHover`
    const courses = coursesData || [
        {
            id: 1, sellingFast: true,
            title: 'Summer robotics camp: fun projects with auto arduino, Tink...',
            description: 'Build circuits & smart projects like alarms, weather stations, etc',
            age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200,
            tags: [{ name: 'Robotics', color: 'text-orange-500 bg-orange-50 border-orange-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }],
            teacher: 'Daniel James',
            image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=400',
            topic: 'Robotics'
        },
        {
            id: 2, sellingFast: false,
            title: 'Mastering Watercolor Art: Painting for Beginners',
            description: 'Learn to blend colors and paint beautiful landscapes step-by-step.',
            age: '8-12 yrs', time: '60 mins', price: '₹ 399', rating: 4.8, learners: 180,
            tags: [{ name: 'Art', color: 'text-pink-600 bg-pink-50 border-pink-200' }, { name: 'Beginner', color: 'text-green-600 bg-green-50 border-green-200' }],
            teacher: 'Sarah Wilson',
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400',
            topic: 'Art'
        },
        {
            id: 3, sellingFast: false,
            title: 'Learn Python Coding & Build Real Apps',
            description: 'Dive into the world of programming with fun interactive games.',
            age: '12-15 yrs', time: '45 mins', price: '₹ 499', rating: 5.0, learners: 350,
            tags: [{ name: 'Coding', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: '4 classes', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Alex Chen',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400',
            topic: 'Coding'
        },
        {
            id: 4, sellingFast: true,
            title: 'Public Speaking Masterclass for Kids',
            description: 'Build confidence and stage presence to deliver amazing speeches.',
            age: '10-14 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 500,
            tags: [{ name: 'Public speaking', color: 'text-green-600 bg-green-50 border-green-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }],
            teacher: 'Priya Sharma',
            image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400',
            topic: 'Public Speaking'
        },
    ];

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 w-full">
            {sectionTitle && (
                <div className="text-center space-y-2 mb-10 mt-10">
                    <h2 className="text-4xl font-extrabold text-[#1a1a2e]">{sectionTitle}</h2>
                    {sectionSubtitle && <p className="text-gray-500 text-lg font-medium">{sectionSubtitle}</p>}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
                {courses.map((course, idx) => (
                    <CourseCardItem key={course.id || idx} course={course} idx={idx} />
                ))}
            </div>
        </div>
    );
}
