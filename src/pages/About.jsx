import React from 'react';
import PageBanner from '../components/common/PageBanner';
import { aboutPageData } from '../Data_Content/aboutData';

const About = () => {
  const { banner, aboutUs, vision, mission } = aboutPageData;

  return (
    <main className="col-100 floatLft clr relative">
      <PageBanner {...banner} />

      {/* About Section */}
      <section className="psAboutUs col-100 floatLft relative clr sv-secGap">
        <div className="main-wrapper">
          <div className="psAboutInfo col-100 floatLft relative clr">
            <div className="psAboutTxt col-100 floatLft relative clr">
              <div className="psAboutTitle comm_Title black col-100 floatLft clr textLft margiBot3em spanGredient">
                <h4>
                  <span>{aboutUs.title.split(' ')[0]}</span> {aboutUs.title.split(' ').slice(1).join(' ')}
                </h4>
              </div>
              <div className="psAboutDesk col-100 floatLft relative clr">
                {aboutUs.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <ul>
                  {aboutUs.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{aboutUs.closing}</p>
              </div>
            </div>
            <div className="psAboutImg floatLft relative clr">
              <img src={aboutUs.images[0]} alt="About 1" className="psAboutImg1" />
              <img src={aboutUs.images[1]} alt="About 2" className="psAboutImg2" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="psOurVision col-100 floatLft relative clr">
        <div className="main-wrapper">
          <div className="psVisionInfo col-100 floatLft relative clr">
            <img src={vision.image} alt="Vision" className="psVisionImg col-100" />
            <div className="psVisionTxt col-100 floatLft relative clr">
              <div className="psVisionTitle comm_Title black col-100 floatLft clr textLft margiBot3em spanGredient">
                <h4>
                  {vision.title.split(' ')[0]}<span> {vision.title.split(' ')[1]}</span>
                </h4>
              </div>
              <p>{vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="psOurVisionMission col-100 floatLft relative clr">
        <div className="main-wrapper">
          <div className="psVisionInfo col-100 floatLft relative clr">
            <img src={mission.image} alt="Mission" className="psVisionImg col-100" />
            <div className="psVisionTxt col-100 floatLft relative clr">
              <div className="psVisionTitle comm_Title black col-100 floatLft clr textLft margiBot3em spanGredient">
                <h4>
                  {mission.title.split(' ')[0]}<span> {mission.title.split(' ')[1]}</span>
                </h4>
              </div>
              <p>{mission.text}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
