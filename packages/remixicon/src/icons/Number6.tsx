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
    <path d="m14.886 2-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2h2.31zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
  </svg>
);
const SvgNumber6 = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgNumber6" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgNumber6;
