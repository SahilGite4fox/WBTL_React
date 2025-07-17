import React from 'react';
import CommonTitle from '../common/CommonTitle';
import { Link } from 'react-router-dom';

const HomeWbtlQuality = () => {
    return (
        <section className="wbtlQualitySec sv-secGap col-100 floatLft clr relative">
            <div className="main-wrapper">
                <div className="wbtlQualityCont col-100 clr relative">
                    <div className="wbtlQualityTitle spanGredient col-100 floatLft clr relative textCenter">
                            <CommonTitle title="*WBTL INDIA* has access to full testing capabilities and quality
                            control systems, and can independently complete precision measurement" />
                    </div>
                    <div className="commArrBtn col-100 floatLft clr relative">
                        <Link to="/about" className="d-flex algnItmCent justContCent">
                            <span>Explore More</span>
                            <span>
                                <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.80505 12.9377L19.2032 5.63157M19.2032 5.63157L8.90976 1.42655M19.2032 5.63157L14.9982 15.925"
                                        stroke="url(#paint0_linear_265_2712)" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_265_2712" x1="14.3795" y1="6.42687"
                                            x2="3.63822" y2="10.8977" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#43C4A6" />
                                            <stop offset="1" stop-color="#008742" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWbtlQuality
