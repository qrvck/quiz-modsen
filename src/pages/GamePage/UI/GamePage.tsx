import { lazy } from 'react';

const GameContent = lazy(async () => ({
  default: (await import('remote/RemoteContent')).RemoteContent,
}));

export function GamePage() {
  return <GameContent />;
}
