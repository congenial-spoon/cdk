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
    <path d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3a1 1 0 0 1 1 1v5a6.002 6.002 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.237 3 3 0 1 1 2.049.148A5.5 5.5 0 0 1 9 16.5v-1.583A6.001 6.001 0 0 1 4 9V4a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SvgStethoscopeFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgStethoscopeFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgStethoscopeFill;