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
    <path d="M4 22a8 8 0 1 1 16 0H4zm9-5.917V20h4.659A6.009 6.009 0 0 0 13 16.083zM11 20v-3.917A6.009 6.009 0 0 0 6.341 20H11zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
  </svg>
);
const SvgUser2Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgUser2Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgUser2Line;
