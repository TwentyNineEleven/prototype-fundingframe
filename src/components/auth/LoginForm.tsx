
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // Redirect to dashboard
    } catch (error: any) { 
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Input
        {...form.register('email')}
        label="Email"
        type="email"
        placeholder="user@example.com"
        error={form.formState.errors.email?.message}
      />
      <Input
        {...form.register('password')}
        label="Password"
        type="password"
        placeholder="********"
        error={form.formState.errors.password?.message}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
}
