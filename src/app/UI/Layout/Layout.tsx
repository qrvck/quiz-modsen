import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Menu } from 'widgets/Menu';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>

      <Menu />
    </>
  );
}
