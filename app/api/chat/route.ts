import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const groq = createOpenAI({
 baseURL: 'https://api.groq.com/openai/v1',
 apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export async function POST(req: Request) {
 try {
  const { messages, systemMsg } = await req.json();
  const result = await streamText({
   model: groq('gemma2-9b-it'),
   system: systemMsg,
   messages,
  });

  return result.toDataStreamResponse();
 } catch (error) {
  console.error('Error in POST /api/chat:', error);
  return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
 }
}