'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle, Flag } from 'lucide-react';

interface Review {
    id: number;
    name: string;
    location: string;
    rating: number;
    date: string;
    verified: boolean;
    comment: string;
    likes: number;
    helpful: boolean;
    avatar: string;
}

interface ReviewData {
    mbappe: Review[];
    yamal: Review[];
}

interface RatingData {
    mbappe: number;
    yamal: number;
}

type PlayerTab = 'mbappe' | 'yamal';

const ReviewsSection = () => {
    const [activeTab, setActiveTab] = useState<PlayerTab>('mbappe');

    const reviews: ReviewData = {
        mbappe: [
            {
                id: 1,
                name: 'Thomas M.',
                location: 'Paris, France',
                rating: 5,
                date: '15 Jan 2025',
                verified: true,
                comment: 'Qualité exceptionnelle ! Le maillot de Mbappé est parfait, la coupe est idéale et les finitions sont premium. Mon fils de 12 ans est ravi !',
                likes: 24,
                helpful: true,
                avatar: '👨'
            },
            {
                id: 2,
                name: 'Maria S.',
                location: 'Madrid, Espagne',
                rating: 5,
                date: '12 Jan 2025',
                verified: true,
                comment: 'Livraison rapide et maillot authentique. Les couleurs du Real Madrid sont magnifiques et le flocage Mbappé 10 est parfait.',
                likes: 18,
                helpful: true,
                avatar: '👩'
            },
            {
                id: 3,
                name: 'Ahmed K.',
                location: 'Casablanca, Maroc',
                rating: 4,
                date: '10 Jan 2025',
                verified: true,
                comment: 'Très bonne qualité, juste un peu cher mais ça vaut le coup pour un maillot officiel. Mon frère l\'adore !',
                likes: 12,
                helpful: false,
                avatar: '👨'
            },
            {
                id: 4,
                name: 'Sophie L.',
                location: 'Lyon, France',
                rating: 5,
                date: '8 Jan 2025',
                verified: true,
                comment: 'Parfait pour offrir ! Le packaging était soigné et la qualité au rendez-vous. Mbappé au Real, c\'est historique !',
                likes: 31,
                helpful: true,
                avatar: '👩'
            }
        ],
        yamal: [
            {
                id: 5,
                name: 'Carlos R.',
                location: 'Barcelone, Espagne',
                rating: 5,
                date: '14 Jan 2025',
                verified: true,
                comment: 'Incroyable ! Le maillot de notre petit prince Yamal est magnifique. Les rayures du Barça sont parfaites et la qualité est top.',
                likes: 28,
                helpful: true,
                avatar: '👨'
            },
            {
                id: 6,
                name: 'Elena M.',
                location: 'Valencia, Espagne',
                rating: 5,
                date: '11 Jan 2025',
                verified: true,
                comment: 'Mon fils de 10 ans ne quitte plus son maillot Yamal ! C\'est son idole et la qualité est vraiment excellente.',
                likes: 22,
                helpful: true,
                avatar: '👩'
            },
            {
                id: 7,
                name: 'Pierre D.',
                location: 'Toulouse, France',
                rating: 4,
                date: '9 Jan 2025',
                verified: true,
                comment: 'Très beau maillot, Yamal représente l\'avenir du football. Petit bémol sur le délai de livraison mais sinon parfait.',
                likes: 15,
                helpful: false,
                avatar: '👨'
            },
            {
                id: 8,
                name: 'Fatima B.',
                location: 'Rabat, Maroc',
                rating: 5,
                date: '7 Jan 2025',
                verified: true,
                comment: 'Maillot authentique et de très belle qualité. Yamal est un phénomène et porter son maillot, c\'est magique !',
                likes: 19,
                helpful: true,
                avatar: '👩'
            }
        ]
    };

    const averageRatings: RatingData = {
        mbappe: 4.8,
        yamal: 4.9
    };

    const totalReviews: RatingData = {
        mbappe: 1247,
        yamal: 892
    };

    return (
        <section id="reviews" className="py-20 bg-gradient-to-br from-gray-900 to-black">
            <div className="container mx-auto px-4">
                {/* Titre */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            AVIS DES FANS
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez ce que pensent les vrais supporters de nos maillots
                    </p>
                </motion.div>

                {/* Tabs de sélection */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 inline-flex">
                        <button
                            onClick={() => setActiveTab('mbappe')}
                            className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'mbappe'
                                ? 'bg-white text-black shadow-lg'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            Maillot Mbappé
                        </button>
                        <button
                            onClick={() => setActiveTab('yamal')}
                            className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'yamal'
                                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            Maillot Yamal
                        </button>
                    </div>
                </div>

                {/* Résumé des notes */}
                <motion.div
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="text-center">
                            <div className="text-5xl font-black text-yellow-400 mb-2">
                                {averageRatings[activeTab]}
                            </div>
                            <div className="flex justify-center items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${i < Math.floor(averageRatings[activeTab])
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-300">Note moyenne</p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-black text-blue-400 mb-2">
                                {totalReviews[activeTab]}
                            </div>
                            <p className="text-gray-300">Avis vérifiés</p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-black text-green-400 mb-2">
                                96%
                            </div>
                            <p className="text-gray-300">Recommandent</p>
                        </div>
                    </div>
                </motion.div>

                {/* Liste des avis */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {reviews[activeTab].map((review, index) => (
                        <motion.div
                            key={review.id}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Header de l'avis */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="text-2xl">{review.avatar}</div>
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-bold text-white">{review.name}</h4>
                                            {review.verified && (
                                                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                                    ✓ Vérifié
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm">{review.location}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center space-x-1 mb-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-sm">{review.date}</p>
                                </div>
                            </div>

                            {/* Contenu de l'avis */}
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {review.comment}
                            </p>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className={`flex items-center space-x-2 text-sm transition-colors ${review.helpful
                                            ? 'text-green-400 hover:text-green-300'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <ThumbsUp className="w-4 h-4" />
                                        <span>{review.likes}</span>
                                    </button>

                                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Répondre</span>
                                    </button>
                                </div>

                                <button
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Signaler cet avis"
                                    aria-label="Signaler cet avis comme inapproprié"
                                >
                                    <Flag className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA pour laisser un avis */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Vous avez acheté l&apos;un de ces maillots ?
                        </h3>
                        <p className="text-purple-100 mb-6">
                            Partagez votre expérience et aidez d&apos;autres fans à faire leur choix !
                        </p>
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            ⭐ Laisser un avis
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReviewsSection;
