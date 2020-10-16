import React, { FC, HTMLProps } from 'react';
import '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../app/Theme';

export const Scaffold: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  return (
    <div
      css={{
        backgroundColor: theme.scaffoldBackgroundColor,
        width: '100%',
        height: '100vh',
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
