import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        {/* Undoschool Logo */}
                        <span className="font-heading font-black text-3xl tracking-tight select-none">
                            <span className="text-[#1a1a2e]">Undo</span><span className="text-[#1E90FF]">school</span>
                        </span>
                        <p className="text-textMuted max-w-sm font-medium">
                            Empowering the next generation with interactive, engaging, and personalized learning experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-textMain mb-4">Quick Links</h4>
                        <ul className="space-y-3 font-medium text-textMuted">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Teachers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-textMain mb-4">Legal</h4>
                        <ul className="space-y-3 font-medium text-textMuted">
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center font-medium text-textMuted text-sm">
                    <p>&copy; {new Date().getFullYear()} UndoSchool. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
