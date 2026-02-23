import { motion } from 'framer-motion';
import { Calendar, Video } from 'lucide-react';

export default function Webinars() {
    return (
        <section id="webinars" className="py-12">
            <div className="bg-gradient-to-br from-primary to-[#4C2889] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Now
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight">
                            Join Our Free <span className="text-secondary">Masterclass</span> This Weekend
                        </h2>

                        <p className="text-white/80 text-lg max-w-md font-medium">
                            Discover how interactive learning can transform your child's educational journey. Hosted by our top educators.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-secondary text-textMain hover:bg-white px-8 py-4 rounded-full font-extrabold text-lg transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-1 hover:scale-105">
                                Reserve My Seat
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-full max-w-sm"
                        >
                            <div className="aspect-video bg-black/40 rounded-2xl mb-6 relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500" alt="Webinar" className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 group-hover:scale-110 transition-transform cursor-pointer">
                                        <Video size={24} className="ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-lg">The Future of EdTech</h4>
                                        <p className="text-white/70 text-sm font-medium">with Dr. Alan Turing</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold bg-black/20 px-3 py-2 rounded-lg inline-flex">
                                    <Calendar size={16} className="text-secondary" /> Saturday, 10:00 AM EST
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
