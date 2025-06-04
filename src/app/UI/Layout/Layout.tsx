import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Menu } from 'widgets/Menu';

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Menu />
    </>
  );
}
