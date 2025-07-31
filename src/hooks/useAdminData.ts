'use client';

import { useState, useEffect } from 'react';
import {
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Types
interface Order {
    id: string;
    total: number;
    customerEmail: string;
    status: string;
    createdAt: Date;
    [key: string]: unknown;
}

interface Review {
    id: string;
    rating: number;
    customerName: string;
    comment: string;
    createdAt: Date;
    approved: boolean;
    [key: string]: unknown;
}

interface Product {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
    [key: string]: unknown;
}

interface Analytics {
    id: string;
    visitors: number;
    pageViews: number;
    orders: number;
    revenue: number;
    [key: string]: unknown;
}// Hook pour récupérer les statistiques générales
export const useAdminStats = () => {
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalRevenue: 0,
        totalUsers: 0,
        totalReviews: 0,
        loading: true,
        error: null as string | null
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Récupérer le nombre de commandes
                const ordersQuery = query(collection(db, 'orders'));
                const ordersSnap = await getDocs(ordersQuery);
                const orders = ordersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));

                // Calculer le chiffre d'affaires total
                const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);

                // Récupérer le nombre d'utilisateurs
                const usersQuery = query(collection(db, 'users'));
                const usersSnap = await getDocs(usersQuery);

                // Récupérer le nombre d'avis
                const reviewsQuery = query(collection(db, 'reviews'));
                const reviewsSnap = await getDocs(reviewsQuery);

                setStats({
                    totalOrders: ordersSnap.size,
                    totalRevenue,
                    totalUsers: usersSnap.size,
                    totalReviews: reviewsSnap.size,
                    loading: false,
                    error: null
                });
            } catch (error) {
                console.error('Erreur lors du chargement des statistiques:', error);
                setStats(prev => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error.message : 'Erreur inconnue'
                }));
            }
        };

        fetchStats();
    }, []);

    return stats;
};

// Hook pour récupérer les commandes récentes
export const useRecentOrders = (limitCount = 5) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersQuery = query(
                    collection(db, 'orders'),
                    orderBy('createdAt', 'desc'),
                    limit(limitCount)
                );

                const ordersSnap = await getDocs(ordersQuery);
                const ordersData = ordersSnap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt?.toDate?.() || new Date()
                } as Order));

                setOrders(ordersData);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors du chargement des commandes:', error);
                setError(error instanceof Error ? error.message : 'Erreur inconnue');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [limitCount]);

    return { orders, loading, error };
};

// Hook pour récupérer les avis récents
export const useRecentReviews = (limitCount = 5) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsQuery = query(
                    collection(db, 'reviews'),
                    orderBy('createdAt', 'desc'),
                    limit(limitCount)
                );

                const reviewsSnap = await getDocs(reviewsQuery);
                const reviewsData = reviewsSnap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt?.toDate?.() || new Date()
                } as Review));

                setReviews(reviewsData);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors du chargement des avis:', error);
                setError(error instanceof Error ? error.message : 'Erreur inconnue');
                setLoading(false);
            }
        };

        fetchReviews();
    }, [limitCount]);

    return { reviews, loading, error };
};

// Hook pour récupérer les analytics
export const useAnalytics = () => {
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const analyticsDoc = await getDoc(doc(db, 'analytics', 'daily-stats'));

                if (analyticsDoc.exists()) {
                    setAnalytics({
                        id: analyticsDoc.id,
                        ...analyticsDoc.data()
                    } as Analytics);
                }

                setLoading(false);
            } catch (error) {
                console.error('Erreur lors du chargement des analytics:', error);
                setError(error instanceof Error ? error.message : 'Erreur inconnue');
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    return { analytics, loading, error };
};

// Hook pour récupérer les produits
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsQuery = query(collection(db, 'products'));
                const productsSnap = await getDocs(productsQuery);
                const productsData = productsSnap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Product));

                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors du chargement des produits:', error);
                setError(error instanceof Error ? error.message : 'Erreur inconnue');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};
