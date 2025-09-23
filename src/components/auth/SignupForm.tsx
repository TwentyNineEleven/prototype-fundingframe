
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      // Redirect to organization setup
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
      <Input
        {...form.register('confirmPassword')}
        label="Confirm Password"
        type="password"
        placeholder="********"
        error={form.formState.errors.confirmPassword?.message}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Creating account...' : 'Create Account'}
      </Button>
    </form>
  );
}
