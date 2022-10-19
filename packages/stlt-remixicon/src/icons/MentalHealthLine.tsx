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
    <path d="M11 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 11 2zm0 2a6 6 0 0 0-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664-1.543-2.425-.057-.442A6.001 6.001 0 0 0 11 4zm-.53 3.763.53.53.53-.53a1.75 1.75 0 1 1 2.475 2.474L11 13.243l-3.005-3.006a1.75 1.75 0 1 1 2.475-2.474z" />
  </svg>
);
const SvgMentalHealthLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgMentalHealthLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgMentalHealthLine;
