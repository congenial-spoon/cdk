import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDropUpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 10 4 4H8z" />
  </svg>
);
export default SvgArrowDropUpFill;
