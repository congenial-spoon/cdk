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
    <path d="M11 21v-1.07A7.002 7.002 0 0 1 5 13V8a7 7 0 1 1 14 0v5a7.002 7.002 0 0 1-6 6.93V21h4v2H7v-2h4zm1-12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);
const SvgWebcamFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgWebcamFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgWebcamFill;
