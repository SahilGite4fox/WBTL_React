import React, { useState } from 'react';
import PageBanner from '../components/common/PageBanner';
import { joinUsbanner } from '../assets/images';
import { jobOpenings } from '../Data_Content/JoinUsData';
import { tabButtons } from '../Data_Content/JoinUsData';
import JoinUsInfoTabContCard from '../components/common/JoinUsInfoTabContCard';
import CommonTitle from '../components/common/CommonTitle';


const JoinUs = () => {
  const [activeTab, setActiveTab] = useState('tab-0');

  const filteredJobs = jobOpenings.filter(job => job.tabs.includes(activeTab));

  return (
    <main className="joinPgBg col-100 floatLft clr relative">
      <PageBanner
        title="Join Us"
        bannerImg={joinUsbanner}
        breadcrumbs={[{ label: 'Careers' }, { label: 'Join Us', active: true }]}
      />
      {/* FORM SECTION — keep as-is */}
      <section className="joinUsFrm joinTopOffSec col-100 floatLft clr relative">
        <div className="wrapper1500">
          <div className="joinUsFrmSec col-100 floatLft clr relative">
            <form action="#">
              <ul className="joinUsFrmWrapper col-100 clr relative">
                <li>
                  <div className="joinFields d-flex algnItmCent justContCent col-100 relative">
                    <input type="search" placeholder="Search for jobs.." />
                    <button className="joinSearchBtn absolute">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_261_1757)">
                          <path
                            d="M16.7676 14.699L13.4572 11.3887C13.3078 11.2393 13.1053 11.1562 12.8928 11.1562H12.3516C13.268 9.98418 13.8125 8.50996 13.8125 6.90625C13.8125 3.09121 10.7213 0 6.90625 0C3.09121 0 0 3.09121 0 6.90625C0 10.7213 3.09121 13.8125 6.90625 13.8125C8.50996 13.8125 9.98418 13.268 11.1562 12.3516V12.8928C11.1562 13.1053 11.2393 13.3078 11.3887 13.4572L14.699 16.7676C15.0111 17.0797 15.5158 17.0797 15.8246 16.7676L16.7643 15.8279C17.0764 15.5158 17.0764 15.0111 16.7676 14.699ZM6.90625 11.1562C4.55879 11.1562 2.65625 9.25703 2.65625 6.90625C2.65625 4.55879 4.55547 2.65625 6.90625 2.65625C9.25371 2.65625 11.1562 4.55547 11.1562 6.90625C11.1562 9.25371 9.25703 11.1562 6.90625 11.1562Z"
                            fill="#1C336A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_261_1757">
                            <rect width={17} height={17} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="joinFilter d-flex algnItmEnd">
                    <div className="joinFilterField">
                      <label htmlFor="">Experience Level</label>
                      <div>
                        <select name="" id="">
                          <option value="">All Experience Level</option>
                          <option value="option 1">option 1</option>
                          <option value="option 2">option 2</option>
                          <option value="option 3">option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="joinFilterField">
                      <label htmlFor="">Location</label>
                      <div>
                        <select name="" id="">
                          <option value="">All Location</option>
                          <option value="option 1">option 1</option>
                          <option value="option 2">option 2</option>
                          <option value="option 3">option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="commSolidBtn">
                      <a href="javascript:;" className="floatLft">
                        View Jobs
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
      {/* TABBED JOBS SECTION */}
      <section className="JoinUsInfo sv-secGap col-100 floatLft relative clr">
        <div className="wrapper1440">
          <div className="JoinUsBox col-100 floatLft relative clr">
            <div className="JoinUsInfoTitle comm_Title black spanGredient textCenter col-100 floatLft relative clr">
              <CommonTitle title='*Join* Us' />
            </div>
            <div className="JoinUsInfoTabs col-100 floatLft relative clr">
              <ul className="d-flex algnItmCent justContCent">
                {tabButtons.map(tab => (
                  <li
                    key={tab.id}
                    className={`tabBtn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="JoinUsInfoTabContents col-100 floatLft relative clr">
              <div className="JoinUsInfoTabCont col-100 floatLft clr tab-content active">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JoinUsInfoTabContCard key={job.id} job={job} />
                  ))
                ) : (
                  <p className="naOpenings textCenter">No openings in this category.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
