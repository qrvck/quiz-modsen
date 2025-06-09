import { TITLE_TEXT, TECHNOLOGY_LIST } from './model/TechnologyList.consts';
import styles from './TechnologyList.module.scss';

export function TechnologyList() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{TITLE_TEXT}</h3>

      <ul className={styles.list}>
        {TECHNOLOGY_LIST.map((technologyItem) => (
          <li key={technologyItem}>{technologyItem}</li>
        ))}
      </ul>
    </div>
  );
}
