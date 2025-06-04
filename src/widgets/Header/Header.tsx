import React from 'react';
import { useMenuStore } from 'app/store';

export function Header() {
  const setIsOpen = useMenuStore((store) => store.setIsOpen);

  const handleClickOnMenuButton = () => {
    setIsOpen(true);
  };

  return <div onClick={handleClickOnMenuButton}>Header</div>;
}
