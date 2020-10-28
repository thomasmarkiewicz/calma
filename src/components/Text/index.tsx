import React, { FC, HTMLProps } from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../app/Theme';

interface Props extends HTMLProps<HTMLSpanElement> {
    as?: 'div' | 'span' | 'strong' | 'em' | 'label';
  }

export const Text: FC<Props> = ({
  as: asProp = 'span',
  children,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const El = asProp as any;
  return (
    <El
      css={{
        color: theme.colorScheme.onSurface,
        lineHeight: '1.8',
        fontSize: '16px',
        fontWeight: '400',
        textAlign: 'center !important'
      }}
      {...rest}
    >
      {children}
    </El>
  );
}
