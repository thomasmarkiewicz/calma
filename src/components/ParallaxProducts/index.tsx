import React, { FC } from 'react';
import facepaint from 'facepaint';
import eggs from '../../img/bg_eggs_in_basket_even_tone.jpg';

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media only screen and (mix-width: ${bp}px)`)
);

export const ParallaxProducts: FC = () => {
  return (
    <div id="products" css={mq({
        backgroundImage: `url(${eggs})`,
        minHeight: '360px',
        backgroundAttachment: 'fixed',
        backgroundPosition: ['40% 50%', '45% 50%', '50% 50%', '50% 50%'],
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
            }}>PRODUCTS</span>
        </div>

    </div>
  );
}
