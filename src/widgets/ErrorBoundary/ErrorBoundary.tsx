import { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './model/ErrorBoundary.types';
import { Button } from 'shared/UI/Button';
import { ROUTING } from 'shared/consts/routing';
import {
  GO_HOME_BUTTON_TEXT,
  REFRESH_BUTTON_TEXT,
  TEXT_1,
  TEXT_2,
} from './model/ErrorBoundary.consts';
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
