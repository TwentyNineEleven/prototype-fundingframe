
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProposalSectionGeneratorProps {
  onGenerate: (newSection: string) => void;
}

export function ProposalSectionGenerator({ onGenerate }: ProposalSectionGeneratorProps) {
  const [sectionType, setSectionType] = useState('introduction');
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sectionType, prompt }),
    });

    const data = await response.json();

    if (data.content) {
      onGenerate(data.content);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <select
          value={sectionType}
          onChange={(e) => setSectionType(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="introduction">Introduction</option>
          <option value="needs-statement">Needs Statement</option>
          <option value="project-description">Project Description</option>
        </select>
        <Button onClick={handleGenerate}>Generate Section</Button>
      </div>
      <textarea
        className="w-full h-24 border border-gray-300 rounded-md p-2"
        placeholder="Enter a prompt to guide the AI..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
}
