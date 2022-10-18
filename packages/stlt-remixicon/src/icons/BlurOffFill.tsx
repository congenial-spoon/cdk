import * as React from 'react';
import { SVGProps } from 'react';
const SvgBlurOffFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.432 6.846 1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04A9 9 0 0 1 5.432 6.848zM8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564L8.244 4.03z" />
  </svg>
);
export default SvgBlurOffFill;
