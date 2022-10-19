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
    <path d="m8.646 17.26 3.392 2.162 3.392-2.161 1.86 1.185-5.252 3.346-5.252-3.346 1.86-1.185zm-.877-8.28 2.393-1.553-2.425-1.574L5.28 7.37l2.49 1.61zm1.84 1.19L12 11.719l2.39-1.547L12 8.619l-2.391 1.552zm4.231 2.74 2.424 1.568 2.45-1.502-2.485-1.612-2.389 1.545zM12 6.234l4.237-2.748L22.46 7.33l-4.392 2.843 4.393 2.85-6.226 3.819L12 14.1l-4.235 2.74-6.23-3.817 4.396-2.851L1.539 7.33l6.224-3.843L12 6.235zm1.837 1.192L16.23 8.98l2.489-1.61-2.456-1.517-2.426 1.574zM10.16 12.91l-2.39-1.546-2.486 1.613 2.451 1.502 2.425-1.569z" />
  </svg>
);
const SvgDropboxLine = React.forwardRef<SVGSVGElement, Omit<IconBasePropsType, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgDropboxLine" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);
export default SvgDropboxLine;
