import { useRef } from 'react';
import { ShoppingCart, Star, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { useModal } from './AppProviders';

const courses = [
    { id: 1, sellingFast: true, title: 'Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing', age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200, tags: [{ name: 'English', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }, { name: 'Morning class', color: 'text-blue-600 bg-blue-50 border-blue-200' }], teacher: 'Daniel james', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400' },
    { id: 2, sellingFast: false, title: 'Mastering Watercolor Art: Painting for Beginners', age: '8-12 yrs', time: '60 mins', price: '₹ 399', rating: 4.8, learners: 180, tags: [{ name: 'Art', color: 'text-pink-600 bg-pink-50 border-pink-200' }, { name: 'Beginner', color: 'text-green-600 bg-green-50 border-green-200' }], teacher: 'Sarah Wilson', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400' },
    { id: 3, sellingFast: false, title: 'Learn Python Coding & Build Real Apps', age: '12-15 yrs', time: '45 mins', price: '₹ 499', rating: 5.0, learners: 350, tags: [{ name: 'Coding', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: '4 classes', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }], teacher: 'Alex Chen', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400' },
    { id: 4, sellingFast: true, title: 'Public Speaking Masterclass for Kids', age: '10-14 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 500, tags: [{ name: 'Public speaking', color: 'text-green-600 bg-green-50 border-green-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }], teacher: 'Priya Sharma', image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?auto=format&fit=crop&q=80&w=400' },
    { id: 5, sellingFast: false, title: 'Creative Writing: Storybuilding 101', age: '9-13 yrs', time: '50 mins', price: '₹ 199', rating: 4.7, learners: 240, tags: [{ name: 'Writing', color: 'text-blue-500 bg-blue-50 border-blue-100' }, { name: 'Language', color: 'text-purple-500 bg-purple-50' }], teacher: 'Emma Watson', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400' },
    { id: 6, sellingFast: true, title: 'Fast Calculation: Vedic Math Magic', age: '8-14 yrs', time: '40 mins', price: '₹ 345', rating: 5.0, learners: 600, tags: [{ name: 'Math', color: 'text-red-600 bg-red-50' }, { name: 'Popular', color: 'text-orange-600 bg-orange-50' }], teacher: 'Rajiv Malhotra', image: 'https://images.unsplash.com/photo-1509228468518-180dd482180c?auto=format&fit=crop&q=80&w=400' },
    { id: 7, sellingFast: false, title: 'Game Development with Roblox Studio', age: '10-16 yrs', time: '55 mins', price: '₹ 599', rating: 4.9, learners: 420, tags: [{ name: 'Coding', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: 'Advanced', color: 'text-red-500 bg-red-50 border-red-200' }], teacher: 'Marco Polo', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
    { id: 8, sellingFast: true, title: 'Musical Wonders: Intro to Digital Piano', age: '6-12 yrs', time: '30 mins', price: '₹ 250', rating: 4.8, learners: 150, tags: [{ name: 'Music', color: 'text-purple-600 bg-purple-50 border-purple-200' }, { name: 'Beginner', color: 'text-green-600 bg-green-50 border-green-200' }], teacher: 'Lila Grace', image: 'https://images.unsplash.com/photo-1520529611443-42c2347b1155?auto=format&fit=crop&q=80&w=400' },
    { id: 9, sellingFast: false, title: 'Sketching & Character Design', age: '8-14 yrs', time: '45 mins', price: '₹ 349', rating: 4.7, learners: 310, tags: [{ name: 'Art', color: 'text-pink-600 bg-pink-50 border-pink-200' }, { name: 'Technique', color: 'text-yellow-600 bg-yellow-50' }], teacher: 'Sasha Grey', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
    { id: 10, sellingFast: true, title: 'English Grammar & Vocabulary Builder', age: '7-11 yrs', time: '40 mins', price: '₹ 199', rating: 4.6, learners: 780, tags: [{ name: 'Language', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: 'Essentials', color: 'text-gray-600 bg-gray-50' }], teacher: 'John Doe', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400' },
    { id: 11, sellingFast: false, title: 'Yoga & Mindfulness for Kids', age: '5-12 yrs', time: '30 mins', price: '₹ 150', rating: 4.9, learners: 340, tags: [{ name: 'Health', color: 'text-green-600 bg-green-50 border-green-200' }, { name: 'Wellness', color: 'text-teal-600 bg-teal-50' }], teacher: 'Shanti Devi', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
    { id: 12, sellingFast: true, title: 'Creative photography with smartphones', age: '12-16 yrs', time: '50 mins', price: '₹ 450', rating: 4.8, learners: 210, tags: [{ name: 'Media', color: 'text-red-600 bg-red-50 border-red-200' }, { name: 'Hobby', color: 'text-orange-600 bg-orange-50' }], teacher: 'Clicker Sam', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400' },
];

export default function HorizontalCourseCards() {
    const { openEnroll } = useModal();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-8 relative">
            <div className="flex justify-end gap-3 mb-6">
                <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#F7B731] hover:border-[#F7B731] hover:text-[#1a1a2e] transition-all">
                    <ArrowLeft size={20} />
                </button>
                <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#F7B731] hover:border-[#F7B731] hover:text-[#1a1a2e] transition-all">
                    <ArrowRight size={20} />
                </button>
            </div>

            <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 w-full snap-x no-scrollbar scroll-smooth pt-8">
                {courses.map((course, idx) => (
                    <div key={idx} className="flex min-w-[500px] shrink-0 snap-center h-[220px] bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-purple-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 relative group">

                        {/* Small arrow above the first card */}
                        {idx === 0 && (
                            <div className="absolute -top-10 left-10 flex flex-col items-center animate-bounce">
                                <span className="text-[10px] font-bold text-[#411C6B] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 mb-1 shadow-sm uppercase tracking-wider">Start Here</span>
                                <ArrowRight size={18} className="text-[#411C6B] rotate-90" />
                            </div>
                        )}

                        {/* Selling Fast tag */}
                        {course.sellingFast && (
                            <div className="absolute top-4 left-0 z-20 bg-orange-500 text-white px-3 py-1 rounded-r-full text-xs font-bold shadow-sm">
                                Selling Fast
                            </div>
                        )}

                        {/* Image Left */}
                        <div className="w-[45%] h-full bg-gray-200 relative p-2 pb-0 object-cover flex-shrink-0 perspective-[2000px] overflow-hidden rounded-[20px] rounded-br-[4px]">
                            <img
                                src={course.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400'}
                                className="w-full h-full object-cover rounded-[20px] rounded-br-[4px] grayscale group-hover:grayscale-0 transition-transform duration-[1000ms] ease-in-out group-hover:[transform:rotateY(360deg)_scale(1.1)]"
                                alt="Course Thumbnail"
                            />
                        </div>

                        {/* Content Right */}
                        <div className="w-[55%] p-4 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {course.tags.map(tag => (
                                        <span key={tag.name} className={`text-[10px] font-bold border px-2 py-0.5 rounded-full ${tag.color}`}>{tag.name}</span>
                                    ))}
                                </div>

                                <h3 className="font-bold text-sm text-textMain leading-snug mb-2 line-clamp-3 pr-2">
                                    {course.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-2">
                                    <img src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt="teacher" className="w-5 h-5 rounded-full border border-gray-200" />
                                    <span className="text-[11px] text-textMuted font-medium flex items-center flex-wrap gap-1">
                                        By: <span className="text-textMain font-bold">{course.teacher}</span>
                                        <Star size={10} className="fill-yellow-500 text-yellow-500 ml-1" /> {course.rating} | {course.learners}+ learners
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-textMuted border-t border-gray-100 pt-3">
                                <div className="flex items-center gap-1 font-medium bg-gray-50 px-2 py-1 rounded-md">
                                    <User size={12} className="text-gray-400" /> {course.age}
                                </div>
                                <div className="flex items-center gap-1 font-medium bg-gray-50 px-2 py-1 rounded-md">
                                    <Clock size={12} className="text-gray-400" /> {course.time}
                                </div>
                                <div className="font-bold text-textMain text-sm">
                                    {course.price}
                                </div>
                                <button
                                    onClick={() => openEnroll(course, 'enroll')}
                                    className="text-gray-400 hover:text-[#411C6B] transition-colors"
                                >
                                    <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Explore All Card for Large Horizontal Section */}
                <div className="min-w-[400px] shrink-0 snap-center h-[220px] relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all cursor-pointer group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        alt="Explore All"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#411C6B]/80 to-transparent" />
                    <div className="relative z-10 flex flex-col justify-center h-full p-8 gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#1E90FF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <ArrowRight size={28} className="text-white" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-white font-black tracking-wide uppercase text-xl block">Explore All Courses</span>
                            <span className="text-blue-100 text-sm font-medium uppercase tracking-widest opacity-90">Find more amazing topics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
