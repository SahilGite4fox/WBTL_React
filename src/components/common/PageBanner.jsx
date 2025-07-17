import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, bannerImg, breadcrumbs = [] }) => {
    return (
        <section className="subPgCommBanner sv-secGap col-100 floatLft clr relative">
            <div className="main-wrapper">
                <div className="subPgCommBannerTxt col-100 floatLft clr relative">
                    <div className="comm_Banner_title col-100 floatLft clr">
                        <h2>{title}</h2>
                    </div>
                    <div className="breadcrumb col-100 floatLft clr">
                        <ul className="d-flex algnItmCent">
                            <li><Link to="/">Home</Link></li>
                            {breadcrumbs.map((item, i) => (
                                <React.Fragment key={i}>
                                    <li>&gt;</li>
                                    <li>
                                        {item.to ? (
                                            <Link to={item.to} className={item.active ? 'active' : ''}>
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <Link className={item.active ? 'active' : ''}>
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <img src={bannerImg} alt={title} className="absolute floatLft clr" />
        </section>
    );
};

export default PageBanner;
