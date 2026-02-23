import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShoppingCart, AlertCircle } from 'lucide-react';

// ─── Toast Context ────────────────────────────────────────────────────────────
const ToastContext = createContext(null);
export const useToast = () => useContext(ToastContext);

// ─── Modal Context ────────────────────────────────────────────────────────────
const ModalContext = createContext(null);
export const useModal = () => useContext(ModalContext);

// ─── Toast Component ──────────────────────────────────────────────────────────
function Toast({ toast, onRemove }) {
    const icons = { success: CheckCircle, cart: ShoppingCart, error: AlertCircle };
    const colors = {
        success: 'bg-green-500',
        cart: 'bg-[#411C6B]',
        error: 'bg-red-500',
    };
    const Icon = icons[toast.type] || CheckCircle;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className={`flex items-center gap-3 ${colors[toast.type] || 'bg-gray-800'} text-white px-5 py-3 rounded-2xl shadow-2xl min-w-[260px] max-w-xs`}
        >
            <Icon size={20} className="flex-shrink-0" />
            <p className="text-sm font-semibold flex-1">{toast.message}</p>
            <button onClick={() => onRemove(toast.id)} className="opacity-70 hover:opacity-100">
                <X size={16} />
            </button>
        </motion.div>
    );
}

// ─── Login / Register Modal ───────────────────────────────────────────────────
function AuthModal({ mode, onClose, onSwitch, showToast }) {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }
        onClose();
        showToast(
            mode === 'login' ? '👋 Welcome back!' : '🎉 Account created successfully!',
            'success'
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
            >
                <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors">
                    <X size={22} />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                    <span className="font-black text-3xl tracking-tight">
                        <span className="text-[#1a1a2e]">Undo</span><span className="text-[#1E90FF]">school</span>
                    </span>
                    <h2 className="text-xl font-bold text-[#1a1a2e] mt-3">
                        {mode === 'login' ? 'Welcome back 👋' : 'Create your account 🚀'}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        {mode === 'login' ? 'Log in to continue your learning journey' : 'Join thousands of curious learners today'}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === 'register' && (
                        <div>
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40 focus:border-[#1E90FF] transition-all"
                            />
                        </div>
                    )}
                    <div>
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40 focus:border-[#1E90FF] transition-all"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40 focus:border-[#1E90FF] transition-all"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#411C6B] to-[#1E90FF] text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-shadow mt-2"
                    >
                        {mode === 'login' ? 'Log In' : 'Create Account'}
                    </motion.button>
                </form>

                {/* Switch mode */}
                <p className="text-center text-sm text-gray-500 mt-5">
                    {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                    <button onClick={onSwitch} className="text-[#1E90FF] font-bold hover:underline">
                        {mode === 'login' ? 'Register free' : 'Log in'}
                    </button>
                </p>
            </motion.div>
        </motion.div>
    );
}

// ─── Enroll / Join Confirmation Modal ─────────────────────────────────────────
function EnrollModal({ course, mode, onClose, showToast }) {
    const handleConfirm = () => {
        onClose();
        showToast(
            mode === 'join'
                ? `🎙️ Joined "${course?.title?.slice(0, 30)}..." webinar!`
                : `🛒 "${course?.title?.slice(0, 30)}..." added to cart!`,
            mode === 'join' ? 'success' : 'cart'
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 relative text-center"
            >
                <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700">
                    <X size={22} />
                </button>

                <div className="text-5xl mb-4">{mode === 'join' ? '🎙️' : '🛒'}</div>
                <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">
                    {mode === 'join' ? 'Join this Webinar?' : 'Add to Cart?'}
                </h2>
                <p className="text-gray-500 text-sm mb-1 line-clamp-2">{course?.title}</p>
                {course?.price && (
                    <p className="text-[#1E90FF] font-black text-2xl my-3">{course.price}</p>
                )}

                <div className="flex gap-3 mt-5">
                    <button onClick={onClose} className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleConfirm}
                        className="flex-1 bg-gradient-to-r from-[#411C6B] to-[#1E90FF] text-white py-2.5 rounded-xl font-bold text-sm shadow-md"
                    >
                        {mode === 'join' ? 'Join Now' : 'Add to Cart'}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Provider — wraps the whole app ──────────────────────────────────────────
export default function AppProviders({ children }) {
    const [toasts, setToasts] = useState([]);
    const [authModal, setAuthModal] = useState(null); // 'login' | 'register' | null
    const [enrollModal, setEnrollModal] = useState(null); // { course, mode } | null

    const showToast = useCallback((message, type = 'success') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const openLogin = useCallback(() => setAuthModal('login'), []);
    const openRegister = useCallback(() => setAuthModal('register'), []);
    const closeAuth = useCallback(() => setAuthModal(null), []);
    const switchAuth = useCallback(() =>
        setAuthModal((m) => (m === 'login' ? 'register' : 'login')), []);

    const openEnroll = useCallback((course, mode = 'enroll') => {
        setEnrollModal({ course, mode });
    }, []);
    const closeEnroll = useCallback(() => setEnrollModal(null), []);

    return (
        <ToastContext.Provider value={showToast}>
            <ModalContext.Provider value={{ openLogin, openRegister, openEnroll }}>
                {children}

                {/* Auth Modal */}
                <AnimatePresence>
                    {authModal && (
                        <AuthModal
                            mode={authModal}
                            onClose={closeAuth}
                            onSwitch={switchAuth}
                            showToast={showToast}
                        />
                    )}
                </AnimatePresence>

                {/* Enroll Modal */}
                <AnimatePresence>
                    {enrollModal && (
                        <EnrollModal
                            course={enrollModal.course}
                            mode={enrollModal.mode}
                            onClose={closeEnroll}
                            showToast={showToast}
                        />
                    )}
                </AnimatePresence>

                {/* Toast Stack */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-[1000]">
                    <AnimatePresence>
                        {toasts.map((t) => (
                            <Toast key={t.id} toast={t} onRemove={removeToast} />
                        ))}
                    </AnimatePresence>
                </div>
            </ModalContext.Provider>
        </ToastContext.Provider>
    );
}
