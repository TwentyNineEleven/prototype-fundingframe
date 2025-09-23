
'use client';

import { useState } from 'react';
import { ProposalSectionGenerator } from './ProposalSectionGenerator';
import { TiptapEditor } from './TiptapEditor';

export function ProposalEditor() {
  const [content, setContent] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Proposal Writer</h1>
        <p className="text-lg text-gray-600 mt-2">
          Create and edit your grant proposal with the help of AI
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <TiptapEditor content={content} onChange={setContent} />
      </div>

      <ProposalSectionGenerator onGenerate={(newSection) => setContent(content + newSection)} />
    </div>
  );
}
