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
    <path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18zM10.962 8.1l-.447-.688C8.728 8.187 7.5 9.755 7.5 11.505c0 .995.277 1.609.792 2.156.324.344.837.589 1.374.589a1.75 1.75 0 0 0 1.75-1.75c0-.92-.711-1.661-1.614-1.745a2.07 2.07 0 0 0-.479.01v-.092c.006-.422.092-1.633 1.454-2.466l.185-.107-.447-.688zm4.553-.688c-1.787.775-3.015 2.343-3.015 4.093 0 .995.277 1.609.792 2.156.324.344.837.589 1.374.589a1.75 1.75 0 0 0 1.75-1.75c0-.92-.711-1.661-1.614-1.745a2.07 2.07 0 0 0-.479.01c0-.313-.029-1.762 1.639-2.665z" />
  </svg>
);
const SvgChatQuoteFill = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgChatQuoteFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgChatQuoteFill;
