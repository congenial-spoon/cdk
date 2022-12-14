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
    <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 9c-1.42 0-2.764.33-3.959.915L12 17.817l3.958-4.902A8.96 8.96 0 0 0 12 12zm0-7c-3.028 0-5.923.842-8.42 2.392l3.178 3.935A10.953 10.953 0 0 1 12 10c1.898 0 3.683.48 5.241 1.327L20.42 7.39A15.928 15.928 0 0 0 12 5z" />
  </svg>
);
const SvgSignalWifi2Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgSignalWifi2Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgSignalWifi2Line;
