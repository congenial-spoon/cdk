import * as React from 'react';
import { SVGProps } from 'react';
const SvgPencilFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12.9 6.858 4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414 2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
  </svg>
);
export default SvgPencilFill;
