import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

import { ROUTING } from 'shared/consts/routing';
import { Layout } from 'app/UI/Layout';
import { MainPage, GamePage } from 'pages';
import './index.scss';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={ROUTING.HOME} element={<MainPage />} />
          <Route path={ROUTING.GAME} element={<GamePage />} />
          {/* <Route path={ROUTING.STATISTICS} element={<BankCardPage />} />
        <Route path={ROUTING.ABOUT_US} element={<ContactsPage />} /> */}

          <Route path={ROUTING.OTHER} element={<Navigate to={ROUTING.HOME} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
