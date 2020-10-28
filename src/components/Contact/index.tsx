import React, { FC } from 'react';
import { Text} from '../Text';
import { Canvas } from '../Canvas';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

export const Contact: FC = () => {
  return (
    <Canvas css={{
        maxWidth: '980px',
    }}
    > 
        <Heading>FEEDBACK</Heading>
        <Subheading>Want to sell or supply our products?</Subheading>
        <Subheading>We'd love to hear from you!</Subheading>

        <p>
            <Text>
                Chicago, IL
            </Text>
        </p>

        <p>
            <Text>
                Phone: xxx-xxx-xxxx
            </Text>
        </p>
        <p>
            <Text>
                Email: mail@mail.com
            </Text>
        </p>

    </Canvas>
  );
}
