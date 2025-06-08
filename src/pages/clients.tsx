import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Clients() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page with testimonials section
    router.push('/#testimonials');
  }, [router]);

  return null;
}