import * as React from 'react';
import type { ButtonProps } from './button.type';
import { cx } from '@cuiller/shared-utils';

export const Button = React.forwardRef<unknown, ButtonProps>((props, ref) => {
  const {
    className,
    styles,
    size,
    children,
    type = 'button',
    ...restProps
  } = props;
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <button
      type={type}
      className={cx(className)}
      ref={buttonRef}
      {...restProps}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
