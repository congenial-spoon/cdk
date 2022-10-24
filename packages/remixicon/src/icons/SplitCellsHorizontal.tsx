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
    <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2V5zm4 4 3 3-3 3v-2H9v2l-3-3 3-3v2h6V9z" />
  </svg>
);
const SvgSplitCellsHorizontal = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgSplitCellsHorizontal" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgSplitCellsHorizontal;