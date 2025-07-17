import React from 'react';
import {hmNews} from '../../assets/images';

const HomeNews = () => {
    return (
        <section className="newsSec sv-secGap col-100 floatLft clr relative">
            <div className="main-wrapper">
                <div className="newsSecCont col-100 floatLft clr relative">
                    <div className="newsTitle comm_Title black col-100 floatLft clr">
                        <h4>News</h4>
                    </div>
                    <div className="newsPrtSec d-flex col-100 floatLft clr">
                        <div className="newsPrtSecLft">
                            <div className=""><img src={hmNews} alt="News" /></div>
                        </div>
                        <div className="newsPrtSecRgt col-100">
                            <ul className="col-100">
                                <li className="d-flex algnItmCent col-100">
                                    <span className="newsDate">May, 07, 2025</span>
                                    <span className="icon">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="14" cy="14" r="13.5" fill="white" stroke="#DFDFDF" />
                                            <path
                                                d="M12.1587 18.8215C12.3702 19.0595 12.7132 19.0595 12.9247 18.8215L16.524 14.7716C17.1585 14.0577 17.1587 12.9004 16.5245 12.1862L12.9653 8.17852C12.7538 7.94049 12.4108 7.94049 12.1993 8.17852C11.9877 8.41654 11.9877 8.80246 12.1993 9.04049L15.7593 13.0461C15.9709 13.2842 15.9709 13.6701 15.7593 13.9081L12.1587 17.9595C11.9471 18.1975 11.9471 18.5834 12.1587 18.8215Z"
                                                fill="url(#paint0_linear_265_2860)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_265_2860" x1="15.74" y1="12.7065"
                                                    x2="12.6571" y2="12.7028" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#43C4A6" />
                                                    <stop offset="1" stop-color="#008742" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p>This is dummy text will be replaced with original content. This is dummy text
                                        will be replaced.</p>
                                </li>
                                <li className="d-flex algnItmCent col-100">
                                    <span className="newsDate">May, 02, 2025</span>
                                    <span className="icon">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="14" cy="14" r="13.5" fill="white" stroke="#DFDFDF" />
                                            <path
                                                d="M12.1587 18.8215C12.3702 19.0595 12.7132 19.0595 12.9247 18.8215L16.524 14.7716C17.1585 14.0577 17.1587 12.9004 16.5245 12.1862L12.9653 8.17852C12.7538 7.94049 12.4108 7.94049 12.1993 8.17852C11.9877 8.41654 11.9877 8.80246 12.1993 9.04049L15.7593 13.0461C15.9709 13.2842 15.9709 13.6701 15.7593 13.9081L12.1587 17.9595C11.9471 18.1975 11.9471 18.5834 12.1587 18.8215Z"
                                                fill="url(#paint0_linear_265_2860)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_265_2860" x1="15.74" y1="12.7065"
                                                    x2="12.6571" y2="12.7028" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#43C4A6" />
                                                    <stop offset="1" stop-color="#008742" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p>This is dummy text will be replaced with original content. </p>
                                </li>
                                <li className="d-flex algnItmCent col-100">
                                    <span className="newsDate">May, 07, 2025</span>
                                    <span className="icon">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="14" cy="14" r="13.5" fill="white" stroke="#DFDFDF" />
                                            <path
                                                d="M12.1587 18.8215C12.3702 19.0595 12.7132 19.0595 12.9247 18.8215L16.524 14.7716C17.1585 14.0577 17.1587 12.9004 16.5245 12.1862L12.9653 8.17852C12.7538 7.94049 12.4108 7.94049 12.1993 8.17852C11.9877 8.41654 11.9877 8.80246 12.1993 9.04049L15.7593 13.0461C15.9709 13.2842 15.9709 13.6701 15.7593 13.9081L12.1587 17.9595C11.9471 18.1975 11.9471 18.5834 12.1587 18.8215Z"
                                                fill="url(#paint0_linear_265_2860)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_265_2860" x1="15.74" y1="12.7065"
                                                    x2="12.6571" y2="12.7028" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#43C4A6" />
                                                    <stop offset="1" stop-color="#008742" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p>This is dummy text will be replaced with original content. This is dummy text
                                        will be replaced.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeNews
