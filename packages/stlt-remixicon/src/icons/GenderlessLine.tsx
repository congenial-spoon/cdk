import * as React from 'react';
import { SVGProps } from 'react';
const SvgGenderlessLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2v6.066zM12 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" />
  </svg>
);
export default SvgGenderlessLine;
