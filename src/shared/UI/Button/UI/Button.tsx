import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

export function Button({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
}
