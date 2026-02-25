import { useState } from 'react';

export default function PopularCategories() {
    const [active, setActive] = useState('Coding');

    const categories = [
        { id: 'Coding', label: 'Coding', emoji: '💻', activeColor: 'from-orange-400 to-orange-500' },
        { id: 'Public speaking', label: 'Public\nspeaking', emoji: '🎙️', activeColor: 'from-green-400 to-green-500' },
        { id: 'Chess', label: 'Chess', emoji: '♟️', activeColor: 'from-gray-700 to-gray-900' },
        { id: 'Home work help', label: 'Home\nwork help', emoji: '📚', activeColor: 'from-blue-400 to-blue-500' },
        { id: 'App building', label: 'App\nbuilding', emoji: '📱', activeColor: 'from-indigo-400 to-indigo-500' },
    ];

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 w-full">
            <div className="text-center space-y-2 mb-6 pb-2 px-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-textMain">Popular Categories</h2>
                <p className="text-textMuted text-sm md:text-lg font-medium">Pick what you love most! ✨</p>
            </div>

            {/* Outer wrapper scrolls horizontally; overflow-y: visible so emojis don't get clipped */}
            <div className="w-full" style={{ overflowX: 'auto', overflowY: 'visible', paddingBottom: '10px' }}>
                <div className="flex gap-4 md:gap-8 w-max lg:w-full justify-start lg:justify-center items-end"
                    style={{ paddingTop: '56px', paddingBottom: '8px' }}>
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            className={`relative flex items-end p-5 rounded-3xl cursor-pointer transition-all duration-300 min-w-[170px] h-28 flex-shrink-0 ${active === cat.id
                                ? 'bg-gradient-to-r ' + cat.activeColor + ' text-white shadow-[0_10px_30px_rgb(249,115,22,0.3)] scale-105'
                                : 'bg-white text-textMain shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1'
                                }`}
                        >
                            <span className="text-[70px] absolute -top-[54px] left-1/2 -translate-x-1/2 drop-shadow-xl select-none emoji-3d text-center leading-none">{cat.emoji}</span>
                            <span className="font-bold whitespace-pre-line leading-tight w-full">{cat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
