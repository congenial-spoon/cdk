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
    <path d="M16.53 17.53 20 21H3V4h10.667v.008A7.118 7.118 0 0 1 14.136 4c-.089.37-.136.76-.136 1.166C14 7.485 16.015 9.5 18.667 9.5a4.18 4.18 0 0 0 2.032-.538 7.003 7.003 0 0 1-4.17 8.567zM18.5 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);
const SvgRemixiconFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgRemixiconFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgRemixiconFill;
