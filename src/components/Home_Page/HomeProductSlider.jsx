import React from 'react';
import CommonTitle from '../common/CommonTitle';
import ProductSlider from '../common/ProductSlider';

const HomeProductSlider = () => {
    return (
        <section className="productSliderSec sv-secGap col-100 floatLft clr relative">
            <div className="wrapper1440">
                <div className="productSliderCont col-100 floatLft clr relative">
                    <div
                        className="productSliderTitle spanGredient comm_Title black col-100 floatLft clr relative textCenter">

                        <CommonTitle title="*Product* Range" />
                    </div>
                    <div className="productSliderDesc col-100 floatLft clr textCenter">
                        <p>With our comprehensive suite of products, we hope to make India’s roads safer for both
                            drivers and pedestrians.</p>
                    </div>
                    <ProductSlider />
                </div>
            </div>
        </section>
    )
}

export default HomeProductSlider
