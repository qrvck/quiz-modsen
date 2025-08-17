import { TABLE_HEADS } from '../../consts/tableHead.consts';
import styles from './TableHead.module.scss';

export function TableHead() {
  return (
    <thead className={styles.thead}>
      <tr>
        {TABLE_HEADS.map((head) => (
          <th className={styles.th} key={head}>
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
}
