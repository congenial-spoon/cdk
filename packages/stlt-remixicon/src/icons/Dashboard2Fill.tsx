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
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-5.106 11.789l.156.16 1.414-1.413a5 5 0 0 1 4.831-8.366l1.563-1.562A6.99 6.99 0 0 0 12 5zm6.392 4.143-1.561 1.562c.11.413.169.847.169 1.295 0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.982 6.982 0 0 0 19 12a6.965 6.965 0 0 0-.608-2.857zm-2.15-2.8-3.725 3.724A2.002 2.002 0 0 0 10 12a2 2 0 1 0 3.933-.517l3.724-3.726-1.414-1.414z" />
  </svg>
);
const SvgDashboard2Fill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgDashboard2Fill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgDashboard2Fill;
