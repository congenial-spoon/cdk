import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowRightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13H4v-2h8V4l8 8-8 8z" />
  </svg>
);
export default SvgArrowRightFill;
