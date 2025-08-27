import { useCallback, useEffect } from 'react';

import { useClickOutsideProps } from './model/useClickOutside.types';

export function useClickOutside({ ref, callback, capture }: useClickOutsideProps) {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
        callback();
      }
    },

    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, capture);
    return () => {
      document.removeEventListener('click', handleClickOutside, capture);
    };
  }, [handleClickOutside, capture]);
}
