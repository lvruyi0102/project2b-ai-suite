'use client';

import { useState } from 'react';

export default function PromptOptimizer() {
  const [prompt, setPrompt] = useState('');
  const [optimized, setOptimized] = useState('');

  const optimize = () => {
    // Placeholder: In production, this will call an AI API
    const improvements = [
      'Add specific context and constraints',
      'Specify the desired output format',
      'Include examples of good and bad responses',
      'Define the role of the AI',
      'Break complex tasks into steps'
    ];
    setOptimized(`Optimized version:\n\nRole: Expert assistant\nTask: ${prompt}\n\nImprovements applied:\n- ${improvements.join('\n- ')}\n\nRefined prompt: Act as an expert. ${prompt}. Provide structured, actionable output with examples where relevant.`);
  };

  return (
    <div>
      <h2>AI Prompt Optimizer</h2>
      <p>Paste your prompt and get an improved version.</p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
        cols={60}
        placeholder="Enter your prompt here..."
      />
      <br />
      <button onClick={optimize}>Optimize Prompt</button>
      {optimized && (
        <pre style={{ whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '10px' }}>
          {optimized}
        </pre>
      )}
    </div>
  );
}