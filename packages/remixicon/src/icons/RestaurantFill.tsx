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
    <path d="M21 2v20h-2v-8h-3V7a5 5 0 0 1 5-5zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z" />
  </svg>
);
const SvgRestaurantFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgRestaurantFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgRestaurantFill;
