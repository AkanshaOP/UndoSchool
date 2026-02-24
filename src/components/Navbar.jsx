import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from './AppProviders';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { openLogin, openRegister } = useModal();

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const navHeight = 80; // h-20
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-8">
                        {/* Undoschool Logo */}
                        <span className="font-heading font-black text-2xl tracking-tight cursor-pointer select-none">
                            <span className="text-[#1a1a2e]">Undo</span><span className="text-[#1E90FF]">school</span>
                        </span>

                        <div className="hidden md:flex items-center space-x-4">
                            <div className="flex items-center space-x-3 text-sm">
                                    <button onClick={() => scrollToSection('featured-courses')} className="cursor-pointer font-semibold text-gray-700 hover:text-[#1E90FF]">Featured Courses</button>
                                    <div className="text-gray-300">|</div>
                                    <button onClick={() => scrollToSection('new-launches')} className="cursor-pointer font-semibold text-gray-700 hover:text-[#1E90FF]">New Launches <span className="text-yellow-500">⭐</span></button>
                                    <div className="text-gray-300">|</div>
                                    <button onClick={() => scrollToSection('popular-categories')} className="cursor-pointer font-semibold text-gray-700 hover:text-[#1E90FF]">Popular Categories</button>
                                </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={openLogin}
                            className="text-[#1a1a2e] hover:text-[#1E90FF] font-bold px-4 py-2 transition-colors"
                        >
                            Login
                        </button>
                        <button
                            onClick={openRegister}
                            className="bg-gradient-to-r from-[#411C6B] to-[#1E90FF] hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md transform hover:-translate-y-0.5"
                        >
                            Register for free
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#1a1a2e] hover:text-[#1E90FF] transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1">
                    <div className="flex flex-wrap gap-3 items-center">
                        <button onClick={() => { setIsOpen(false); scrollToSection('featured-courses'); }} className="px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-[#1E90FF] cursor-pointer">Featured Courses</button>
                        <div className="text-gray-300">|</div>
                        <button onClick={() => { setIsOpen(false); scrollToSection('new-launches'); }} className="px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-[#1E90FF] cursor-pointer">New Launches <span className="text-yellow-500">⭐</span></button>
                        <div className="text-gray-300">|</div>
                        <button onClick={() => { setIsOpen(false); scrollToSection('popular-categories'); }} className="px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-[#1E90FF] cursor-pointer">Popular Categories</button>
                    </div>
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                        <button
                            onClick={() => { setIsOpen(false); openLogin(); }}
                            className="w-full text-center py-3 rounded-xl font-bold text-[#1a1a2e] border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => { setIsOpen(false); openRegister(); }}
                            className="w-full text-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#411C6B] to-[#1E90FF] shadow-md"
                        >
                            Register for free
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
