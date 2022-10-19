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
    <path d="m4.256 5.672 3.58 3.577a2.5 2.5 0 0 0 2 3.746L10 13h4l.09.008a.5.5 0 0 1 0 .984L14 14H8.5v2H11v2h2v-2h1c.121 0 .24-.009.357-.025l.173-.031 3.798 3.8A9.959 9.959 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.4.846-4.604 2.256-6.328zM12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l-3.579-3.577a2.5 2.5 0 0 0-2-3.745L14 11h-4l-.09-.008a.5.5 0 0 1 0-.984L10 10h5.5V8H13V6h-2v2h-1c-.121 0-.24.009-.356.025l-.173.031-3.799-3.8A9.959 9.959 0 0 1 12 2z" />
  </svg>
);
const SvgCreativeCommonsNcFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgCreativeCommonsNcFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgCreativeCommonsNcFill;
