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
    <path d="M4 4h4v2H4V4zm12 15h4v2h-4v-2zM2 9h10v2H2V9zm12 0h6v2h-6V9zM4 14h6v2H4v-2zm8 0h10v2H12v-2zM10 4h12v2H10V4zM2 19h12v2H2v-2z" />
  </svg>
);
const SvgMistFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgMistFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgMistFill;