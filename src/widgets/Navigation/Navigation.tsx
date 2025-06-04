import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';

import { useMenuStore } from 'app/store';
import styles from './Navigation.module.scss';

export function Navigation() {
  const { isOpen, setIsOpen } = useMenuStore();

  const handleClickOnCloseButton = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.wrapper__open]: isOpen,
      })}
    >
      <button className={styles.closeButton} onClick={handleClickOnCloseButton}>
        ⬅︎
      </button>

      <nav className={styles.navigation}>
        <NavLink className={styles.link} to={ROUTING.HOME}>
          🏠 Home
        </NavLink>

        <NavLink className={styles.link} to={ROUTING.GAME}>
          🕹️ Game
        </NavLink>

        <NavLink className={styles.link} to={ROUTING.STATISTICS}>
          📗 Statistics
        </NavLink>

        <NavLink className={styles.link} to={ROUTING.ABOUT_US}>
          🌀 About us
        </NavLink>
      </nav>
    </div>
  );
}
