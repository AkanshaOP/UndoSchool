import { useState, useRef, useEffect } from 'react';

export default function PopularCategories({ sectionId }) {
    const [active, setActive] = useState('Coding');

    const categories = [
        { id: 'Coding', label: 'Coding', emoji: '💻', activeColor: 'from-orange-400 to-orange-500' },
        { id: 'Public speaking', label: 'Public\nspeaking', emoji: '🎙️' },
        { id: 'Chess', label: 'Chess', emoji: '♟️' },
        { id: 'Home work help', label: 'Home\nwork help', emoji: '📚' },
        { id: 'App building', label: 'App\nbuilding', emoji: '📱' },
    ];

    const scrollerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const check = () => {
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
        };
        check();
        el.addEventListener('scroll', check);
        window.addEventListener('resize', check);
        return () => {
            el.removeEventListener('scroll', check);
            window.removeEventListener('resize', check);
        };
    }, []);

    const scrollByOffset = (offset) => {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollBy({ left: offset, behavior: 'smooth' });
    };

    return (
        <div id={sectionId || undefined} className="flex flex-col items-center max-w-7xl mx-auto px-4 w-full">
            <div className="text-center space-y-2 mb-6 pb-2">
                <h2 className="text-4xl font-extrabold text-textMain">Popular Categories</h2>
                <p className="text-textMuted text-lg font-medium">Pick what you love most! These categories have everything you need to learn something awesome ✨</p>
            </div>

            {/* Outer wrapper scrolls horizontally; overflow-y: visible so emojis don't get clipped */}
            <div className="w-full relative">
                <div ref={scrollerRef} className="w-full" style={{ overflowX: 'auto', overflowY: 'visible', paddingBottom: '10px' }}>
                    <div className="flex gap-4 w-max lg:w-full justify-start lg:justify-center items-end" style={{ paddingTop: '56px', paddingBottom: '8px' }}>
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => setActive(cat.id)}
                                className={`relative flex items-end p-5 rounded-3xl cursor-pointer transition-all duration-300 min-w-[170px] h-28 flex-shrink-0 ${active === cat.id
                                    ? 'bg-gradient-to-r ' + (cat.activeColor || 'from-indigo-500 to-indigo-600') + ' text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] scale-105'
                                    : 'bg-white text-textMain shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1'
                                    }`}
                            >
                                <span className="text-[70px] absolute -top-[54px] left-1/2 -translate-x-1/2 drop-shadow-xl select-none emoji-3d text-center leading-none">{cat.emoji}</span>
                                <span className="font-bold whitespace-pre-line leading-tight w-full">{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left / Right arrow controls */}
                <button
                    aria-label="Scroll left"
                    onClick={() => scrollByOffset(-300)}
                    className={`hidden md:flex items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 transition ${canScrollLeft ? '' : 'opacity-40 pointer-events-none'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>

                <button
                    aria-label="Scroll right"
                    onClick={() => scrollByOffset(300)}
                    className={`hidden md:flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 transition ${canScrollRight ? '' : 'opacity-40 pointer-events-none'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
