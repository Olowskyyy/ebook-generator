
'use client'
import { useState } from 'react';

export default function EbookForm() {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    alert(data.result);
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Generate eBook</button>
    </div>
  );
}
