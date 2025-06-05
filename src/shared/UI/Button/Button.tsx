import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export function Button({ children, className, ...rest }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
}
