import * as React from 'react';
import { SVGProps } from 'react';
import IconBase, { IconBasePropsType } from './IconBase';
const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 2a7 7 0 0 1 6.197 3.741A6.49 6.49 0 0 1 17.5 3H21v2.5a6.5 6.5 0 0 1-6.5 6.5H13v1h5v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7h5v-2H9a7 7 0 0 1-7-7V2h4zm10 13H8v5h8v-5zm3-10h-1.5A4.5 4.5 0 0 0 13 9.5v.5h1.5A4.5 4.5 0 0 0 19 5.5V5zM6 4H4a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5z" />
  </svg>
);
const SvgPlantLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgPlantLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgPlantLine;
