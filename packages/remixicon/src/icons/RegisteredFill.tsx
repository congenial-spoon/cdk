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
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.5 5H8v10h2v-3h2.217l2.18 3h2.472l-2.55-3.51a3.5 3.5 0 0 0-1.627-6.486L12.5 7zm0 2a1.5 1.5 0 0 1 1.493 1.356L14 10.5l-.007.144a1.5 1.5 0 0 1-1.349 1.35L12.5 12H10V9h2.5z" />
  </svg>
);
const SvgRegisteredFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgRegisteredFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgRegisteredFill;
