import { fireEvent, render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ROUTING } from 'shared/consts/routing';

import { NAV_ITEMS_TEXT } from '../consts/menu.consts';
import { Menu } from '../UI/Menu';

const mockSetIsOpen = jest.fn();
const mockUseMenuStore = jest.fn();

jest.mock('shared/store', () => ({
  useMenuStore: () => mockUseMenuStore(),
}));

const mockUseClickOutside = jest.fn();
jest.mock('shared/hooks/useClickOutside', () => ({
  useClickOutside: () => mockUseClickOutside(),
}));

const renderWithRouter = (component: ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Menu Component', () => {
  beforeEach(() => {
    mockSetIsOpen.mockClear();
    mockUseClickOutside.mockClear();
    mockUseMenuStore.mockReturnValue({
      isOpen: false,
      setIsOpen: mockSetIsOpen,
    });
  });

  it('should render all navigation links with correct text', () => {
    renderWithRouter(<Menu />);

    expect(screen.getByText(NAV_ITEMS_TEXT.HOME)).toBeInTheDocument();
    expect(screen.getByText(NAV_ITEMS_TEXT.GAME)).toBeInTheDocument();
    expect(screen.getByText(NAV_ITEMS_TEXT.STATISTICS)).toBeInTheDocument();
    expect(screen.getByText(NAV_ITEMS_TEXT.ABOUT_US)).toBeInTheDocument();
  });

  it('should render navigation links with correct href attributes', () => {
    renderWithRouter(<Menu />);

    const homeLink = screen.getByText(NAV_ITEMS_TEXT.HOME).closest('a');
    const gameLink = screen.getByText(NAV_ITEMS_TEXT.GAME).closest('a');
    const statisticsLink = screen.getByText(NAV_ITEMS_TEXT.STATISTICS).closest('a');
    const aboutUsLink = screen.getByText(NAV_ITEMS_TEXT.ABOUT_US).closest('a');

    expect(homeLink).toHaveAttribute('href', ROUTING.HOME);
    expect(gameLink).toHaveAttribute('href', `/${ROUTING.GAME}`);
    expect(statisticsLink).toHaveAttribute('href', `/${ROUTING.STATISTICS}`);
    expect(aboutUsLink).toHaveAttribute('href', `/${ROUTING.ABOUT_US}`);
  });

  it('should not have open class when menu is closed', () => {
    mockUseMenuStore.mockReturnValue({
      isOpen: false,
      setIsOpen: mockSetIsOpen,
    });

    renderWithRouter(<Menu />);

    const wrapper = screen.getByRole('navigation').parentElement;
    expect(wrapper).toHaveClass('wrapper');
    expect(wrapper).not.toHaveClass('wrapper__open');
  });

  it('should have open class when menu is open', () => {
    mockUseMenuStore.mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
    });

    renderWithRouter(<Menu />);

    const wrapper = screen.getByRole('navigation').parentElement;
    expect(wrapper).toHaveClass('wrapper');
    expect(wrapper).toHaveClass('wrapper__open');
  });

  it('should call setIsOpen with false when close button is clicked and menu is open', () => {
    mockUseMenuStore.mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
    });

    renderWithRouter(<Menu />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  it('should not call setIsOpen when close button is clicked and menu is closed', () => {
    mockUseMenuStore.mockReturnValue({
      isOpen: false,
      setIsOpen: mockSetIsOpen,
    });

    renderWithRouter(<Menu />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockSetIsOpen).not.toHaveBeenCalled();
  });

  it('should close menu when navigation link is clicked', () => {
    mockUseMenuStore.mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
    });
    renderWithRouter(<Menu />);

    const homeLink = screen.getByText(NAV_ITEMS_TEXT.HOME);
    fireEvent.click(homeLink);

    expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  it('should not close menu when clicking on navigation container but not on link', () => {
    renderWithRouter(<Menu />);

    const navigation = screen.getByRole('navigation');
    fireEvent.click(navigation);

    expect(mockSetIsOpen).not.toHaveBeenCalled();
  });

  it('should have correct DOM structure', () => {
    const { container } = renderWithRouter(<Menu />);

    const wrapper = container.firstChild;
    const closeButton = screen.getByRole('button');
    const navigation = screen.getByRole('navigation');

    expect(wrapper).toContainElement(closeButton);
    expect(wrapper).toContainElement(navigation);
  });
});
