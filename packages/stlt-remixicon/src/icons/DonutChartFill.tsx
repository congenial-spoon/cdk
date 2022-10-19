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
    <path d="M11 2.05v3.02a7 7 0 1 0 5.192 12.536l2.137 2.137A9.966 9.966 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.948 9.948 0 0 1-2.207 5.328l-2.137-2.136A6.958 6.958 0 0 0 18.929 13h3.022zM13.002 2.05a10.004 10.004 0 0 1 8.95 8.95H18.93a7.005 7.005 0 0 0-5.928-5.929V2.049z" />
  </svg>
);
const SvgDonutChartFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgDonutChartFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgDonutChartFill;
