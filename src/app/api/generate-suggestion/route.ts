import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { proposal } = await req.json();

  // In a real application, you would make a call to your AI model here.
  // For now, we'll just use a mock suggestion.
  const mockSuggestion = `This is a mock suggestion for the proposal: "${proposal}". In the future, this will be a real AI-powered suggestion.`;

  return NextResponse.json({ suggestion: mockSuggestion });
}
