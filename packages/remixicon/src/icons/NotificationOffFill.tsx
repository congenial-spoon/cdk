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
    <path d="M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.324-2.584.899-3.687L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L18.586 20zM20 15.786 7.559 3.345A8 8 0 0 1 20 10v5.786zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
  </svg>
);
const SvgNotificationOffFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgNotificationOffFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgNotificationOffFill;
