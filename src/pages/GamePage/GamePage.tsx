import React, { lazy } from 'react';

const GameContent = lazy(async () => ({
  default: (await import('remote/RemoteContent')).RemoteContent,
}));

export function GamePage() {
  return (
    <div>
      <React.Suspense fallback="Loading Dialog...">
        <GameContent />
      </React.Suspense>
    </div>
  );
}
