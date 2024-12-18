import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: NextRequest) {
  const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });
  const { message } = await request.json();

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful content generation assistant, skilled in creating and refining various types of content to meet user needs.' },
        { role: 'user', content: message }
      ],
      model: 'llama3-70b-8192', // Ensure the model name is correct
      temperature: 0.5, // Adjust temperature as needed
      max_tokens: 2048,
      top_p: 0.9,
      stream: true, // Set to true if you expect a streaming response
      stop: null
    });

    // Initialize an empty string to collect the response
    let fullContent = '';

    // Concatenate chunks of data if streaming
    for await (const chunk of chatCompletion) {
      fullContent += chunk.choices[0]?.delta?.content || '';
    }

    // Return the full response content
    return NextResponse.json({ content: fullContent });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
