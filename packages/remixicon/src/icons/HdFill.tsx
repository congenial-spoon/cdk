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
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.5 8.25V9H6v6h1.5v-2.25h2V15H11V9H9.5v2.25h-2zm7-.75H16a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1.5v-3zM13 9v6h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3z" />
  </svg>
);
const SvgHdFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgHdFill" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});
export default SvgHdFill;
