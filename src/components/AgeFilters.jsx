import { motion } from 'framer-motion';

export default function AgeFilters({ activeAge, setActiveAge }) {
    const ages = [
        { label: '1-2', color: 'border-yellow-400' },
        { label: '2-3', color: 'border-yellow-400' },
        { label: '3-4', color: 'border-yellow-400' },
        { label: '4-5', color: 'border-orange-400' },
        { label: '5-6', color: 'border-orange-400' },
        { label: '6-7', color: 'border-orange-400' },
        { label: '7-8', color: 'border-pink-400' },
        { label: '8-9', color: 'border-pink-400' },
        { label: '9-10', color: 'border-pink-400' },
        { label: '10-11', color: 'border-purple-400' },
        { label: '11-12', color: 'border-purple-400' },
        { label: '12-13', color: 'border-green-400' },
        { label: '13-14', color: 'border-green-400' },
        { label: '14-15', color: 'border-green-400' },
        { label: '15-16', color: 'border-teal-400' },
        { label: '16-17', color: 'border-blue-400' },
        { label: '17-18', color: 'border-blue-400' },
        { label: '18-19', color: 'border-blue-400' },
        { label: '19-20', color: 'border-blue-400' },
    ];

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 w-full">
            <div className="text-center space-y-2 mb-8">
                <h2 className="text-4xl font-extrabold text-textMain">How Old Are You? 🎯</h2>
                <p className="text-textMuted text-lg font-medium">Pick your age and find the perfect courses just for you! ✨</p>
            </div>

            <div className="w-full overflow-x-auto pb-4 no-scrollbar">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05
                            }
                        }
                    }}
                    className="flex gap-3 justify-start lg:justify-center w-max mx-auto px-4"
                >
                    {ages.map((ageObj, idx) => (
                        <motion.button
                            key={ageObj.label}
                            onClick={() => setActiveAge(ageObj.label)}
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }
                            }}
                            whileHover={{
                                y: 5,
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                y: {
                                    repeat: Infinity,
                                    duration: 3 + Math.random() * 2,
                                    ease: "easeInOut",
                                    delay: idx * 0.1
                                }
                            }}
                            className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 hover:bg-gray-50 transition-colors shadow-sm ${activeAge === ageObj.label ? "bg-white ring-4 ring-offset-2 ring-purple-500/20 shadow-lg !scale-110" : "bg-white"
                                } ${ageObj.color} w-16 h-16 relative z-10`}
                        >
                            <span className="text-sm font-bold text-textMain leading-tight">{ageObj.label}</span>
                            <span className="text-xs text-textMain">Years</span>
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
