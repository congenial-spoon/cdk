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
    <path d="M21 3v18H3V3h18zm-8.001 3h-2L6.6 17h2.154l1.199-3h4.09l1.201 3h2.155l-4.4-11zm-1 2.885L13.244 12h-2.492l1.247-3.115z" />
  </svg>
);
const SvgCharacterRecognitionFill = React.forwardRef<
  SVGSVGElement,
  Omit<IconBasePropsType, 'name'>
>((props, ref) => {
  return (
    <IconBase name="SvgCharacterRecognitionFill" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});
export default SvgCharacterRecognitionFill;
