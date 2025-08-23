import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

import { ROUTING } from 'shared/consts/routing';
import { Layout } from 'shared/UI/Layout';
import { MainPage, GamePage, AboutUsPage, StatisticsPage } from 'pages';
import '../styles/global.scss';
import '../styles/reset.scss';

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
