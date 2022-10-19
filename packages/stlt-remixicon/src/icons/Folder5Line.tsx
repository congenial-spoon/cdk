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
    <path d="M3.087 9h17.826a1 1 0 0 1 .997 1.083l-.834 10a1 1 0 0 1-.996.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9zM4.84 19h14.32l.666-8H4.174l.666 8zm8.574-14H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414l2 2z" />
  </svg>
);
const SvgFolder5Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgFolder5Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgFolder5Line;
