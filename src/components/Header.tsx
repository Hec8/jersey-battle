'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-16 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="hidden sm:inline">Jersey Battle ⚽</span>
                        <span className="sm:hidden">JB ⚽</span>
                    </motion.div>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#comparison" className="text-white hover:text-blue-400 transition-colors">
                            Comparaison
                        </a>
                        <a href="#stats" className="text-white hover:text-blue-400 transition-colors">
                            Statistiques
                        </a>
                        <a href="#reviews" className="text-white hover:text-blue-400 transition-colors">
                            Avis
                        </a>

                        {/* Admin Login/Logout */}
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/admin"
                                    className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1"
                                >
                                    <span>Admin</span>
                                </a>
                                <button
                                    onClick={() => signOut()}
                                    className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
                                >
                                    <LogOut size={16} />
                                    <span>Déconnexion</span>
                                </button>
                            </div>
                        ) : (
                            <a
                                href="/admin"
                                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                            >
                                <User size={16} />
                                <span>Admin</span>
                            </a>
                        )}
                    </nav>

                    {/* Menu Mobile */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu Mobile Dropdown */}
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden mt-4 pb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <nav className="flex flex-col space-y-4">
                            <a href="#comparison" className="text-white hover:text-blue-400 transition-colors">
                                Comparaison
                            </a>
                            <a href="#stats" className="text-white hover:text-blue-400 transition-colors">
                                Statistiques
                            </a>
                            <a href="#reviews" className="text-white hover:text-blue-400 transition-colors">
                                Avis
                            </a>
                            {user ? (
                                <button
                                    onClick={() => signOut()}
                                    className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
                                >
                                    <LogOut size={16} />
                                    <span>Déconnexion</span>
                                </button>
                            ) : (
                                <a href="/admin" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                                    <User size={16} />
                                    <span>Admin</span>
                                </a>
                            )}
                        </nav>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
