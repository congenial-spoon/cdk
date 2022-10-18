import * as React from 'react';
import { SVGProps } from 'react';
const SvgCursorLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m15.388 13.498 2.552 7.014-4.698 1.71-2.553-7.014-3.899 2.445 1.62-16.02 11.537 11.232-4.558.633zm-.011 5.818-2.715-7.46 2.96-.41-5.64-5.49-.79 7.83 2.53-1.587 2.715 7.46.94-.343z" />
  </svg>
);
export default SvgCursorLine;
