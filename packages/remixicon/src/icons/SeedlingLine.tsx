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
    <path d="M6 3a7.002 7.002 0 0 1 6.913 5.895A6.479 6.479 0 0 1 17.5 7H22v2.5a6.5 6.5 0 0 1-6.5 6.5H13v5h-2v-8H9a7 7 0 0 1-7-7V3h4zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5A4.5 4.5 0 0 0 20 9.5V9zM6 5H4v1a5 5 0 0 0 5 5h2v-1a5 5 0 0 0-5-5z" />
  </svg>
);
const SvgSeedlingLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgSeedlingLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgSeedlingLine;