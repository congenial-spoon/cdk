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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);
const SvgCompass3Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgCompass3Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgCompass3Line;
