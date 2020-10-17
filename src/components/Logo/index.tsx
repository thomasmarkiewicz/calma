import React, { FC } from 'react';
import facepaint from 'facepaint';

const breakpoints = [576, 2000]

const mq = facepaint(
  breakpoints.map(bp => `@media only screen and (max-width: 600px)`)
);

export const Logo: FC = () => {
  return (
    <div css={{
        whiteSpace: 'nowrap',
        position: 'absolute',
        top: '48%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        boxSizing: 'inherit'
    }}>
        <span css={{
            letterSpacing: '10px',
            color: '#fff !important',
            backgroundColor: '#000 !important',
            padding: '12px 24px !important',
            textAlign: 'center',
            fontSize: '24px !important',
            fontWeight: 600,
            opacity: 0.6,
        }}>
            CALMA
            <span css={mq({
                display: ['none', 'inherit'],
            })}> </span>
            <span css={mq({
                display: ['inherit', 'none'],
            })}> OPTIMAL </span>
            FOODS
        </span>
    </div>
  );
}
