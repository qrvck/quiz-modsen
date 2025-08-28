import { Component } from 'react';
import { ROUTING } from 'shared/consts/routing';
import { Button } from 'shared/UI/Button';

import {
  GO_HOME_BUTTON_TEXT,
  REFRESH_BUTTON_TEXT,
  TEXT_1,
  TEXT_2,
} from '../consts/errorBoundary.consts';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../model/errorBoundary.types';
import styles from './ErrorBoundary.module.scss';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <p>{TEXT_1}</p>
          <p>{TEXT_2}</p>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => window.location.reload()}>{REFRESH_BUTTON_TEXT}</Button>
            <Button onClick={() => window.location.assign(ROUTING.HOME)}>
              {GO_HOME_BUTTON_TEXT}
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
