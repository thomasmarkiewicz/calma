import React, { FC } from 'react';

export const Canvas: FC = ({children, ...rest}) => {
  return (
    <div css={{
        margin: '8px'
    }}
    {...rest}
    >
        {children}
    </div>
  );
}
