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
    <path d="m17.812 6.503-4.398 6.911-6.911 4.398A7.973 7.973 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0 0 19.938 13H18v-2h1.938a7.973 7.973 0 0 0-2.126-4.497zm-.315-.315A7.973 7.973 0 0 0 13 4.062V6h-2V4.062A7.96 7.96 0 0 0 7.094 5.68l1.37 1.37L7.05 8.464l-1.37-1.37A7.96 7.96 0 0 0 4.062 11H6v2H4.062a7.973 7.973 0 0 0 2.126 4.497l4.398-6.911 6.911-4.398zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);
const SvgSafariLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgSafariLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgSafariLine;
