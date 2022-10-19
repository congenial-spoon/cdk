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
    <path d="M2 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5zM14 5H4v2.968a4.5 4.5 0 0 1 0 8.064V19h10V5zm2 0v14h4v-2.968a4.5 4.5 0 0 1 0-8.064V5h-4z" />
  </svg>
);
const SvgCoupon2Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgCoupon2Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgCoupon2Line;
