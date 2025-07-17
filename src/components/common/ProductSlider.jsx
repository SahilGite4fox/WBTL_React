import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard'; // adjust path as needed
import { allProducts } from '../../Data_Content/ProductContent';

const ProductSlider = () => {
  // You can limit slides if needed, e.g., first 4 products
  const productSlides = allProducts.slice(0, 4);

  return (
    <>
      <Swiper
        className="productContSlider col-100 floatLft clr relative"
        cssMode={true}
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
      >
        {productSlides.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductCard id={item.id} image={item.image} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="productSliderBtn commArrBtn black col-100 floatLft clr relative">
        <Link to="/product" className="d-flex algnItmCent justContCent">
          <span>View All</span>
          <span>
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.80505 12.9377L19.2032 5.63157M19.2032 5.63157L8.90976 1.42655M19.2032 5.63157L14.9982 15.925"
                stroke="url(#paint0_linear_265_2712)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="paint0_linear_265_2712" x1="14.3795" y1="6.42687" x2="3.63822" y2="10.8977" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#43C4A6" />
                  <stop offset="1" stopColor="#008742" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
};

export default ProductSlider;
