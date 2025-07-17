import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CommonTitle from '../components/common/CommonTitle';
import ProductSlider from '../components/common/ProductSlider';
import { allProducts } from '../Data_Content/ProductContent';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = allProducts.find(p => p.id === Number(productId));

    if (!product) {
        return <div className="wrapper1440">Product not found.</div>;
    }

    return (
        <main className="col-100 floatLft clr relative">
            <section className="breadcrumb_2 col-100 floatLft clr relative">
                <div className="wrapper1440">
                    <ul className="d-flex algnItmCent">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><Link to="/product">Products</Link></li>
                        <li>/</li>
                        <li><Link className="active">{product.title}</Link></li>
                    </ul>
                </div>
            </section>

            <section className="productDetailsSec sv-secGap col-100 floatLft clr relative">
                <div className="wrapper1500">
                    <div className="productDetailsCont d-flex col-100 floatLft clr relative">
                        {/* Product Image Section */}
                        <div className="productDetailSliderSec tab-content active">
                            <div className="productDetailSliderMain relative">
                                <div className="productDetailSliderMainImg">
                                    <img src={product.image} alt={product.title} />
                                </div>
                            </div>
                            <div className="productDetailSliderSub">
                                <img src={product.image} alt={product.title} />
                            </div>
                        </div>

                        {/* Product Info Section */}
                        <div className="productDetailsInfo">
                            <div className="productDetailsTitle">
                                <h2>{product.title}</h2>
                            </div>

                            <div className="productDetailsDesc tab-desc active">
                                <p>Description:</p>
                                {product.description?.length > 0 ? (
                                    <ul>
                                        {product.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No description available.</p>
                                )}

                            </div>

                            {/* <div className="productDetailsVariants">
                                <p>Variants</p>
                                <ul className="productDetailsVariantsTabBtn d-flex algnItmCent flxFlwRwWrp">
                                    {product.tabs.map((tabId, index) => (
                                        <li key={index} className="tabBtn">{tabId}</li>
                                    ))}
                                </ul>
                            </div> */}

                            <div className="productDetailsSolidBtn commSolidBtn">
                                <Link className="floatLft" to="/contact">Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="productSliderSec sv-secGap col-100 floatLft clr relative">
                <div className="wrapper1440">
                    <div className="productSliderCont col-100 floatLft clr relative">
                        <div className="productSliderTitle comm_Title black spanGredient col-100 floatLft clr relative textCenter">
                            <CommonTitle title="*Related* Products" />
                        </div>
                        <ProductSlider />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
