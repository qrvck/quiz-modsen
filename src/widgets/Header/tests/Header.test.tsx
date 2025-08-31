import { fireEvent, render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';

import { TITLE_TEXT } from '../consts/Header.consts';
import { Header } from '../UI/Header';

const mockSetIsOpen = jest.fn();
jest.mock('shared/store', () => ({
  useMenuStore: () => mockSetIsOpen,
}));

const renderWithRouter = (component: ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header Component', () => {
  it('should render burger menu button', () => {
    renderWithRouter(<Header />);

    const burgerButton = screen.getByRole('button');
    expect(burgerButton).toBeInTheDocument();
  });

  it('should render title as h1 element', () => {
    renderWithRouter(<Header />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(TITLE_TEXT);
  });

  it('should render navigation link to home', () => {
    renderWithRouter(<Header />);

    const homeLink = screen.getByRole('link');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', ROUTING.HOME);
  });

  it('should have correct href attribute on home link', () => {
    renderWithRouter(<Header />);

    const homeLink = screen.getByRole('link');
    expect(homeLink).toHaveAttribute('href', ROUTING.HOME);
  });

  it('should call setIsOpen with true when burger menu button is clicked', () => {
    renderWithRouter(<Header />);

    const burgerButton = screen.getByRole('button');
    fireEvent.click(burgerButton);

    expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsOpen).toHaveBeenCalledWith(true);
  });
});
