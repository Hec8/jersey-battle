'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Clock, Star } from 'lucide-react';

const PromotionalBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState(7200); // 2 heures
    const [currentOffer, setCurrentOffer] = useState(0);

    const offers = [
        {
            text: "🔥 FLASH SALE - 25% sur tous les maillots Mbappé & Yamal",
            cta: "J'EN PROFITE",
            gradient: "from-red-500 to-orange-500"
        },
        {
            text: "⚡ LIVRAISON GRATUITE dès 50€ d'achat",
            cta: "COMMANDER",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            text: "🎯 Nouveaux maillots 2025 disponibles en exclusivité",
            cta: "DÉCOUVRIR",
            gradient: "from-green-500 to-teal-500"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        const offerRotation = setInterval(() => {
            setCurrentOffer((prev) => (prev + 1) % offers.length);
        }, 5000);

        return () => {
            clearInterval(timer);
            clearInterval(offerRotation);
        };
    }, [offers.length]);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`fixed top-0 left-0 right-0 w-full max-w-full z-40 bg-gradient-to-r ${offers[currentOffer].gradient} text-white shadow-lg`}
            >
                <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center justify-between">
                        {/* Contenu principal */}
                        <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                            {/* Indicateur d'urgence */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex items-center bg-white/20 px-2 sm:px-3 py-1 rounded-full shrink-0"
                            >
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                <span className="font-mono text-xs sm:text-sm font-bold">
                                    {formatTime(timeLeft)}
                                </span>
                            </motion.div>

                            {/* Message promotionnel avec rotation */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentOffer}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-1 min-w-0"
                                >
                                    <p className="text-xs sm:text-sm md:text-base font-medium truncate">
                                        {offers[currentOffer].text}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Note de confiance */}
                            <div className="hidden lg:flex items-center space-x-2 text-xs bg-white/10 px-2 py-1 rounded shrink-0">
                                <Star className="w-3 h-3 fill-current" />
                                <span>4.9/5 ⭐ +2000 avis</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
                            {/* Bouton CTA */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-gray-900 px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors flex items-center"
                            >
                                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                <span className="hidden sm:inline">{offers[currentOffer].cta}</span>
                                <span className="sm:hidden">PROMO</span>
                            </motion.button>

                            {/* Bouton fermer */}
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-white/70 hover:text-white transition-colors p-1"
                                aria-label="Fermer la bannière"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Barre de progression pour l'offre */}
                    <div className="mt-2 bg-white/20 rounded-full h-1 overflow-hidden">
                        <motion.div
                            className="bg-white h-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                        />
                    </div>
                </div>

                {/* Effet de particules/étoiles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[
                        { left: 15, top: 25 },
                        { left: 85, top: 45 },
                        { left: 35, top: 75 },
                        { left: 70, top: 15 },
                        { left: 10, top: 85 },
                        { left: 95, top: 35 }
                    ].map((position, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${position.left}%`,
                                top: `${position.top}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PromotionalBanner;
