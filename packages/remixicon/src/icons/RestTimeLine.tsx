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
    <path d="M11 6v2a6 6 0 1 0 5.996 6.225L17 14h2a8 8 0 0 1-16 0c0-4.335 3.58-8 8-8zm10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2h8z" />
  </svg>
);
const SvgRestTimeLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgRestTimeLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgRestTimeLine;
