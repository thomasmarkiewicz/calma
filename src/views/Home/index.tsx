import React from 'react';
import { About} from '../../components/About';
import { Contact } from '../../components/Contact';
import { ParallaxIntro } from '../../components/ParallaxIntro';
import { ParallaxProducts } from '../../components/ParallaxProducts';
import { ParallaxContact } from '../../components/ParallaxContact';
import { Statistics } from '../../components/Statistics';
import { Products } from '../../components/Products';
import { Navbar } from '../../components/Navbar';

export const Home = () => (
    <div id="home">
        <Navbar />
        <ParallaxIntro  />
        <About />
        <Statistics />
        <ParallaxProducts />
        <Products />
        <ParallaxContact />
        <Contact />
        <div css={{position: "relative", height: 500}} />
    </div>
);
