import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUpDownFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8-5 5-5-5h4V4h2v12h4z" />
  </svg>
);
export default SvgArrowUpDownFill;
