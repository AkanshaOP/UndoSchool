import { Sunrise, Sun, Moon, MoonStar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const times = [
    { id: 'morning', label: 'Morning classes', time: '8am - 12pm', icon: Sunrise, color: 'from-amber-50 to-orange-50', border: 'border-orange-100', iconColor: 'text-orange-400', glow: 'shadow-orange-100' },
    { id: 'afternoon', label: 'Afternoon classes', time: '12pm - 4pm', icon: Sun, color: 'from-yellow-50 to-amber-50', border: 'border-yellow-200', iconColor: 'text-yellow-500', glow: 'shadow-yellow-100' },
    { id: 'evening', label: 'Evening classes', time: '4pm - 8pm', icon: Moon, color: 'from-indigo-50 to-blue-50', border: 'border-indigo-100', iconColor: 'text-indigo-400', glow: 'shadow-indigo-100' },
    { id: 'late', label: 'Late evening classes', time: '8pm - 11pm', icon: MoonStar, color: 'from-purple-50 to-indigo-50', border: 'border-purple-100', iconColor: 'text-purple-500', glow: 'shadow-purple-100' },
];

// Icon animation variants per type
const iconVariants = {
    morning: {
        animate: { rotate: [0, 15, -10, 0], y: [0, -4, 0] },
        transition: { duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 },
    },
    afternoon: {
        animate: { rotate: [0, 360] },
        transition: { duration: 8, ease: 'linear', repeat: Infinity },
    },
    evening: {
        animate: { rotate: [0, -20, 10, 0], scale: [1, 1.15, 1] },
        transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.5 },
    },
    late: {
        animate: { rotate: [0, 15, -10, 0], scale: [1, 1.2, 1], opacity: [1, 0.7, 1] },
        transition: { duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 },
    },
};

// Card entrance animation
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function FilterWithTime() {
    const [active, setActive] = useState(null);

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 w-full mt-16 mb-8">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center space-y-2 mb-10"
            >
                <h2 className="text-4xl font-extrabold text-[#1a1a2e]">Filter with Time</h2>
                <p className="text-gray-500 text-lg font-medium">Choose the perfect time that fits your child's schedule</p>
            </motion.div>

            {/* Time filter cards */}
            <div className="flex gap-4 overflow-x-auto pb-4 w-full justify-start lg:justify-center no-scrollbar">
                {times.map((item, i) => {
                    const IconComp = item.icon;
                    const isActive = active === item.id;
                    const anim = iconVariants[item.id];

                    return (
                        <motion.div
                            key={item.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.03 }}
                            onClick={() => setActive(isActive ? null : item.id)}
                            className={`
                                min-w-[220px] rounded-3xl p-5 border flex justify-between items-end cursor-pointer
                                bg-gradient-to-br ${item.color} ${item.border}
                                transition-all duration-300
                                ${isActive
                                    ? `shadow-xl ${item.glow} ring-2 ring-offset-1 ring-current`
                                    : 'shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-md'}
                            `}
                        >
                            <div>
                                <h4 className={`font-bold text-[#1a1a2e] text-sm ${isActive ? 'text-opacity-100' : ''}`}>
                                    {item.label}
                                </h4>
                                <p className="text-xs text-gray-500 font-medium">{item.time}</p>
                            </div>

                            {/* Animated Icon */}
                            <motion.div
                                animate={anim.animate}
                                transition={anim.transition}
                                className="origin-center"
                            >
                                <IconComp
                                    size={30}
                                    className={`${item.iconColor} stroke-[1.5] ${isActive ? 'drop-shadow-lg' : ''}`}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
