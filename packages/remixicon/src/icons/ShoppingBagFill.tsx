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
    <path d="M12 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5zm5 10h-2v1a1 1 0 0 0 1.993.117L17 12v-1zm-8 0H7v1a1 1 0 0 0 1.993.117L9 12v-1zm3-8a3 3 0 0 0-2.995 2.824L9 6v2h6V6a3 3 0 0 0-2.824-2.995L12 3z" />
  </svg>
);
const SvgShoppingBagFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgShoppingBagFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgShoppingBagFill;