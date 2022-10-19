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
    <path d="M21 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7h3zM5.5 2a7.49 7.49 0 0 1 6.124 3.169A7.953 7.953 0 0 0 10 10v1h-.5A7.5 7.5 0 0 1 2 3.5V2h3.5z" />
  </svg>
);
const SvgPlantFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgPlantFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgPlantFill;
