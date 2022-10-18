import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeftDownLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m9 13.59 8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z" />
  </svg>
);
export default SvgArrowLeftDownLine;
