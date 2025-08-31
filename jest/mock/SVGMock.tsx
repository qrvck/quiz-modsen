import { forwardRef, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  testid: string;
}

const SVGMock = forwardRef<SVGSVGElement, Props>(function SVGMock({ testid, ...props }, ref) {
  return <svg ref={ref} data-testid={testid} {...props} />;
});

export default SVGMock;
