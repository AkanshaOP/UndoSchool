import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const notifications = [
    "🎉 Sarah just enrolled in Creative Art & Craft",
    "⭐ David gave 5 stars to Maths Magic",
    "🚀 12 students viewing Coding Basics",
    "🔥 Limited seats left in Public Speaking",
];

export default function LiveNotification() {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cycleNotification = () => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 4000);
            setTimeout(() => setIndex((prev) => (prev + 1) % notifications.length), 5000);
        };

        const interval = setInterval(cycleNotification, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-sm font-bold text-textMain">{notifications[index]}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
