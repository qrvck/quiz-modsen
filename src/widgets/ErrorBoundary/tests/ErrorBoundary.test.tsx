import { render, screen } from '@testing-library/react';

import {
  GO_HOME_BUTTON_TEXT,
  REFRESH_BUTTON_TEXT,
  TEXT_1,
  TEXT_2,
} from '../consts/errorBoundary.consts';
import { ErrorBoundary } from '../UI/ErrorBoundary';

const THROW_ERROR_COMPONENT_TEXT = 'Дочерний компонент';

const ThrowErrorComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }

  return <div>{THROW_ERROR_COMPONENT_TEXT}</div>;
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render children when there are no errors in child component', () => {
    render(
      <ErrorBoundary>
        <ThrowErrorComponent shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText(THROW_ERROR_COMPONENT_TEXT)).toBeInTheDocument();
  });

  it('should render error UI when there is an error in child component', () => {
    render(
      <ErrorBoundary>
        <ThrowErrorComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(TEXT_1)).toBeInTheDocument();
    expect(screen.getByText(TEXT_2)).toBeInTheDocument();
    expect(screen.getByText(REFRESH_BUTTON_TEXT)).toBeInTheDocument();
    expect(screen.getByText(GO_HOME_BUTTON_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(THROW_ERROR_COMPONENT_TEXT)).not.toBeInTheDocument();
  });
});
