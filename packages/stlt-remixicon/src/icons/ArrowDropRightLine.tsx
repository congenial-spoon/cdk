import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDropRightLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.172 12 9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" />
  </svg>
);
export default SvgArrowDropRightLine;
