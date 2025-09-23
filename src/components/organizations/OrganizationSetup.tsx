
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const organizationSchema = z.object({
  name: z.string().min(2, 'Organization name is required'),
  slug: z.string().min(2, 'URL slug is required').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens allowed'),
  primaryContactEmail: z.string().email('Valid email required'),
  phone: z.string().optional(),
  website: z.string().url().optional(),
  ein: z.string().optional(),
  missionStatement: z.string().min(50, 'Mission statement should be at least 50 characters'),
  organizationType: z.enum(['nonprofit', 'government', 'foundation']),
  annualBudget: z.number().positive().optional(),
  staffSize: z.number().positive().optional(),
  foundingYear: z.number().min(1800).max(new Date().getFullYear()).optional()
});

type OrganizationFormData = z.infer<typeof organizationSchema>;

export function OrganizationSetup() {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<OrganizationFormData>({
    resolver: zodResolver(organizationSchema),
    defaultValues: {
      organizationType: 'nonprofit'
    }
  });

  const onSubmit = async (data: OrganizationFormData) => {
    setIsLoading(true);
    try {
      // await createOrganization(data);
      // Redirect to dashboard
    } catch (error) {
      console.error('Error creating organization:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          {...form.register('name')}
          label="Organization Name"
          placeholder="Hope Foundation"
          error={form.formState.errors.name?.message}
        />
        <Input
          {...form.register('slug')}
          label="URL Slug"
          placeholder="hope-foundation"
          error={form.formState.errors.slug?.message}
        />
      </div>
      
      <Textarea
        {...form.register('missionStatement')}
        label="Mission Statement"
        placeholder="Our mission is to..."
        rows={4}
        error={form.formState.errors.missionStatement?.message}
      />
      
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Creating Organization...' : 'Create Organization'}
      </Button>
    </form>
  );
}
