'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Flame, Gift } from 'lucide-react';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        // Afficher le popup après 5 secondes
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Compte à rebours
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    // Reset le compteur
                    return { hours: 23, minutes: 59, seconds: 59 };
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closePopup}
                >
                    <motion.div
                        className="bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-3xl p-8 max-w-lg w-full relative overflow-hidden shadow-2xl"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 left-4 text-6xl">⚽</div>
                            <div className="absolute top-12 right-8 text-4xl">🏆</div>
                            <div className="absolute bottom-8 left-8 text-5xl">⭐</div>
                            <div className="absolute bottom-4 right-4 text-3xl">🔥</div>
                        </div>

                        {/* Bouton fermer */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors z-10"
                            title="Fermer la popup"
                            aria-label="Fermer la popup de promotion"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <div className="relative z-10 text-center text-white">
                            {/* Badge offre spéciale */}
                            <motion.div
                                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full mb-6"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Flame className="w-5 h-5 text-yellow-300" />
                                <span className="font-bold text-sm">OFFRE FLASH</span>
                                <Flame className="w-5 h-5 text-yellow-300" />
                            </motion.div>

                            {/* Titre */}
                            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                                🎯 PROMO EXCEPTIONNELLE
                            </h2>

                            {/* Réduction */}
                            <div className="mb-6">
                                <div className="text-6xl md:text-7xl font-black mb-2">
                                    -25%
                                </div>
                                <p className="text-xl font-bold">
                                    Sur tous les maillots Mbappé & Yamal !
                                </p>
                            </div>

                            {/* Compte à rebours */}
                            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-6">
                                <div className="flex items-center justify-center space-x-2 mb-4">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-bold">Offre limitée :</span>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-black bg-white/20 rounded-lg py-2">
                                            {timeLeft.hours.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-xs mt-1">Heures</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black bg-white/20 rounded-lg py-2">
                                            {timeLeft.minutes.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-xs mt-1">Minutes</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black bg-white/20 rounded-lg py-2">
                                            {timeLeft.seconds.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-xs mt-1">Secondes</div>
                                    </div>
                                </div>
                            </div>

                            {/* Code promo */}
                            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 mb-6">
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <Gift className="w-5 h-5" />
                                    <span className="font-bold">Code promo :</span>
                                </div>
                                <div className="bg-white text-black px-6 py-3 rounded-lg font-black text-xl tracking-wider">
                                    JERSEY25
                                </div>
                                <p className="text-sm mt-2 opacity-90">
                                    À utiliser lors de votre commande
                                </p>
                            </div>

                            {/* Boutons d'action */}
                            <div className="space-y-3">
                                <motion.button
                                    className="w-full bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    🛒 Profiter de l&apos;offre maintenant !
                                </motion.button>

                                <button
                                    onClick={closePopup}
                                    className="w-full text-white/80 hover:text-white text-sm transition-colors"
                                >
                                    Non merci, je continue ma visite
                                </button>
                            </div>

                            {/* Conditions */}
                            <p className="text-xs opacity-75 mt-4">
                                * Offre valable uniquement aujourd&apos;hui. Non cumulable avec d&apos;autres promotions.
                                Livraison gratuite à partir de 75€.
                            </p>
                        </div>

                        {/* Effet de brillance */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            style={{ transform: 'skewX(-20deg)' }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromoPopup;
