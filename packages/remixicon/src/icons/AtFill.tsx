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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm8-10a8 8 0 1 0-3.968 6.911l-1.008-1.727A6 6 0 1 1 18 12v1a1 1 0 0 1-2 0V9h-1.354a4 4 0 1 0 .066 5.94A3 3 0 0 0 20 13v-1zm-8-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
const SvgAtFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgAtFill" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});
export default SvgAtFill;
