import '../styles/global.scss';
import '../styles/reset.scss';

import { AboutUsPage, GamePage, MainPage, StatisticsPage } from 'pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';
import { Layout } from 'shared/UI/Layout';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={ROUTING.HOME} element={<MainPage />} />
          <Route path={ROUTING.GAME} element={<GamePage />} />
          <Route path={ROUTING.STATISTICS} element={<StatisticsPage />} />
          <Route path={ROUTING.ABOUT_US} element={<AboutUsPage />} />

          <Route path={ROUTING.OTHER} element={<Navigate to={ROUTING.HOME} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
