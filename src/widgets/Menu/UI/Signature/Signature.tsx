import { useMemo } from 'react';

import { EMOJI, SIGNATURE_TEXT_1, SIGNATURE_TEXT_2 } from '../../consts/signature.consts';
import styles from './Signature.module.scss';

export function Signature() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <p className={styles.signature}>
      {SIGNATURE_TEXT_1} {currentYear} {SIGNATURE_TEXT_2}{' '}
      <span className={styles.emojiWrapper}>
        <span className={styles.emoji}>{EMOJI}</span>
      </span>
    </p>
  );
}
