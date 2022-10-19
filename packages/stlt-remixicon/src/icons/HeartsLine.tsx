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
    <path d="M19.243 4.757a6.002 6.002 0 0 1 1.65 5.38c.568.16 1.106.463 1.554.908a3.55 3.55 0 0 1 0 5.047L17 21.5l-3.022-3L11 21.485l-8.48-8.492a6 6 0 0 1 8.481-8.464 5.998 5.998 0 0 1 8.242.228zm-6.281 7.708a1.55 1.55 0 0 0 0 2.208L17 18.682l4.038-4.009a1.55 1.55 0 0 0 0-2.208 1.613 1.613 0 0 0-2.268.002l-1.772 1.754-1.407-1.396-.363-.36a1.613 1.613 0 0 0-2.266 0zm-8.79-6.293a4 4 0 0 0-.192 5.451L11 18.654l1.559-1.562-1.006-1a3.55 3.55 0 0 1 0-5.047 3.615 3.615 0 0 1 5.084 0l.363.36.363-.36c.425-.421.93-.715 1.465-.882a4.001 4.001 0 0 0-6.491-4.146l-1.335 1.198-1.336-1.197a3.999 3.999 0 0 0-5.494.154z" />
  </svg>
);
const SvgHeartsLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgHeartsLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgHeartsLine;
