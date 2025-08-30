import { fireEvent, render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';

import {
  BANNER_ALT,
  BANNER_SRC,
  START_BUTTON_TEXT,
  SUBTITLE_TEXT,
  TITLE_TEXT,
} from '../consts/Greeting.consts';
import { Greeting } from '../UI/Greeting';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const renderWithRouter = (component: ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Greeting Component', () => {
  it('should render all text content correctly', () => {
    renderWithRouter(<Greeting />);

    expect(screen.getByText(TITLE_TEXT)).toBeInTheDocument();
    expect(screen.getByText(SUBTITLE_TEXT)).toBeInTheDocument();
    expect(screen.getByText(START_BUTTON_TEXT)).toBeInTheDocument();
  });

  it('should render start button', () => {
    renderWithRouter(<Greeting />);

    const startButton = screen.getByRole('button', { name: START_BUTTON_TEXT });
    expect(startButton).toBeInTheDocument();
  });

  it('should navigate to game page when start button is clicked', () => {
    renderWithRouter(<Greeting />);

    const startButton = screen.getByRole('button', { name: START_BUTTON_TEXT });
    fireEvent.click(startButton);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTING.GAME);
  });

  it('should render banner image with correct src and alt', () => {
    renderWithRouter(<Greeting />);

    const bannerImage = screen.getByAltText(BANNER_ALT);
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute('src', BANNER_SRC);
  });
});
