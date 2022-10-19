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
    <path d="M14.5 3A1.5 1.5 0 0 1 16 4.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 14.5 3zm-10 10H6v1.5A1.5 1.5 0 1 1 4.5 13zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5a1.5 1.5 0 0 1 0 3H18V9.5A1.5 1.5 0 0 1 19.5 8zm-15 0h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5A1.5 1.5 0 0 1 11 4.5V6H9.5a1.5 1.5 0 0 1 0-3zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 9.5 13z" />
  </svg>
);
const SvgSlackLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgSlackLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgSlackLine;
