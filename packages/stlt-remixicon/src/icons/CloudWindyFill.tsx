import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloudWindyFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 18v-3.993H2.074a8 8 0 0 1 14.383-6.908A5.5 5.5 0 1 1 17.5 18h-3.499zm-8 2h10v2H6v-2zm-4-4h10v2H2v-2z" />
  </svg>
);
export default SvgCloudWindyFill;
