import * as React from 'react';
import { SVGProps } from 'react';
const SvgAnticlockwiseLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm1 2v8h8v-8h-8zm-6-.414 1.828-1.829 1.415 1.415L5 14.414.757 10.172l1.415-1.415L4 10.586V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3v2.586z" />
  </svg>
);
export default SvgAnticlockwiseLine;
