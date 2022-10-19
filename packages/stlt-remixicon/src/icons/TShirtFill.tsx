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
    <path d="m14.515 5 2.606-2.607a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1 0 1.414L19 11.828V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9.172L1.222 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0L9.485 5h5.03z" />
  </svg>
);
const SvgTShirtFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgTShirtFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgTShirtFill;
