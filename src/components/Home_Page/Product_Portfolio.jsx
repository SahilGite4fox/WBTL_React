import React, { useEffect } from 'react';
import CommonTitle from '../common/CommonTitle';
import { productParts, carImages } from '../../Data_Content/homeData';

const Product_Portfolio = () => {
    useEffect(() => {
        const supportsHover = window.matchMedia('(hover: hover)').matches;
        if (!supportsHover) return;

        const allBtns = document.querySelectorAll('.btnBox');
        const allParts = document.querySelectorAll('.carPartsImg');
        const solidCarImg = document.querySelector('.carSolidImg');

        function toggleParts(show, targetClass) {
            allParts.forEach(p => {
                p.style.opacity = '0';
                p.style.visibility = 'hidden';
            });
            solidCarImg.style.opacity = show ? '0' : '1';
            solidCarImg.style.visibility = show ? 'hidden' : 'visible';

            if (show && targetClass) {
                const part = document.querySelector(`.${targetClass}`);
                if (part) {
                    part.style.opacity = '1';
                    part.style.visibility = 'visible';
                }
            }
        }

        allBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                const partKey = Array.from(btn.classList).find(cls => cls.includes('Btn'));
                const targetClass = partKey?.replace(/Btn$/, '').replace(/(\d+)\1$/, '$1');
                if (targetClass) toggleParts(true, targetClass);


                const arrow = btn.querySelector('.partArrow');
                if (arrow) {
                    arrow.style.opacity = '1';
                    arrow.style.visibility = 'visible';
                }
            });

            btn.addEventListener('mouseleave', () => {
                toggleParts(false);
                const arrow = btn.querySelector('.partArrow');
                if (arrow) {
                    arrow.style.opacity = '0';
                    arrow.style.visibility = 'hidden';
                }
            });
        });

        return () => {
            allBtns.forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
        };
    }, []);

    const groupedParts = [
        productParts.slice(0, 2),
        productParts.slice(2, 4),
        productParts.slice(4, 6),
        productParts.slice(6, 8)
    ];

    return (
        <section className="productPortfolio sv-secGap col-100 floatLft clr relative">
            <div className="wrapper1300">
                <div className="productPortfolioCont col-100 floatLft clr relative">
                    <div className="productPortfolioContTitle comm_Title spanGredient textCenter col-100 floatLft clr">
                        <CommonTitle title="*WBTL’s India’s* Product Portfolio" />
                    </div>
                </div>

                <div className="psProductBox col-100 floatLft relative clr">
                    <div className="productPartImg col-100 floatLft relative clr">
                        <div className="carPlatformStage col-100 floatLft relative clr">
                            <img src={carImages.platform} alt="" className="carPlatorm" />
                            <div className="carPartsVisual col-100 floatLft absolute clr">
                                <ul className="col-100 floatLft relative">
                                    {groupedParts.map((row, rowIndex) => (
                                        <li key={`row-${rowIndex}`} className={`btnRow${rowIndex + 1}`}>
                                            {row.map((part, i) => (
                                                <div
                                                    key={part.id}
                                                    className={`crPart${parseInt(part.id)}${parseInt(part.id)}Btn btnBox btnBox${i + 1} relative`}
                                                >

                                                    <a href="./product_details.html" className="floatLft relative">
                                                        {part.position === 'left' && (
                                                            <>
                                                                <span className="partNameLft">{part.label}</span>
                                                                <span className="partBullet"></span>
                                                            </>
                                                        )}
                                                        {part.position === 'right' && (
                                                            <>
                                                                <span className="partBullet"></span>
                                                                <span className="partNameRgt">{part.label}</span>
                                                            </>
                                                        )}
                                                    </a>
                                                    <div className={`crPart${parseInt(part.id)}Btn carPartBox absolute`}>
                                                        <img src={part.carPartBoxImg} alt={part.label} />
                                                    </div>
                                                    <div className="partArrow absolute">
                                                        <img src={part.partArrow} alt="" />
                                                    </div>
                                                </div>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="carSkeletonBox absolute z-3 col-100">
                            <div className="carSkeletonParts col-100">
                                <img src={carImages.skeleton} alt="" className="carSkeleton" />
                                {productParts.map((part, i) => (
                                    <div key={`solid-${i}`} className={`crPart${part.id} carPartsImg absolute`}>
                                        <img src={part.solidPartImg} alt="" />
                                    </div>
                                ))}
                            </div>
                            <img src={carImages.solid} alt="" className="carSolidImg absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product_Portfolio;
