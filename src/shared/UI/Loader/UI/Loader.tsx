import { getRandomNumber } from 'shared/lib/getRandomNumber';

import styles from './Loader.module.scss';

const VIEWS = ['view-1', 'view-2', 'view-3'];

export function Loader() {
  const viewStyleIndex = getRandomNumber(0, VIEWS.length);
  const view = VIEWS[viewStyleIndex];
  const viewStyle = styles[view];

  return <div className={viewStyle} />;
}
