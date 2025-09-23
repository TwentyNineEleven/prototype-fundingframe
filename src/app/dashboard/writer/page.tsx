'use client';

import { useState } from 'react';

export default function WriterPage() {
  const [proposal, setProposal] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateSuggestion = async () => {
    setLoading(true);
    setSuggestion('');

    try {
      const response = await fetch('/api/generate-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ proposal }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuggestion(data.suggestion);
      } else {
        setSuggestion('Error: Could not fetch suggestion.');
      }
    } catch (error) {
      setSuggestion('Error: Could not fetch suggestion.');
    }

    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">AI Grant Writer</h1>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Your Proposal</h2>
          <textarea
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
            className="w-full h-96 p-4 border rounded-lg shadow-sm"
            placeholder="Write your grant proposal here..."
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">AI Suggestions</h2>
          <div className="w-full h-96 p-4 border rounded-lg shadow-sm bg-gray-100">
            {loading ? 'Generating suggestion...' : suggestion || 'Click the button to generate a suggestion.'}
          </div>
          <button 
            onClick={handleGenerateSuggestion}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
            disabled={loading || !proposal}
          >
            {loading ? 'Generating...' : 'Generate Suggestion'}
          </button>
        </div>
      </div>
    </div>
  );
}
