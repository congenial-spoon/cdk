import * as React from 'react';
import { SVGProps } from 'react';
const SvgMusicFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
  </svg>
);
export default SvgMusicFill;
