import * as React from 'react';
import { SVGProps } from 'react';
const SvgSkipBackFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m8 11.333 10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0v6.333z" />
  </svg>
);
export default SvgSkipBackFill;
