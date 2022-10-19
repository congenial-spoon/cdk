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
    <path d="m12 18.485 4.243-4.242a6 6 0 1 0-8.486 0L12 18.485zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0zM5 22h14v2H5v-2z" />
  </svg>
);
const SvgMapPin5Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgMapPin5Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgMapPin5Line;
