import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RemoteContent } from 'remote/RemoteContent';

console.log('Game', RemoteContent);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <h1>Title</h1>
    <section>
      <RemoteContent />
    </section>
  </BrowserRouter>
);
