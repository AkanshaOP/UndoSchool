import { motion } from 'framer-motion';

const teachers = [
    { id: 1, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Computer science', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'English', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Early educator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Coding', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: 'Andy Brew', title: 'M.Sc, B.Ed', experience: '15+ Years', students: '1000+ Students', subject: 'Computer science', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
];

export default function TeacherProfiles() {
    return (
        <section id="teachers" className="space-y-12 max-w-7xl mx-auto px-4 w-full">
            <div className="text-center space-y-2 mt-10">
                <h2 className="text-4xl font-extrabold text-textMain">Learn from Top Teachers</h2>
                <p className="text-textMuted text-lg font-medium">Expert instructors who make learning fun and engaging for every child</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-12 w-full">
                {teachers.map((teacher, idx) => (
                    <div key={idx} className="bg-white rounded-[40px] rounded-bl-lg rounded-br-lg p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center relative mt-10 hover:-translate-y-2 transition-transform duration-300">
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
        </section>
    );
}
