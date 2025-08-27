import { NavLink } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';
import BurgerMenuIcon from 'shared/icons/burger-menu.svg';
import { useMenuStore } from 'shared/store';
import { Container } from 'shared/UI/Container';

import { TITLE_TEXT } from '../consts/Header.consts';
import styles from './Header.module.scss';

export function Header() {
  const setIsOpen = useMenuStore((store) => store.setIsOpen);

  const handleClickOnMenuButton = () => {
    setIsOpen(true);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <button className={styles.burgerMenu} onClick={handleClickOnMenuButton}>
            <BurgerMenuIcon className={styles.burgerMenuIcon} />
          </button>

          <NavLink className={styles.titleLint} to={ROUTING.HOME}>
            <h1>{TITLE_TEXT}</h1>
          </NavLink>
        </div>
      </Container>
    </header>
  );
}
