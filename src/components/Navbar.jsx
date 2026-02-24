import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from './AppProviders';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { openLogin, openRegister } = useModal();

    const navItems = [
        { label: 'How Old Are You?', id: 'age-filters' },
        { label: 'Featured Courses ⭐', id: 'courses' },
        { label: 'Webinar', id: 'webinars' },
        { label: 'Popular Categories', id: 'popular' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 80, // Offset for navbar height
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`w-full z-50 sticky top-0 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200' : 'bg-white border-b border-gray-100/50 shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-8">
                        {/* Undoschool Logo */}
                        <span
                            className="font-heading font-black text-2xl tracking-tight cursor-pointer select-none"
                            onClick={(e) => scrollToSection(e, 'home')}
                        >
                            <span className="text-[#1a1a2e]">Undo</span><span className="text-[#1E90FF]">school</span>
                        </span>

                        <div className="hidden md:flex space-x-6">
                            {navItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative group cursor-pointer"
                                    onClick={(e) => scrollToSection(e, item.id)}
                                >
                                    <span className="text-primary hover:text-accent font-bold text-base transition-colors">{item.label}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-300"></span>
                                </div>
                            ))}
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
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 overflow-y-auto max-h-[80vh]">
                    <div className="flex flex-col space-y-2 py-3 border-b border-gray-100">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={(e) => scrollToSection(e, item.id)}
                                className="text-left px-3 py-2 rounded-lg text-base font-bold text-[#411C6B] hover:bg-gray-50 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 mt-4 pt-2">
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
