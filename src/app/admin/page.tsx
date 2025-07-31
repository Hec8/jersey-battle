'use client';

import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminLogin from '@/components/admin/AdminLogin';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function AdminPage() {
    const [user, loading] = useAuthState(auth);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            // Vérifier si l'utilisateur est autorisé (admin)
            const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];
            setIsAuthorized(adminEmails.includes(user.email || ''));
        }
    }, [user]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <AdminLogin />;
    }

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-red-500 text-6xl mb-4">🚫</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Accès refusé</h1>
                    <p className="text-gray-600 mb-4">
                        Vous n&apos;avez pas les permissions nécessaires pour accéder à cette page.
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        Retour à l&apos;accueil
                    </button>
                </div>
            </div>
        );
    }

    return <AdminDashboard />;
}
