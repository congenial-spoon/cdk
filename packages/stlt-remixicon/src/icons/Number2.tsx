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
    <path d="M16 7.5a4 4 0 1 0-8 0H6a6 6 0 1 1 10.663 3.776l-7.32 8.723L18 20v2H6v-1.127l9.064-10.802A3.982 3.982 0 0 0 16 7.5z" />
  </svg>
);
const SvgNumber2 = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgNumber2" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgNumber2;
