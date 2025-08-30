import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'widgets/ErrorBoundary';

import { App } from './UI/App';

// 123123
// // 123123dfsgdfsg

// let r = 22;

// const r = 'sdf'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
