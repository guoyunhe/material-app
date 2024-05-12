import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface MaterialAppProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function MaterialApp({ children, className, style }: MaterialAppProps) {
  return <MaterialApp className={cn('material-app', className)} style={style}>{children}</MaterialApp>;
}
