import React from 'react';
import { specificationData } from '../../Data_Content/homeData';

const SprecificationStrip = () => {
    return (
        <section className="sprecificationStrip col-100 floatLft clr relative">
            <div className="wrapper1300">
                <ul className="sprecificationStripCont d-flex algnItmCent justContSpBtw col-100 floatLft clr relative">
                    {specificationData.map((item, index) => (
                        <li key={index}>
                            <div className="sprecificationSecCont d-flex algnItmCent">
                                <div className="sprecificationImg">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="sprecificationCont">
                                    <div className="sprecificationContTitle">
                                        <h6>{item.title}</h6>
                                    </div>
                                    <div className="sprecificationContVal d-flex algnItmEnd">
                                        <span>{item.value}</span>
                                        {item.unit && <p>{item.unit}</p>}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SprecificationStrip;
