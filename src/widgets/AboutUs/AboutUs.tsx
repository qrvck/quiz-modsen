import { TechnologyList } from 'entities/TechnologyList';
import { Container } from 'shared/UI/Container';
import { DESC_1_TEXT, DESC_2_TEXT, DESC_3_TEXT, TITLE_TEXT } from './model/AboutUs.consts';
import styles from './AboutUs.module.scss';

export function AboutUs() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{TITLE_TEXT}</h2>
          <p className={styles.desc}>{DESC_1_TEXT}</p>
          <p className={styles.desc}>{DESC_2_TEXT}</p>
          <TechnologyList />
          <p className={styles.desc}>{DESC_3_TEXT}</p>
        </div>
      </Container>
    </section>
  );
}
