import { useNavigate } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';
import { Button } from 'shared/UI/Button';

import {
  BANNER_ALT,
  BANNER_SRC,
  START_BUTTON_TEXT,
  SUBTITLE_TEXT,
  TITLE_TEXT,
} from '../consts/Greeting.consts';
import styles from './Greeting.module.scss';

export function Greeting() {
  const navigate = useNavigate();

  const handleClickOnStartButton = () => {
    navigate(ROUTING.GAME);
  };

  return (
    <section className={styles.section}>
      <img className={styles.banner} src={BANNER_SRC} alt={BANNER_ALT} />
      <h2 className={styles.title}>{TITLE_TEXT}</h2>
      <p className={styles.subtitle}>{SUBTITLE_TEXT}</p>
      <Button onClick={handleClickOnStartButton}>{START_BUTTON_TEXT}</Button>
    </section>
  );
}
