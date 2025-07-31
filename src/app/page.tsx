'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';
import PromotionalBanner from '@/components/PromotionalBanner';
import PromotionalPopup from '@/components/PromotionalPopup';

// Chargement dynamique pour optimiser les performances
const DynamicPlayerComparison = dynamic(() => import('@/components/PlayerComparison'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const DynamicJerseyComparison = dynamic(() => import('@/components/JerseyComparison'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const DynamicStatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const DynamicReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Afficher la popup après 3 secondes
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Bannière promotionnelle fixe */}
      <PromotionalBanner />

      {/* Popup promotionnelle */}
      <PromotionalPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* Contenu principal avec marge pour la bannière et header */}
      <div className="pt-32 w-full">
        <Header />

        <main className="min-h-screen w-full">
          {/* Section Hero */}
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>

          {/* Section Comparaison des Joueurs */}
          <section id="comparison" className="py-20">
            <Suspense fallback={<LoadingSpinner />}>
              <DynamicPlayerComparison />
            </Suspense>
          </section>

          {/* Section Comparaison des Maillots */}
          <section className="py-20 bg-gray-50">
            <Suspense fallback={<LoadingSpinner />}>
              <DynamicJerseyComparison />
            </Suspense>
          </section>

          {/* Section Statistiques */}
          <section id="stats" className="py-20">
            <Suspense fallback={<LoadingSpinner />}>
              <DynamicStatsSection />
            </Suspense>
          </section>

          {/* Section Avis et Témoignages */}
          <section id="reviews" className="py-20 bg-gray-50">
            <Suspense fallback={<LoadingSpinner />}>
              <DynamicReviewsSection />
            </Suspense>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
