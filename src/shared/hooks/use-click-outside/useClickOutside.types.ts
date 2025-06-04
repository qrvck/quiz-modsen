import { RefObject } from 'react';

export interface useClickOutsideProps {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
  capture?: boolean;
}
