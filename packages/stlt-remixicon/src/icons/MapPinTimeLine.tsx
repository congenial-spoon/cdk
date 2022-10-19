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
    <path d="M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM13 11h4v2h-6V6h2v5z" />
  </svg>
);
const SvgMapPinTimeLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgMapPinTimeLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgMapPinTimeLine;
