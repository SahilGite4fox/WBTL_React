import React, { useState } from 'react';
import {
    Product_WCBS1, Product_EPB, Product_NLFC, Product_Floating_Caliper,
    Product_Fixed_caliper1, Product_WCBS, Product_Aluminum_knuckle, Product_ADAS
} from '../assets/images';
import CommonTitle from '../components/common/CommonTitle';
import ProductCard from '../components/common/ProductCard';
import { tabButtons, allProducts } from '../Data_Content/ProductContent';

const Product = () => {
    const [activeTab, setActiveTab] = useState("tab-0");

    const filteredProducts = allProducts.filter(p => p.tabs.includes(activeTab));

    return (
        <main className="col-100 floatLft clr relative">
            <section className="breadcrumb_2 col-100 floatLft clr relative">
                <div className="wrapper1440">
                    <ul className="d-flex algnItmCent">
                        <li><a href="/">Home</a></li>
                        <li>/</li>
                        <li><a href="/product" className="active">Products</a></li>
                    </ul>
                </div>
            </section>

            <section className="productListSec sv-secGap col-100 floatLft clr relative">
                <div className="wrapper1440">
                    <div className="productSliderCont col-100 floatLft clr relative">
                        <div className="productSliderTitle spanGredient comm_Title black col-100 floatLft clr relative textCenter">
                            <CommonTitle title="*Our* Products" />
                        </div>

                        <div className="tabBts col-100 floatLft clr relative">
                            <ul className="d-flex algnItmCent justContCent">
                                {tabButtons.map(btn => (
                                    <li
                                        key={btn.id}
                                        className={`tabBtn ${activeTab === btn.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(btn.id)}
                                    >
                                        {btn.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tab-contentSec col-100 floatLft clr relative">
                            <div className="tab-content col-100 floatLft clr relative active">
                                {filteredProducts.map((product, i) => (
                                    <ProductCard key={i} id={product.id} image={product.image} title={product.title} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;
