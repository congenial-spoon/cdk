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
    <path d="m15.86 18-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96a8.001 8.001 0 1 1 7.8-11.873A6 6 0 1 1 17 18h-1.139zm-5.628.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
  </svg>
);
const SvgRainyFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgRainyFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgRainyFill;
