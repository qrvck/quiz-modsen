import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { RefObject } from 'react';

import { useClickOutsideProps } from '../model/useClickOutside.types';
import { useClickOutside } from '../useClickOutside';

let mockCallback: jest.Mock;
let mockRef: RefObject<HTMLElement | null>;
let mockElement: HTMLElement;

describe('useClickOutside', () => {
  beforeEach(() => {
    mockCallback = jest.fn();
    mockElement = document.createElement('span');
    mockRef = { current: mockElement };
  });

  it('should call callback when clicking outside the element', () => {
    const props: useClickOutsideProps = {
      ref: mockRef,
      callback: mockCallback,
    };

    renderHook(() => useClickOutside(props));

    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    fireEvent.click(outsideElement);

    expect(mockCallback).toHaveBeenCalledTimes(1);

    document.body.removeChild(outsideElement);
  });

  it('should not call callback when clicking inside the element', () => {
    const props: useClickOutsideProps = {
      ref: mockRef,
      callback: mockCallback,
    };

    renderHook(() => useClickOutside(props));

    const insideElement = document.createElement('span');
    mockElement.appendChild(insideElement);

    fireEvent.click(insideElement);

    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('should not call callback when clicking on the ref element', () => {
    const props: useClickOutsideProps = {
      ref: mockRef,
      callback: mockCallback,
    };

    renderHook(() => useClickOutside(props));

    fireEvent.click(mockElement);

    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('should not call callback when ref.current is null', () => {
    mockRef.current = null;

    const props: useClickOutsideProps = {
      ref: mockRef,
      callback: mockCallback,
    };

    renderHook(() => useClickOutside(props));

    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    fireEvent.click(outsideElement);

    expect(mockCallback).not.toHaveBeenCalled();

    document.body.removeChild(outsideElement);
  });
});
