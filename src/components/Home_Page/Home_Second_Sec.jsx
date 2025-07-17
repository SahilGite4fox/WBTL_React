import React from 'react';
import CommonTitle from '../common/CommonTitle';
import { hmSecSecData } from '../../Data_Content/homeData'; // JSON with all data

const Home_Second_Sec = () => {
  const { title, description, btnLabel, btnLink, images } = hmSecSecData[0]; // Get first object

  return (
    <section className="hmSecndSec sv-secGap commSecOverlay col-100 floatLft clr relative">
      <div className="main-wrapper z-3">
        <div className="hmSecndSecCont textCenter col-100 clr relative">
          <div className="hmSecndSecContTitle spanGredient comm_Title black">
            <CommonTitle title={title} />
          </div>
          <div className="hmSecndSecContP">
            <p>{description}</p>
          </div>
          <div className="hmSecndSecContBtn commArrBtn red col-100 floatLft clr relative">
            <a href="/about" className="d-flex algnItmCent justContCent">
              <span>{btnLabel}</span>
              <span>
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.80503 12.9375L19.2032 5.63132M19.2032 5.63132L8.90975 1.42631M19.2032 5.63132L14.9982 15.9248"
                    stroke="#C40E1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Loop through all images and apply class dynamically */}
      {images.map((img, index) => (
        <div key={index} className={`hmSecndSecImg hmSecndSec${index + 1} absolute`}>
          <img src={img} alt="WBTL" />
        </div>
      ))}
    </section>
  );
};

export default Home_Second_Sec;
