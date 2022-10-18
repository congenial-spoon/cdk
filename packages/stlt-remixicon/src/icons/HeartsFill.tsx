import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeartsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17.363 11.045a3.615 3.615 0 0 1 5.084 0 3.55 3.55 0 0 1 0 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 0 1 0-5.047 3.615 3.615 0 0 1 5.084 0l.363.36.363-.36zm1.88-6.288a5.995 5.995 0 0 1 1.689 3.338A5.613 5.613 0 0 0 17 8.808a5.617 5.617 0 0 0-6.856.818 5.55 5.55 0 0 0-.178 7.701l.178.185 2.421 2.404L11 21.485l-8.48-8.492a6 6 0 0 1 8.481-8.464 5.998 5.998 0 0 1 8.242.228z" />
  </svg>
);
export default SvgHeartsFill;
