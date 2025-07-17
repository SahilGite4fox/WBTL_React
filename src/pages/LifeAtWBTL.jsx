import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import { careerbanner, careerslide1, careerslide2 } from '../assets/images';
import CommonTitle from '../components/common/CommonTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { lifeAtWBTLContent, careerSliderData } from '../Data_Content/LifeAtWBTL';

const LifeAtWBTL = () => {
    return (
        <main className="col-100 floatLft clr relative">
            <PageBanner
                title="Careers"
                bannerImg={careerbanner}
                breadcrumbs={[
                    { label: 'Careers' },  // no `to` = just text
                    { label: 'Life at WBTL', active: true }, // last breadcrumb
                ]}
            />
            <section className="psCareerWbtl col-100 floatLft relative clr sv-secGap">
                <div className="wrapper1080">
                    <div className="psCareerInfo col-100 floatLft relative clr">
                        <div className="psCareerTitle comm_Title black col-100 floatLft clr textCenter margiBot3em spanGredient">
                            <CommonTitle title={lifeAtWBTLContent.titleMain} />
                        </div>
                        <CommonTitle title={lifeAtWBTLContent.titleSub} />
                        {lifeAtWBTLContent.paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                        <div className="commSolidBtn col-100 floatLft careerjoinBtn textCenter">
                            <Link to={lifeAtWBTLContent.button.link}>{lifeAtWBTLContent.button.label}</Link>
                        </div>
                    </div>
                </div>
                <div className="wrapper1500">
                    <Swiper
                        className="psCareerSlider col-100 floatLft clr relative"
                        cssMode={true}
                        slidesPerView={2}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                    >
                        {careerSliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.image} alt={item.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </section>
        </main>

    )
}

export default LifeAtWBTL
