import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDropUpLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 11.828-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z" />
  </svg>
);
export default SvgArrowDropUpLine;
