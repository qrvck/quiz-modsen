import { useStatisticsStore } from 'shared/store/statisticsStore';

import styles from './TableBody.module.scss';

export function TableBody() {
  const results = useStatisticsStore((state) => state.results);

  return (
    <tbody className={styles.tbody}>
      {results.map(
        ({ id, avatarURL, firstName, lastName, age, correctAnswers, incorrectAnswers }) => (
          <tr className={styles.tr} key={id}>
            <td className={styles.td}>
              <img className={styles.avatar} src={avatarURL} />
            </td>
            <td className={styles.td}>{firstName}</td>
            <td className={styles.td}>{lastName}</td>
            <td className={styles.td}>{age}</td>
            <td className={styles.td}>{correctAnswers}</td>
            <td className={styles.td}>{incorrectAnswers}</td>
          </tr>
        )
      )}
    </tbody>
  );
}
