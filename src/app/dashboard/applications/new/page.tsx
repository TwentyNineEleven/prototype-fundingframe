'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addApplication } from '@/lib/firebase/firestore';

export default function NewApplicationPage() {
  const router = useRouter();
  const [grantTitle, setGrantTitle] = useState('');
  const [foundationName, setFoundationName] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newApplication = {
      grantTitle,
      foundationName,
      amount,
      status: 'draft' as const,
    };

    const newId = await addApplication(newApplication);

    if (newId) {
      router.push('/dashboard/applications');
    } else {
      // Handle error
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">New Grant Application</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="grantTitle" className="block mb-2">Grant Title</label>
          <input
            type="text"
            id="grantTitle"
            value={grantTitle}
            onChange={(e) => setGrantTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="foundationName" className="block mb-2">Foundation Name</label>
          <input
            type="text"
            id="foundationName"
            value={foundationName}
            onChange={(e) => setFoundationName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button 
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Application'}
        </button>
      </form>
    </div>
  );
}