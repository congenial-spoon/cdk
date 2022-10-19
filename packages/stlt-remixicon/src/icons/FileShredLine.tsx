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
    <path d="M6 12h12V8h-4V4H6v8zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2h2zm-1 4h2v6H3v-6zm16 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-4 0h2v6H7v-6z" />
  </svg>
);
const SvgFileShredLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgFileShredLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgFileShredLine;
