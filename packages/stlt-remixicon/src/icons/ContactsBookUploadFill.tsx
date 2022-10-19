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
    <path d="M7 2v20H3V2h4zm12.005 0C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9V2h10.005zM15 8l-4 4h3v4h2v-4h3l-4-4zm9 4v4h-2v-4h2zm0-6v4h-2V6h2z" />
  </svg>
);
const SvgContactsBookUploadFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgContactsBookUploadFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgContactsBookUploadFill;
