'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const JerseyComparison = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const jerseyData = [
        {
            id: 'mbappe-home',
            player: 'Mbappé',
            club: 'Real Madrid',
            type: 'Domicile',
            image: '/jerseys/White-mbappe-10.jpg',
            price: '€89.95',
            originalPrice: '€109.95',
            colors: ['Blanc', 'Or'],
            material: 'Dri-FIT ADV',
            features: [
                'Technologie Nike Dri-FIT',
                'Coupe athlétique',
                'Badge brodé',
                'Flocage officiel Mbappé 10'
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            rating: 4.8,
            reviews: 1247,
            gradient: 'from-white to-gray-100',
            accent: 'text-blue-600',
            buttonColor: 'bg-white text-black hover:bg-gray-100'
        },
        {
            id: 'yamal-home',
            player: 'Lamine Yamal',
            club: 'FC Barcelone',
            type: 'Domicile',
            image: '/jerseys/Lamine-Yamal-10.jpg',
            price: '€84.95',
            originalPrice: '€99.95',
            colors: ['Bleu', 'Rouge'],
            material: 'Dri-FIT Stadium',
            features: [
                'Technologie Nike Dri-FIT',
                'Design rayé classique',
                'Badge tissé',
                'Flocage officiel Yamal 10'
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            rating: 4.9,
            reviews: 892,
            gradient: 'from-blue-600 to-red-600',
            accent: 'text-yellow-400',
            buttonColor: 'bg-gradient-to-r from-blue-600 to-red-600 text-white hover:opacity-90'
        },
        {
            id: 'mbappe-away',
            player: 'Mbappé',
            club: 'Real Madrid',
            type: 'Extérieur',
            image: '/jerseys/maillot-real-madrid-exterieur.jpg',
            price: '€89.95',
            originalPrice: '€109.95',
            colors: ['Noir', 'Rose'],
            material: 'Dri-FIT ADV',
            features: [
                'Design moderne et audacieux',
                'Technologie thermorégulatrice',
                'Finitions premium',
                'Édition limitée 2024-25'
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            rating: 4.7,
            reviews: 634,
            gradient: 'from-black to-pink-600',
            accent: 'text-pink-400',
            buttonColor: 'bg-black text-white hover:bg-gray-800'
        },
        {
            id: 'yamal-away',
            player: 'Lamine Yamal',
            club: 'FC Barcelone',
            type: 'Extérieur',
            image: '/jerseys/lamineyamal.jpg',
            price: '€84.95',
            originalPrice: '€99.95',
            colors: ['Jaune', 'Vert'],
            material: 'Dri-FIT Stadium',
            features: [
                'Couleurs vibrantes uniques',
                'Respirabilité optimale',
                'Design écologique',
                'Collection spéciale jeunes talents'
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            rating: 4.6,
            reviews: 451,
            gradient: 'from-yellow-400 to-green-500',
            accent: 'text-green-600',
            buttonColor: 'bg-yellow-400 text-black hover:bg-yellow-300'
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % jerseyData.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + jerseyData.length) % jerseyData.length);
    };

    const currentJersey = jerseyData[activeSlide];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black">
            <div className="container mx-auto px-4">
                {/* Titre */}
                <motion.div
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                            COLLECTION MAILLOTS 2025
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                        Découvrez les maillots officiels les plus convoités de la saison
                    </p>
                </motion.div>

                {/* Slider principal */}
                <div className="relative max-w-6xl mx-auto">
                    <motion.div
                        className="bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl"
                        key={activeSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                            {/* Image du maillot */}
                            <div className="relative order-1 lg:order-none">
                                <motion.div
                                    className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden"
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Image réelle du maillot */}
                                    <div className="relative w-full h-full p-4">
                                        <Image
                                            src={currentJersey.image}
                                            alt={`Maillot ${currentJersey.player} ${currentJersey.club} ${currentJersey.type}`}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>

                                    {/* Overlay avec informations */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-6 left-6 right-6 text-white">
                                            <div className="text-center mb-4">
                                                <div className="text-4xl font-black mb-1">10</div>
                                                <div className="text-lg font-bold">{currentJersey.player.toUpperCase()}</div>
                                                <div className="text-sm text-gray-300">{currentJersey.club.toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge de réduction */}
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        -18%
                                    </div>

                                    {/* Badge du type */}
                                    <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        {currentJersey.type}
                                    </div>
                                </motion.div>

                                {/* Navigation du slider */}
                                <div className="flex justify-center items-center mt-8 space-x-4">
                                    <button
                                        onClick={prevSlide}
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                                        aria-label="Maillot précédent"
                                        title="Voir le maillot précédent"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>

                                    <div className="flex space-x-2">
                                        {jerseyData.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-colors ${index === activeSlide ? 'bg-white' : 'bg-white/30'
                                                    }`}
                                                aria-label={`Aller au maillot ${index + 1}`}
                                                title={`Maillot ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                                        aria-label="Maillot suivant"
                                        title="Voir le maillot suivant"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Détails du maillot */}
                            <div className="text-white">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-black mb-2">
                                        Maillot {currentJersey.type} {currentJersey.club}
                                    </h3>
                                    <p className={`text-xl font-bold ${currentJersey.accent}`}>
                                        {currentJersey.player} #10
                                    </p>
                                </div>

                                {/* Prix */}
                                <div className="mb-6">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-3xl font-black text-green-400">{currentJersey.price}</span>
                                        <span className="text-lg text-gray-400 line-through">{currentJersey.originalPrice}</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    <div className="flex items-center space-x-1 mr-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(currentJersey.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-400'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-white font-bold">{currentJersey.rating}</span>
                                    <span className="text-gray-400 ml-2">({currentJersey.reviews} avis)</span>
                                </div>

                                {/* Caractéristiques */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold mb-3">Caractéristiques :</h4>
                                    <ul className="space-y-2">
                                        {currentJersey.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tailles */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-bold mb-3">Tailles disponibles :</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {currentJersey.sizes.map((size) => (
                                            <button
                                                key={size}
                                                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold transition-colors"
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Boutons d'achat */}
                                <div className="space-y-4">
                                    <motion.button
                                        className={`w-full ${currentJersey.buttonColor} px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        <span>Acheter Maintenant</span>
                                    </motion.button>

                                    <button className="w-full border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                                        Ajouter au Panier
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Comparaison rapide */}
                <motion.div
                    className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">🏃‍♂️ Pour les Fans de Vitesse</h3>
                        <p className="text-gray-300 mb-4">
                            Le maillot de Mbappé représente l&apos;élégance et la puissance du Real Madrid.
                            Parfait pour ceux qui admirent la vitesse et l&apos;efficacité.
                        </p>
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            Voir Collection Mbappé
                        </button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">✨ Pour les Fans de Magie</h3>
                        <p className="text-gray-300 mb-4">
                            Le maillot de Yamal incarne la créativité et l&apos;avenir du FC Barcelone.
                            Idéal pour ceux qui croient au talent précoce.
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                            Voir Collection Yamal
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JerseyComparison;
