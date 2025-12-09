'use client';

import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse, ChatMessage } from '@/lib/openai';

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I'm FloFaction's AI assistant. How can I help you today? I can answer questions about our services including AI Solutions, Marketing, Insurance, and more.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const systemPrompt: ChatMessage = {
        role: 'system',
        content: 'You are a helpful customer service AI for FloFaction LLC. You help customers learn about our business solutions, services, and pricing. Always be professional and helpful.',
      };
      
      const response = await generateChatResponse([
        systemPrompt,
        ...messages,
        userMessage,
      ]);

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: response },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-chat-container flex flex-col h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="chat-header bg-gradient-to-r from-blue-600 to-purple-600 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">FloFaction AI Assistant</h2>
        <p className="text-blue-100 text-sm">Powered by OpenAI GPT-4</p>
      </div>

      <div className="chat-messages flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-sm lg:max-w-md px-4 py-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-700 text-gray-100 rounded-bl-none'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input p-6 border-t border-gray-700 bg-gray-800">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about FloFaction services..."
            disabled={loading}
            className="flex-1 px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
