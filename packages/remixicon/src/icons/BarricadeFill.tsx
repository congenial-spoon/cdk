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
    <path d="M19.556 19H21v2H3v-2h1.444l.89-4h13.333l.889 4zM17.333 9l.89 4H5.777l.889-4h10.666zm-.444-2H7.11l.715-3.217A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783L16.889 7z" />
  </svg>
);
const SvgBarricadeFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgBarricadeFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgBarricadeFill;