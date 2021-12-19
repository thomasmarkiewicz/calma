import React from 'react';
import { About} from '../../components/About';
import { Contact } from '../../components/Contact';
import { ParallaxIntro } from '../../components/ParallaxIntro';
import { ParallaxProducts } from '../../components/ParallaxProducts';
import { ParallaxContact } from '../../components/ParallaxContact';
import { Statistics } from '../../components/Statistics';
import { Products } from '../../components/Products';
import { Navbar } from '../../components/Navbar';
import { ParallaxStores } from '../../components/ParallaxStores';
import { Stores } from '../../components/Stores';

export const Home = () => (
    <div id="home">
        <Navbar />
        <ParallaxIntro  />
        <About />
        <Statistics />
        <ParallaxProducts />
        <Products />
        <ParallaxStores />
        <Stores />
        <ParallaxContact />
        <Contact />
        <div css={{position: "relative", height: 500}} />
    </div>
);
