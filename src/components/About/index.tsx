import React, { FC } from 'react';
import { Text} from '../Text';
import { Canvas } from '../Canvas';
import { Logo } from '../Logo';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

export const About: FC = () => {
  return (
    <Canvas css={{
        height: '370px',
        maxWidth: '980px',
    }}
    > 
        <Logo />
        <Heading>ABOUT CALMA FOODS</Heading>
        <Subheading>We Bring Amish Country Into Your Home</Subheading>
        <p>
            <Text>
                It all began in a small store on the northwest side of Chicago. 
                A father and son had an idea of providing all-natural products to consumers. 
                They decided to look for the foods the way their grandparents grew and made it. 
            </Text>
        </p>
        <p>
            <Text>
                Brought up on small farms in Poland, we understood that the most natural way 
                is to grow foods without pesticides, hormones, and with as little interference 
                against mother nature as possible. With those thoughts, we pursued to find farmers, 
                retailers, and found Calma Foods.
            </Text>
        </p>
        <p>
            <Text>
                Calma Foods is a Chicagoland food distribution company of Amish made all-natural products. 
                Settled in America's Midwest hills and valleys, we bring the old fashioned and 
                all-natural way of farming to you. We travel to individual farms weekly to bring back 
                the freshest all natural foods that can only be proven by their taste.
            </Text>
        </p>
        <p>
            <Text>
                We believe that food in its natural state with no added preservatives and 
                no harmful chemicals in its soil is the healthiest way of life.
            </Text>
        </p>
    </Canvas>
  );
}
