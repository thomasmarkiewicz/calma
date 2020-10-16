import React, { FC } from 'react';
import facepaint from 'facepaint';
import amish from '../../img/bg_istockphoto-123099333-1024x1024.jpg';

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media only screen and (mix-width: ${bp}px)`)
);

export const ParallaxIntro: FC = () => {
  return (
    <div css={mq({
        backgroundImage: `url(${amish})`,
        height: 'calc(100vh)',
        backgroundAttachment: 'fixed',
        backgroundPosition: ['40% 50%', '45% 50%', '50% 50%', '50% 50%'],
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.75,
    })} />
  );
}
