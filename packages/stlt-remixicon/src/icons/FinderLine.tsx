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
    <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM10.48 4.999 4 5v14h8.746a26.25 26.25 0 0 1-.163-1.02c-.297.013-.491.02-.583.02-2.208 0-4.398-.73-6.555-2.168l1.11-1.664C8.398 15.397 10.208 16 12 16c.133 0 .265-.003.398-.01-.024-.497-.024-1.41.007-1.99H9.5v-1c0-3.275.32-5.94.98-8.001zm2.12 0C11.935 6.582 11.556 9.41 11.51 12h3.123l-.14 1.124a15.979 15.979 0 0 0-.108 2.52c1.013-.3 2.031-.79 3.06-1.476l1.11 1.664c-1.32.88-2.652 1.495-3.993 1.84.057.433.13.876.219 1.327L20 19V5l-7.4-.001zM7 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z" />
  </svg>
);
const SvgFinderLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgFinderLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgFinderLine;
