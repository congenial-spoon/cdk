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
    <path d="M2 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.599.599 0 0 1 .707.59v1.28L19 4a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15H2zm10-10h-2v2h2v-2z" />
  </svg>
);
const SvgDoorOpenFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgDoorOpenFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgDoorOpenFill;
