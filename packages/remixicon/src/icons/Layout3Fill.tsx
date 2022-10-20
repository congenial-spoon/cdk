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
    <path d="M8 10v11H4a1 1 0 0 1-1-1V10h5zm13 0v10a1 1 0 0 1-1 1H10V10h11zm-1-7a1 1 0 0 1 1 1v4H3V4a1 1 0 0 1 1-1h16z" />
  </svg>
);
const SvgLayout3Fill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgLayout3Fill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgLayout3Fill;
