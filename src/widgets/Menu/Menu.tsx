import { useRef, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';
import { useClickOutside } from 'shared/hooks/use-click-outside';
import { useMenuStore } from 'app/store';
import styles from './Menu.module.scss';

export function Menu() {
  const { isOpen, setIsOpen } = useMenuStore();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOnCloseButton = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, setIsOpen]);

  useClickOutside({
    ref: wrapperRef,
    callback: handleClickOnCloseButton,
    capture: true,
  });

  const handleNavigationClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const target = e.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const linkElement = target.closest(`.${styles.link}`);

      if (linkElement) {
        handleClickOnCloseButton();
      }
    },
    [handleClickOnCloseButton]
  );

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.wrapper__open]: isOpen,
      })}
      ref={wrapperRef}
    >
      <button className={styles.closeButton} onClick={handleClickOnCloseButton}>
        ⬅︎
      </button>

      <nav className={styles.navigation} onClick={handleNavigationClick}>
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
