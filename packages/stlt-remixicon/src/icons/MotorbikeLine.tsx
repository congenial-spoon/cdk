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
    <path d="M4 13.256V12H2v-2h6.365L11.2 8h3.491L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 1 1-1.985.392L15.419 10h-.947l-1.582 5.87-.002-.001.002.006-2.925 1.064A4.5 4.5 0 1 1 4 13.256zm2-.229a4.5 4.5 0 0 1 3.281 2.033l1.957-.713L12.403 10h-.547L9 12H6v1.027zM5.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
  </svg>
);
const SvgMotorbikeLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgMotorbikeLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgMotorbikeLine;
