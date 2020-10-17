import React, { FC } from 'react';

export const Canvas: FC = ({children, ...rest}) => {
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
        lineHeight: '1.8'
    }}
    {...rest}
    >
        {children}
    </div>
  );
}
