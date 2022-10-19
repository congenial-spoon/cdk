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
    <path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5h11zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5-4.342-7.5zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z" />
  </svg>
);
const SvgSpamLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgSpamLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgSpamLine;
