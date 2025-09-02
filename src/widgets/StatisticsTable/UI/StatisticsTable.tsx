import { useLayoutEffect } from 'react';
import { rehydrateStatisticsStore } from 'shared/store/statisticsStore';
import { Container } from 'shared/UI/Container';

import { DATA_CY } from '../consts/statisticsTable.consts';
import styles from './StatisticsTable.module.scss';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export function StatisticsTable() {
  useLayoutEffect(() => {
    rehydrateStatisticsStore();
  }, []);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <table className={styles.table} data-cy={DATA_CY.table}>
          <TableHead />
          <TableBody />
        </table>
      </Container>
    </section>
  );
}
