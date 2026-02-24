import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const teachers = [
    { id: 1, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Computer science', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'English', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Early educator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Coding', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Computer science', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 6, name: 'Ritu Mehta', title: 'B.A, M.Ed', experience: '8+ Years', students: '800+ Students', subject: 'Mathematics', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
    { id: 7, name: 'Karan Patel', title: 'B.Tech', experience: '6+ Years', students: '600+ Students', subject: 'Robotics', image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200' },
    { id: 8, name: 'Maya Singh', title: 'M.A, B.Ed', experience: '10+ Years', students: '900+ Students', subject: 'Arts & Crafts', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
];

export default function TeacherProfiles() {
    const scrollerRef = useRef(null);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        const update = () => {
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollWidth > el.clientWidth && el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
        };

        update();
        el.addEventListener('scroll', update);
        window.addEventListener('resize', update);

        return () => {
            el.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <section id="teachers" className="space-y-12 max-w-7xl mx-auto px-4 w-full">
            <div className="text-center space-y-2 mt-10">
                <h2 className="text-4xl font-extrabold text-textMain">Learn from Top Teachers</h2>
                <p className="text-textMuted text-lg font-medium">Expert instructors who make learning fun and engaging for every child</p>
            </div>

            <div className="relative w-full">
                <div ref={scrollerRef} className="flex gap-6 pt-12 w-full pb-6 overflow-x-visible md:overflow-x-auto no-scrollbar flex-wrap md:flex-nowrap justify-center md:justify-start">
                    {teachers.map((teacher, idx) => (
                        <div key={idx} className="w-full sm:w-[260px] md:flex-shrink-0 md:min-w-[220px] bg-white rounded-[40px] rounded-bl-lg rounded-br-lg p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center relative mt-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -top-12">
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gray-200">
                                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover rounded-full" />
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

                <button
                    aria-label="Scroll teachers right"
                    onClick={() => {
                        const el = scrollerRef.current;
                        if (!el) return;
                        el.scrollBy({ left: Math.min(el.clientWidth, 500), behavior: 'smooth' });
                    }}
                    disabled={!canScrollRight}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 flex items-center justify-center z-30 ${!canScrollRight ? 'opacity-40 pointer-events-none' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

