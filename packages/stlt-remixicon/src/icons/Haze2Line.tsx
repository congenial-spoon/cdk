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
    <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM17 7a5 5 0 0 1 0 10c-1.844 0-3.51-1.04-5-3.122C10.51 15.96 8.844 17 7 17A5 5 0 0 1 7 7c1.844 0 3.51 1.04 5 3.122C13.49 8.04 15.156 7 17 7zM7 9a3 3 0 0 0 0 6c1.254 0 2.51-.875 3.759-2.854l.089-.147-.09-.145c-1.197-1.896-2.4-2.78-3.601-2.85L7 9zm10 0c-1.254 0-2.51.875-3.759 2.854l-.09.146.09.146c1.198 1.896 2.4 2.78 3.602 2.85L17 15a3 3 0 0 0 0-6zm-5-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);
const SvgHaze2Line = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgHaze2Line" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgHaze2Line;
