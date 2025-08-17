import { useLayoutEffect } from 'react';
import { rehydrateStatisticsStore } from 'shared/store/statisticsStore';
import { Container } from 'shared/UI/Container';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import styles from './StatisticsTable.module.scss';

export function StatisticsTable() {
  useLayoutEffect(() => {
    rehydrateStatisticsStore();
  }, []);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <table className={styles.table}>
          <TableHead />
          <TableBody />
        </table>
      </Container>
    </section>
  );
}
