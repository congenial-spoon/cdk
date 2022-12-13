import * as React from 'react';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'ghost'
  | 'link'
  | 'text'
  | 'danger';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export type ButtonSizeType = 'default' | 'small' | 'large';

export interface ButtonProps {
  className?: string;
  styles?: React.CSSProperties;
  autofocus?: boolean;
  size?: ButtonSizeType;
  children?: React.ReactNode;
  type?: ButtonHTMLType;
}
