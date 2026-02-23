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
                <div className="flex gap-3 justify-start lg:justify-center w-max mx-auto px-4">
                    {ages.map((ageObj) => (
                        <button
                            key={ageObj.label}
                            onClick={() => setActiveAge(ageObj.label)}
                            className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 hover:bg-gray-50 transition-all ${activeAge === ageObj.label ? "bg-gray-50 shadow-md scale-105" : "bg-white"
                                } ${ageObj.color} w-16 h-16`}
                        >
                            <span className="text-sm font-bold text-textMain leading-tight">{ageObj.label}</span>
                            <span className="text-xs text-textMain">Years</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
