import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const teachers = [
    { id: 1, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Computer science', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'English', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Early educator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Coding', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Computer science', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
];

export default function TeacherProfiles() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="teachers" className="space-y-12 max-w-7xl mx-auto px-4 w-full">
            <div className="w-full flex flex-col items-center text-center mt-10 gap-6">
                <div className="space-y-2">
                    <h2 className="text-4xl font-extrabold text-textMain">Learn from Top Teachers</h2>
                    <p className="text-textMuted text-lg font-medium">Expert instructors who make learning fun and engaging for every child</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#F7B731] hover:border-[#F7B731] hover:text-[#1a1a2e] transition-all">
                        <ArrowLeft size={24} />
                    </button>
                    <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#F7B731] hover:border-[#F7B731] hover:text-[#1a1a2e] transition-all">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-6 pt-12 w-full overflow-x-auto pb-12 snap-x no-scrollbar scroll-smooth md:px-0 px-2">
                {teachers.map((teacher, idx) => (
                    <div key={idx} className="min-w-[240px] shrink-0 snap-center bg-white rounded-[40px] rounded-bl-lg rounded-br-lg p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center relative mt-10 hover:-translate-y-2 transition-transform duration-300 group">

                        {/* Small arrow above the first card */}
                        {idx === 0 && (
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
                                <span className="text-[10px] font-bold text-[#1E90FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 mb-1 shadow-sm uppercase tracking-wider">Expert Peers</span>
                                <ArrowRight size={18} className="text-[#1E90FF] rotate-90" />
                            </div>
                        )}

                        <div className="absolute -top-12">
                            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gray-200 overflow-hidden">
                                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-lg font-bold text-textMain">{teacher.name}</h3>
                            <p className="text-xs text-textMuted font-medium flex justify-center gap-1 my-1">
                                <span>{teacher.title}</span> | <span>{teacher.experience}</span>
                            </p>
                            <p className="text-xs text-gray-400 font-medium mb-4">{teacher.students}</p>

                            <div className="text-[10px] font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full inline-block border border-gray-200 shadow-inner">
                                {teacher.subject}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
