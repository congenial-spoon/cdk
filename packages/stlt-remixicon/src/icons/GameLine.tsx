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
    <path d="M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 2a8 8 0 1 0 4.697 14.477l.208-.157-6.32-6.32 6.32-6.321-.208-.156a7.964 7.964 0 0 0-4.394-1.517L12 4zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);
const SvgGameLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgGameLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgGameLine;
