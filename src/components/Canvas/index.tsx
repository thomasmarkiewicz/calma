import React, { FC } from 'react';
import { Theme } from '../../app/Theme';
import { useTheme } from 'emotion-theming';

export const Canvas: FC = ({children, ...rest}) => {
  const theme = useTheme<Theme>();
  return (
    <div css={{
        paddingTop: '64px !important',
        paddingBottom: '64px !important',
        paddingRight: '16px',
        paddingLeft: '16px',
        maxWidth: '980px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSiding: 'inherit',
        lineHeight: '1.8',
        backgroundColor: theme.canvasColor,
    }}
    {...rest}
    >
        {children}
    </div>
  );
}
