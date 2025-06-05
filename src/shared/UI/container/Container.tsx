import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

export function Container({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}
