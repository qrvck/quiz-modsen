import { Outlet } from 'react-router-dom';
import { Suspense } from 'widgets/Suspense';
import { Header } from 'widgets/Header';
import { Menu } from 'widgets/Menu';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <Suspense>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Menu />
    </Suspense>
  );
}
