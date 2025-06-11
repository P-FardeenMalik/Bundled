import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext'
import '../styles/globals.css';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    root.classList.add('dark'); // Set default theme
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}><Component {...pageProps} /></div>;
  }

  return (
    <div className="min-h-screen">
      <AuthProvider>
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
        <Toaster />
      </AuthProvider>
    </div>
  )
}