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
    <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
  </svg>
);
const SvgDashboardLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgDashboardLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgDashboardLine;
