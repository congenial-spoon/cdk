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
    <path d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472v2.458zM7 16h2v4H7v-4zm8 0h2v4h-2v-4zm-4 3h2v4h-2v-4z" />
  </svg>
);
const SvgShowersLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgShowersLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgShowersLine;
