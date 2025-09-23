
'use client';

import { OrganizationSetup } from '@/components/organizations/OrganizationSetup';

export default function OrganizationSetupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Set Up Your Organization</h1>
        <OrganizationSetup />
      </div>
    </div>
  );
}
