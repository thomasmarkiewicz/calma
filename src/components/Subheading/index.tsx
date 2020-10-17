import React, { FC, HTMLProps } from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from '../../app/Theme';

interface Props extends HTMLProps<HTMLSpanElement> {
    as?: 'div' | 'span' | 'strong' | 'em' | 'label';
  }

export const Subheading: FC<Props> = ({
  as: asProp = 'div',
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
        fontWeight: '500',
        fontStyle: 'italic',
        textAlign: 'center !important',
        margin: '14px'
      }}
      {...rest}
    >
      {children}
    </El>
  );
}
