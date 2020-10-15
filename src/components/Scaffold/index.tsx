import React, { FC, HTMLProps } from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../app/Theme';

export const Scaffold: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const El = 'div' as any;
  return (
    <El
      css={{
        backgroundColor: theme.scaffoldBackgroundColor,
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
      {...rest}
    >
      {children}
    </El>
  );
}
