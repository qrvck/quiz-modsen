import clsx from 'clsx';
import { MouseEvent, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { useMenuStore } from 'shared/store';

import { CLOSE_BUTTON_TEXT, NAV_ITEMS_TEXT } from '../consts/menu.consts';
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
        {CLOSE_BUTTON_TEXT}
      </button>

      <nav className={styles.navigation} onClick={handleNavigationClick}>
        <NavLink className={styles.link} to={ROUTING.HOME}>
          {NAV_ITEMS_TEXT.HOME}
        </NavLink>

        <NavLink className={styles.link} to={ROUTING.GAME}>
          {NAV_ITEMS_TEXT.GAME}
        </NavLink>

        <NavLink className={styles.link} to={ROUTING.STATISTICS}>
          {NAV_ITEMS_TEXT.STATISTICS}
        </NavLink>

        <NavLink className={styles.link} to={ROUTING.ABOUT_US}>
          {NAV_ITEMS_TEXT.ABOUT_US}
        </NavLink>
      </nav>
    </div>
  );
}
