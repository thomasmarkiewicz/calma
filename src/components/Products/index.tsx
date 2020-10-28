import React, { FC } from 'react';
import { Text} from '../Text';
import { Canvas } from '../Canvas';
import { Logo } from '../Logo';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

export const Products: FC = () => {
  return (
    <Canvas css={{
        
        maxWidth: '980px',
    }}
    > 
        <Logo />
        <Heading>FRESH FROM THE FARM</Heading>
        <Subheading>All-natural products we bring to you this week.</Subheading>
        <Subheading>Click on an image for more info and store locations.</Subheading>

        <p>
            <Text>
                TODO...
            </Text>
        </p>

    </Canvas>
  );
}
