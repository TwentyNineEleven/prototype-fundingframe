'use client';

import { useState } from 'react';

// Mock data for grants
const mockGrants = [
  { id: 1, title: 'Grant for Renewable Energy', foundation: 'Eco Foundation', amount: 50000 },
  { id: 2, title: 'Community Art Project Grant', foundation: 'Art & Culture Fund', amount: 10000 },
  { id: 3, title: 'STEM Education Grant', foundation: 'Science & Tech Institute', amount: 75000 },
  { id: 4, title: 'Healthcare Innovation Grant', foundation: 'HealthForward Org', amount: 100000 },
];

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGrants = mockGrants.filter((grant) =>
    grant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Discover Grants</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for grants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm"
        />
      </div>

      <div>
        {filteredGrants.map((grant) => (
          <div key={grant.id} className="p-4 mb-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">{grant.title}</h2>
            <p className="text-gray-600">from {grant.foundation}</p>
            <p className="text-lg font-semibold mt-2">${grant.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}