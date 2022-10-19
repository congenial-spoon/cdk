import * as React from 'react';
import { SVGProps } from 'react';
import IconBase, { IconBasePropsType } from './IconBase';
const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 4.582V12a3 3 0 1 1-2-2.83V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 3-15.418z" />
  </svg>
);
const SvgDiscLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgDiscLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgDiscLine;
