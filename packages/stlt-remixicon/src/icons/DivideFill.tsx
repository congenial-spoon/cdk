import * as React from 'react';
import { SVGProps } from 'react';
const SvgDivideFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 11h14v2H5v-2zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);
export default SvgDivideFill;
