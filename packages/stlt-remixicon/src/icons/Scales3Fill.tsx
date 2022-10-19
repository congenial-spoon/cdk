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
    <path d="M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A5.986 5.986 0 0 1 18 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.982 5.982 0 0 1 6 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103L16.582 13h2.835L18 9.103zm-12 0L4.582 13h2.835L6 9.103z" />
  </svg>
);
const SvgScales3Fill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgScales3Fill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgScales3Fill;
