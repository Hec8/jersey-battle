'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star, Clock } from 'lucide-react';

interface PromotionalPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const PromotionalPopup: React.FC<PromotionalPopupProps> = ({ isOpen, onClose }) => {
    const [timeLeft, setTimeLeft] = useState(3600); // 1 heure en secondes

    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const offers = [
        {
            jersey: 'Maillot Mbappé #10',
            originalPrice: 89.99,
            discountPrice: 67.49,
            discount: 25,
            image: '/mbappe.jpg',
            club: 'Real Madrid'
        },
        {
            jersey: 'Maillot Yamal #10',
            originalPrice: 84.99,
            discountPrice: 63.74,
            discount: 25,
            image: '/lamine.jpg',
            club: 'FC Barcelone'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        {/* Popup Content */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header avec countdown */}
                            <div className="relative p-6 text-center border-b border-white/20">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                                    aria-label="Fermer la popup"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="flex items-center justify-center mb-4">
                                    <Clock className="w-8 h-8 text-yellow-400 mr-3" />
                                    <h2 className="text-3xl font-bold text-white">
                                        OFFRE LIMITÉE
                                    </h2>
                                </div>

                                <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block font-mono text-xl">
                                    {formatTime(timeLeft)}
                                </div>

                                <p className="text-white/90 mt-2 text-lg">
                                    ⚡ <strong>-25%</strong> sur les maillots Mbappé & Yamal !
                                </p>
                            </div>

                            {/* Contenu principal */}
                            <div className="p-6">
                                {/* Badges promotionnels */}
                                <div className="flex justify-center space-x-4 mb-6">
                                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                                        🚚 LIVRAISON GRATUITE
                                    </div>
                                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        ✅ AUTHENTICITÉ GARANTIE
                                    </div>
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        🔥 STOCK LIMITÉ
                                    </div>
                                </div>

                                {/* Produits en promotion */}
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {offers.map((offer, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={offer.image}
                                                    alt={offer.jersey}
                                                    className="w-full h-32 object-cover rounded-lg mb-3"
                                                />
                                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                                    -{offer.discount}%
                                                </div>
                                            </div>

                                            <h3 className="text-white font-bold text-lg mb-1">{offer.jersey}</h3>
                                            <p className="text-white/70 text-sm mb-2">{offer.club}</p>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-white/50 line-through text-sm">
                                                        {offer.originalPrice}€
                                                    </span>
                                                    <span className="text-yellow-400 font-bold text-xl ml-2">
                                                        {offer.discountPrice}€
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span className="text-white text-sm ml-1">4.9</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Call-to-action */}
                                <div className="text-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold px-8 py-4 rounded-full text-lg mb-4 inline-flex items-center hover:shadow-2xl transition-all duration-300"
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-3" />
                                        PROFITER DE L&apos;OFFRE MAINTENANT
                                    </motion.button>

                                    <p className="text-white/70 text-sm">
                                        Code promo automatiquement appliqué • Livraison en 24-48h
                                    </p>

                                    <div className="flex justify-center items-center mt-4 space-x-4 text-xs text-white/60">
                                        <span>✅ Paiement sécurisé SSL</span>
                                        <span>✅ Satisfait ou remboursé 30j</span>
                                        <span>✅ Support client 7j/7</span>
                                    </div>
                                </div>

                                {/* Témoignages express */}
                                <div className="mt-6 bg-black/20 rounded-lg p-4">
                                    <h4 className="text-white font-bold text-center mb-3">Ce que disent nos clients :</h4>
                                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                                        <div className="text-white/80">
                                            ⭐⭐⭐⭐⭐ &quot;Maillot Mbappé reçu en 24h, qualité parfaite !&quot; - <strong>Thomas M.</strong>
                                        </div>
                                        <div className="text-white/80">
                                            ⭐⭐⭐⭐⭐ &quot;Site de confiance, très bon rapport qualité-prix&quot; - <strong>Sarah L.</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PromotionalPopup;
