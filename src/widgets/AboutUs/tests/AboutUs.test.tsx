import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { DESC_1_TEXT, DESC_2_TEXT, DESC_3_TEXT, TITLE_TEXT } from '../model/AboutUs.consts';
import { AboutUs } from '../UI/AboutUs';

const TECHNOLOGY_LIST_TEST_ID = 'technology-list';
const CONTAINER_TEST_ID = 'container';

jest.mock('../UI/TechnologyList', () => ({
  TechnologyList: () => <div data-testid={TECHNOLOGY_LIST_TEST_ID} />,
}));

jest.mock('shared/UI/Container', () => ({
  Container: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div data-testid={CONTAINER_TEST_ID} className={className}>
      {children}
    </div>
  ),
}));

describe('AboutUs Component', () => {
  it('renders content in correct order', () => {
    const { container } = render(<AboutUs />);

    const section = container.querySelector('section');
    const wrapper = section?.firstElementChild;
    const children = wrapper?.children;

    expect(children).toHaveLength(5);

    expect(children?.[0]).toHaveTextContent(TITLE_TEXT);
    expect(children?.[1]).toHaveTextContent(DESC_1_TEXT);
    expect(children?.[2]).toHaveTextContent(DESC_2_TEXT);
    expect(children?.[3]).toHaveAttribute('data-testid', TECHNOLOGY_LIST_TEST_ID);
    expect(children?.[4]).toHaveTextContent(DESC_3_TEXT);
  });
});
