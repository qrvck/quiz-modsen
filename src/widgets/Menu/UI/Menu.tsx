import clsx from 'clsx';
import { MouseEvent, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { useMenuStore } from 'shared/store';

import { CLOSE_BUTTON_TEXT, DATA_CY, NAV_ITEMS_LIST } from '../consts/menu.consts';
import styles from './Menu.module.scss';
import { Signature } from './Signature';

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
      data-cy={DATA_CY.nav}
    >
      <div>
        <button
          className={styles.closeButton}
          data-cy={DATA_CY.closeNavButton}
          onClick={handleClickOnCloseButton}
        >
          {CLOSE_BUTTON_TEXT}
        </button>

        <nav className={styles.navigation} onClick={handleNavigationClick}>
          {NAV_ITEMS_LIST.map(({ text, rout }) => (
            <NavLink className={styles.link} key={rout} to={rout} data-cy={DATA_CY.navItem}>
              {text}
            </NavLink>
          ))}
        </nav>
      </div>

      <Signature />
    </div>
  );
}
