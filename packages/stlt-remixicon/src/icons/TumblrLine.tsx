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
    <path d="M8 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6H18v2h-5.003v2.91C13 15.39 13 16.595 13 17c-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.545V10H7V8h1z" />
  </svg>
);
const SvgTumblrLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgTumblrLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgTumblrLine;
