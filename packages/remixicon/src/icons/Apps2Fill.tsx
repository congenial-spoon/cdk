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
    <path d="M7 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
  </svg>
);
const SvgApps2Fill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgApps2Fill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgApps2Fill;
