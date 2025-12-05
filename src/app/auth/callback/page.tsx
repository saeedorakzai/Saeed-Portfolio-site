'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function AuthCallbackPage() {
    const router = useRouter();

    useEffect(() => {
        const handleAuthCallback = async () => {
            // The supabase client automatically handles the hash fragment
            // containing the access_token and refresh_token
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.error('Error during auth callback:', error);
                // Optionally redirect to login with error
                router.push('/login?error=auth_callback_error');
            } else if (session) {
                // Successfully authenticated
                router.push('/');
            } else {
                // No session found, but maybe the hash is being processed
                // Give it a moment or redirect to home
                // In implicit flow, getSession might not return immediately if it's parsing the hash
                // But usually supabase-js handles this on initialization if the URL contains the hash

                // We can also listen for the auth state change
                const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
                    if (event === 'SIGNED_IN' && session) {
                        router.push('/');
                    }
                });

                return () => {
                    subscription.unsubscribe();
                };
            }
        };

        handleAuthCallback();
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4 text-white">Completing Sign In...</h1>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-text-muted">Please wait while we redirect you.</p>
            </div>
        </div>
    );
}
