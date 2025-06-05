import { NavLink } from 'react-router-dom';
import { useMenuStore } from 'app/store';
import { ROUTING } from 'shared/consts/routing';
import { Container } from 'shared/UI/container';
import BurgerMenuIcon from 'shared/icons/burger-menu.svg';
import { TITLE_TEXT } from './Header.consts';
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
            <BurgerMenuIcon />
          </button>

          <NavLink className={styles.title} to={ROUTING.HOME}>
            <h1>{TITLE_TEXT}</h1>
          </NavLink>
        </div>
      </Container>
    </header>
  );
}
