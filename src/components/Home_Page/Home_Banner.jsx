import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Controller, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {homeBannerData} from '../../Data_Content/homeData'; // Adjust the path
import { homeBannerVideo, homeBannerImg } from '../../assets/images';

const Home_Banner = () => {
    const [activeTab, setActiveTab] = useState(homeBannerData[0].tabId);
    const [imgSwiper, setImgSwiper] = useState(null);
    const [titleSwiper, setTitleSwiper] = useState(null);

    useEffect(() => {
        if (imgSwiper && titleSwiper && imgSwiper.controller && titleSwiper.controller) {
            imgSwiper.controller.control = titleSwiper;
            titleSwiper.controller.control = imgSwiper;
        }
    }, [imgSwiper, titleSwiper]);

    const handleTabClick = (id, index) => {
        setActiveTab(id);
        imgSwiper?.slideToLoop(index); // sync both
        titleSwiper?.slideToLoop(index);
    };

    return (
        <section className="hmBannerSec commSecOverlay d-flex justContCent algnItmCent col-100 floatLft clr relative">
            <div className="hmBannerImg col-100 floatLft clr relative">
                <Swiper
                    modules={[EffectFade, Controller, Navigation, Pagination]}
                    effect="fade"
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    onSwiper={setImgSwiper}
                    className="hmBannerImgSwiper"
                >
                    {homeBannerData.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item.mediaType === 'video' ? (
                                <video autoPlay loop muted playsInline preload="auto">
                                    <source src={item.media} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={item.media} alt={`Banner ${index}`} />
                            )}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <div className="hmBannerTxt d-flex algnItmCent justContCent col-100 floatLft clr absolute z-3">
                <div className="main-wrapper">
                    <div className="hmBanner col-100 floatLft clr relative">
                        <Swiper
                            modules={[EffectFade, Controller]}
                            effect="fade"
                            loop={true}
                            onSwiper={setTitleSwiper}
                            className="hmBannerTitleSwiper"
                        >
                            {homeBannerData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="hmBannerTitle comm_Banner_title spanGredient">
                                        <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                        <div className="hmBannerTabs">
                            <div className="hmBannerTabBtn">
                                <ul className="d-flex algnItmCent">
                                    <ul className="d-flex algnItmCent">
                                        {homeBannerData.map((item) => (
                                            <li
                                                key={item.tabId}
                                                className={`tabBtn ${activeTab === item.tabId ? 'active' : ''}`}
                                                onClick={() => handleTabClick(item.tabId)}
                                            >
                                                {item.tabLabel}
                                            </li>
                                        ))}
                                    </ul>

                                </ul>
                            </div>
                            <div className="hmBannerTabCont">
                                {homeBannerData.map((item) => (
                                    <div
                                        key={item.tabId}
                                        id={item.tabId}
                                        className={`tab-content ${activeTab === item.tabId ? 'active' : ''}`}
                                    >
                                        <div className="hmbanTabSearch d-flex algnItmCent">
                                            <input type="search" placeholder={item.searchPlaceholder} />
                                            <button>
                                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.875 22.9446L17.3438 18.2134" stroke="white"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.4583 20.7694C16.0607 20.7694 19.7917 16.8738 19.7917 12.0683C19.7917 7.26285 16.0607 3.36725 11.4583 3.36725C6.85596 3.36725 3.125 7.26285 3.125 12.0683C3.125 16.8738 6.85596 20.7694 11.4583 20.7694Z"
                                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_Banner;
