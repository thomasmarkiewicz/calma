import React, { FC } from 'react';
import { Text} from '../Text';
import { Canvas } from '../Canvas';
import { Logo } from '../Logo';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

export const About: FC = () => {
  return (
    <Canvas css={{
        maxWidth: '980px',
    }}
    > 
        <Logo />
        <Heading>ABOUT CALMA FOODS</Heading>
        <Subheading>We Bring Amish Country Into Your Home</Subheading>

        {/*
        <p>
            <Text>
                It all began in a small store on the northwest side of Chicago. 
                A father and son had an idea of providing all-natural products to consumers. 
                They decided to look for the foods the way their grandparents grew and made it. 
            </Text>
        </p>
        */}

        <p>
            <Text>
                Calma Foods is Chicagoland's food distribution company of Amish and all-natural products. 
            </Text>
        </p>

        <p>
            <Text>
                Brought up on small farms in Poland, we understand that the most natural way 
                to grow food is without pesticides, hormones, and in harmony with mother nature. 
                We continously pursue to find farmers, retailers, and consumers who share
                and appreciate this basic philosophy.
            </Text>
        </p>
        <p>
            <Text>
                We travel weekly to individual farms of the America's Midwest to bring you the 
                finest, freshest, all-natural foods that can only be proven by their taste.
            </Text>
        </p>
        {/*
         <p>
            <Text>
                We believe that food in its natural state with no added preservatives and 
                no harmful chemicals in its soil is the healthiest way of life.
            </Text>
        </p>
        */}
    </Canvas>
  );
}
