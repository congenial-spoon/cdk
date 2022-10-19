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
    <path d="M16 21V10h5v10a1 1 0 0 1-1 1h-4zm-2 0H4a1 1 0 0 1-1-1V10h11v11zm7-13H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4z" />
  </svg>
);
const SvgLayoutFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgLayoutFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgLayoutFill;
