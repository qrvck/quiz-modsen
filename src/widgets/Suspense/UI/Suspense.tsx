import React, { PropsWithChildren } from 'react';
import { Loader } from 'shared/UI/Loader';

import styles from './Suspense.module.scss';

export function Suspense({ children }: PropsWithChildren) {
  return (
    <React.Suspense
      fallback={
        <div className={styles.wrapper}>
          <Loader />
        </div>
      }
    >
      {children}
    </React.Suspense>
  );
}
