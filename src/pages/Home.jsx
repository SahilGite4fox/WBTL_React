import React from 'react';

import Home_Banner from '../components/Home_Page/Home_Banner';
import Home_Second_Sec from '../components/Home_Page/Home_Second_Sec';
import Product_Portfolio from '../components/Home_Page/Product_Portfolio';
import SprecificationStrip from '../components/Home_Page/SprecificationStrip';
import ProductSlider from '../components/common/ProductSlider';
import HomeProductSlider from '../components/Home_Page/HomeProductSlider';
import HomeWbtlQuality from '../components/Home_Page/HomeWbtlQuality';
import HomeNews from '../components/Home_Page/HomeNews';
import HomeEnhanceVcl from '../components/Home_Page/HomeEnhanceVcl';

const Home = () => {
    return (
        <main className="col-100 floatLft clr relative">
            <Home_Banner />
            <Home_Second_Sec />
            <Product_Portfolio />
            <SprecificationStrip />
            <HomeProductSlider />
            <HomeWbtlQuality />
            <HomeNews />
            <HomeEnhanceVcl />
        </main>
    )
}

export default Home
