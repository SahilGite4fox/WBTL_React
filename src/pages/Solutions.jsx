import React from 'react';
import PageBanner from '../components/common/PageBanner';
import CommonTitle from '../components/common/CommonTitle';
import { solutionsBanner } from '../assets/images';
import { solutionsData } from '../Data_Content/solutionsData';

const Solutions = () => {
  return (
    <main className="col-100 floatLft clr relative">
      <PageBanner
        title="Solutions"
        bannerImg={solutionsBanner}
        breadcrumbs={[{ label: 'Solutions', active: true }]}
      />
      <section className="psCarsInfo col-100 floatLft relative clr sv-secGap">
        <div className="wrapper1500">
          {solutionsData.map((item, i) => (
            <div key={i} className="psCarsContent col-100 floatLft relative clr">
              <div className="psCarsTxt col-100 floatLft relative clr">
                <div className="psVisionTitle comm_Title black col-100 floatLft clr textLft margiBot3em spanGredient">
                  <CommonTitle title={item.title} />
                </div>
                {item.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <div className="psCarImg col-100 floatLft relative clr ">
                <img src={item.image} alt={item.title.replace(/[*]/g, '')} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Solutions;
