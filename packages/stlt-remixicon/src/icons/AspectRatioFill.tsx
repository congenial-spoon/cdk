import * as React from 'react';
import { SVGProps } from 'react';
const SvgAspectRatioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-3 9h-2v3h-3v2h5v-5zm-7-5H6v5h2V9h3V7z" />
  </svg>
);
export default SvgAspectRatioFill;
