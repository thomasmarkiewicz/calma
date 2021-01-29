import React, { FC } from 'react';
import facepaint from 'facepaint';
//import img from '../../img/bg_food_roast.jpg';
import img from '../../img/bg_chicken_free_wheels.jpg';
//import img from '../../img/bg_farm.jpg';

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media only screen and (mix-width: ${bp}px)`)
);

export const ParallaxContact: FC = () => {
  return (
    <div id="contact" css={mq({
        backgroundImage: `url(${img})`,
        minHeight: '360px',
        backgroundAttachment: 'fixed',
        backgroundPosition: ['70% 50%', '45% 50%', '50% 50%', '50% 50%'],
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.75,
        boxSizing: 'inherit',
        position: 'relative',
    })}>
        <div css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            boxSizing: 'inherit',
            display: 'block',
            color: '#777',
            lineHeight: '1.8'
        }}>
            <span css={{
                letterSpacing: '10px',
                color: '#fff !important',
                fontSize: '36px !important',
                fontWeight: 500,
                lineHeight: '1.8',
                position: 'relative',
            }}>CONTACT</span>
        </div>

    </div>
  );
}
