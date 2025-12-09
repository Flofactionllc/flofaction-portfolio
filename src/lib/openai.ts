import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: process.env.NODE_ENV === 'development',
});

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function generateChatResponse(
  messages: ChatMessage[],
  model: string = 'gpt-4-turbo-preview',
  temperature: number = 0.7
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: 2000,
    });
    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
}

export async function generateEmbeddings(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      input: text,
      model: 'text-embedding-3-small',
    });
    return response.data[0]?.embedding || [];
  } catch (error) {
    console.error('Embeddings API error:', error);
    throw error;
  }
}

export default openai;
