import { motion } from 'framer-motion';
import { Search, Star, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useToast } from './AppProviders';
import asset1 from '../assets/asset1.png';
import asset2 from '../assets/asset2.png';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [query, setQuery] = useState('');
    const showToast = useToast();
    const inputRef = useRef(null);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#411C6B] text-white">
            {/* Mouse following blob */}
            <motion.div
                animate={{
                    x: mousePosition.x - 150,
                    y: mousePosition.y - 150,
                }}
                transition={{ type: 'spring', damping: 15, stiffness: 50, mass: 0.5 }}
                className="pointer-events-none absolute left-0 top-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-[100px] z-0"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Pulsing LIVE Indicator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute top-0 right-4 lg:right-10 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg z-30"
                >
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                    <span className="text-white text-sm font-bold tracking-wider">LIVE</span>
                </motion.div>

                {/* Floating Icons/Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.7 },
                        scale: { duration: 0.5, delay: 0.7 },
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="absolute hidden lg:flex flex-col items-center justify-center top-0 left-20 w-24 h-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm z-20"
                >
                    <span className="font-bold text-xl">500+</span>
                    <span className="text-xs">Courses</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.8 },
                        scale: { duration: 0.5, delay: 0.8 },
                        y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                    }}
                    className="absolute hidden lg:flex flex-col items-center justify-center bottom-20 left-10 w-32 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex-row gap-2 px-4 shadow-lg z-20"
                >
                    <div className="flex gap-1">
                        <Star className="text-white fill-white w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="font-bold text-lg leading-tight">4.9</span>
                        <span className="text-[10px] leading-tight text-white/80">Rating</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.9 },
                        scale: { duration: 0.5, delay: 0.9 },
                        y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                    }}
                    className="absolute hidden lg:flex top-10 right-20 w-36 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex-row items-center gap-3 px-4 shadow-lg z-20"
                >
                    <Heart className="text-white fill-white w-5 h-5" />
                    <div className="flex flex-col text-left">
                        <span className="font-bold text-lg leading-tight">10k+</span>
                        <span className="text-[10px] leading-tight text-white/80">Happy kids</span>
                    </div>
                </motion.div>

                {/* Desktop Images - Left (Girl studying) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, y: [0, -12, 0], rotate: [0, 2, 0], scale: [1, 1.05, 1] }}
                    transition={{
                        opacity: { duration: 1 },
                        x: { duration: 1 },
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                        scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="absolute left-[2%] top-[35%] -translate-y-1/2 hidden xl:block w-72 z-10"
                >
                    <img
                        src={asset1}
                        alt="Girl learning"
                        className="w-full h-auto object-contain drop-shadow-2xl scale-x-[-1]"
                        style={{
                            mixBlendMode: 'screen',
                            filter: 'brightness(1.5) contrast(1.1) saturate(0.9)',
                        }}
                    />
                </motion.div>

                {/* Desktop Images - Right (Boy studying) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0, y: [0, 12, 0], rotate: [0, -2, 0], scale: [1, 1.05, 1] }}
                    transition={{
                        opacity: { duration: 1 },
                        x: { duration: 1 },
                        y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                        rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                        scale: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                    }}
                    className="absolute right-[2%] top-[35%] -translate-y-1/2 hidden xl:block w-80 z-10"
                >
                    <img
                        src={asset2}
                        alt="Boy learning"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        style={{
                            mixBlendMode: 'screen',
                            filter: 'brightness(1.5) contrast(1.1) saturate(0.9)',
                        }}
                    />
                </motion.div>


                {/* Main Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="space-y-8 max-w-4xl mx-auto mt-10 relative z-30"
                >
                    <h1 className="text-4xl lg:text-7xl font-black font-heading leading-[1.1] tracking-tight">
                        <div className="overflow-hidden">
                            <motion.span
                                variants={{
                                    hidden: { y: 100, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
                                }}
                                className="block mb-2 translate-y-full"
                            >
                                Learn a New Skill
                            </motion.span>
                        </div>
                        <div className="overflow-hidden">
                            <motion.span
                                variants={{
                                    hidden: { y: 100, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] } }
                                }}
                                className="block text-[#FFE700]"
                            >
                                Everyday, Anytime, and Anywhere.
                            </motion.span>
                        </div>
                    </h1>

                    <motion.div
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
                        }}
                        className="relative max-w-2xl mx-auto pt-6"
                    >
                        <div className="bg-white rounded-full p-2 flex items-center shadow-2xl">
                            <Search className="text-gray-400 ml-4 w-6 h-6" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        if (query.trim()) showToast(`🔍 Searching for "${query}"...`, 'success');
                                        else showToast('Please enter something to search!', 'error');
                                    }
                                }}
                                placeholder="What do you want to learn today?"
                                className="flex-1 bg-transparent border-none outline-none text-[#1a1a2e] px-4 py-3 placeholder:text-gray-400"
                            />
                            <button
                                onClick={() => {
                                    if (query.trim()) showToast(`🔍 Searching for "${query}"...`, 'success');
                                    else { inputRef.current?.focus(); showToast('Please enter something to search!', 'error'); }
                                }}
                                className="bg-gradient-to-r from-[#411C6B] to-[#1E90FF] hover:opacity-90 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md"
                            >
                                Search
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
}
