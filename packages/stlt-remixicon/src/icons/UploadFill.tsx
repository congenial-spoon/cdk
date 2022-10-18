import * as React from 'react';
import { SVGProps } from 'react';
const SvgUploadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 19h18v2H3v-2zm10-9v8h-2v-8H4l8-8 8 8h-7z" />
  </svg>
);
export default SvgUploadFill;
