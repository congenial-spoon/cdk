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
    <path d="M7 2v20H3V2h4zm2 0h10.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9V2zm13 4h2v4h-2V6zm0 6h2v4h-2v-4zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-3 4h6a3 3 0 0 0-6 0z" />
  </svg>
);
const SvgContactsBookFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgContactsBookFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgContactsBookFill;
