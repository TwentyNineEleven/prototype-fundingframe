'use client';

import { useAuthContext } from '@/context/AuthContext';
import LoginPage from './(auth)/login/page';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <LoginPage />;
  }

  // Redirect to dashboard if user is logged in
  if(user) {
    router.push('/dashboard/discover');
    return null;
  }

  return <LoginPage />;
}
