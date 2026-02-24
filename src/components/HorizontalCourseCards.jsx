import { ShoppingCart, Star, Clock, User } from 'lucide-react';
import { useModal } from './AppProviders';

const courses = [
    { id: 1, sellingFast: true, title: 'Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing', age: '7-10 yrs', time: '45', price: '₹ 299', rating: 4.9, learners: 200, tags: [{ name: 'English', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }, { name: 'Morning class', color: 'text-blue-600 bg-blue-50 border-blue-200' }], teacher: 'Daniel james', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400' },
    { id: 2, sellingFast: false, title: 'Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing', age: '7-10 yrs', time: '45', price: '₹ 299', rating: 4.9, learners: 200, tags: [{ name: 'English', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }, { name: 'Morning class', color: 'text-blue-600 bg-blue-50 border-blue-200' }], teacher: 'Daniel james', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400' },
    { id: 3, sellingFast: false, title: 'Creative Art Projects for Kids', age: '8-12 yrs', time: '40', price: '₹ 249', rating: 4.7, learners: 180, tags: [{ name: 'Art', color: 'text-pink-600 bg-pink-50 border-pink-200' }], teacher: 'Sara Lin', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400' },
    { id: 4, sellingFast: false, title: 'Intro to Python: Build Simple Games', age: '10-14 yrs', time: '50', price: '₹ 399', rating: 4.8, learners: 420, tags: [{ name: 'Coding', color: 'text-blue-600 bg-blue-50 border-blue-200' }], teacher: 'Ravi Kumar', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400' },
    { id: 5, sellingFast: false, title: 'Public Speaking Fun Workshops', age: '7-11 yrs', time: '35', price: '₹ 199', rating: 4.6, learners: 210, tags: [{ name: 'Public speaking', color: 'text-green-600 bg-green-50 border-green-200' }], teacher: 'Priya Sharma', image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?auto=format&fit=crop&q=80&w=400' },
];

export default function HorizontalCourseCards() {
    const { openEnroll } = useModal();
    return (
        <div className="flex gap-6 overflow-x-auto pb-12 w-full max-w-7xl mx-auto px-4 no-scrollbar">
            {courses.map((course, idx) => (
                <div key={idx} className="flex min-w-[500px] h-[220px] bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-purple-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 relative group">

                    {/* Selling Fast tag */}
                    {course.sellingFast && (
                        <div className="absolute top-4 left-0 z-20 bg-orange-500 text-white px-3 py-1 rounded-r-full text-xs font-bold shadow-sm">
                            Selling Fast
                        </div>
                    )}

                    {/* Image Left */}
                    <div className="w-[45%] h-full bg-gray-200 relative p-2 pb-0 object-cover flex-shrink-0 perspective-[2000px] overflow-hidden rounded-[20px] rounded-br-[4px]">
                        <img
                            src={course.image}
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
        </div>
    );
}
