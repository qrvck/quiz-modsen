import clsx from 'clsx';

import { ContainerProps } from '../model/container.types';
import styles from './Container.module.scss';

export function Container({ children, className, width, height, ...rest }: ContainerProps) {
  return (
    <div style={{ width, height }} className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}
