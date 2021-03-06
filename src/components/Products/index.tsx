import React, { FC } from 'react';
import { Canvas } from '../Canvas';
import { Logo } from '../Logo';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';
import products from '../../data/products.json';

export const Products: FC = () => {

  return (
    <Canvas css={{
        maxWidth: '980px',
        verticalAlign: 'middle',
    }}
    > 
        <Logo />
        <Heading>FRESH FROM THE FARM</Heading>
        <Subheading>Click on an image for store locations</Subheading>
        <div css={{
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridGap: '1rem',
        }}
        >
          {
            products.slice(0,8).map(p => 
              <img 
                src={require(`../../img/${p.imgs[0]}`)} 
                alt={p.name}
                css={{
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                  width: '100%'
                }}
              />
            )
          }
        </div>
        
        <div css={{ height: '100px', position: 'relative'}}>
          <div css={{
              margin: '0',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
          }}>
            <button css={{
              color: '#000 !important',
              backgroundColor: '#f4f1f1 !important',
              padding: '12px 24px !important',
              userSelect: 'none',
              border: 'none',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
            }}>LOAD MORE</button>
          </div>
        </div>

  

    </Canvas>
  );
}
