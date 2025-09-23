
import { NextRequest, NextResponse } from 'next/server';
import { generateProposalSection } from '@/lib/ai/generateProposalSection';

export async function POST(req: NextRequest) {
  const { sectionType, prompt } = await req.json();

  if (!sectionType || !prompt) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  try {
    const generatedContent = await generateProposalSection(sectionType, prompt);
    return NextResponse.json({ content: generatedContent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate proposal section' }, { status: 500 });
  }
}
