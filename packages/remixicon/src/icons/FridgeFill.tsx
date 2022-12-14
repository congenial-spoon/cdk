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
    <path d="M20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12h16zM9 14H7v5h2v-5zM19 1a1 1 0 0 1 1 1v8H4V2a1 1 0 0 1 1-1h14zM9 4H7v4h2V4z" />
  </svg>
);
const SvgFridgeFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgFridgeFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgFridgeFill;
