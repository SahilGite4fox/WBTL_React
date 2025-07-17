import React, { useState, useRef } from 'react';
import PageBanner from '../components/common/PageBanner';
import { joindetailBanner, fileupload } from '../assets/images';
import { useParams } from 'react-router-dom';
import { jobOpenings } from '../Data_Content/JoinUsData';

const JoiningDetails = () => {
  const { id } = useParams();
  const applyNowRef = useRef(null);
  const [resumeFileName, setResumeFileName] = useState('Choose File');

  const job = jobOpenings.find((job) => job.id.toString() === id);

  const handleResumeChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeFileName(e.target.files[0].name);
    } else {
      setResumeFileName('Choose File');
    }
  };

  const handleScrollToApply = (e) => {
    e.preventDefault();
    const offset = -200;

    if (applyNowRef.current) {
      const topPos = applyNowRef.current.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  if (!job) return <p>Job not found</p>;


  return (
    <main className="joinPgBg col-100 floatLft clr relative">
      <PageBanner
        title="Join Us"
        bannerImg={joindetailBanner}
        breadcrumbs={[{ label: 'Careers' }, { label: 'Join Us', active: true }]}
      />

      <section className="joinUsDetail joinTopOffSec col-100 floatLft clr relative">
        <div className="wrapper1500">
          <div className="joinUsDetailBox joinUsFrmSec col-100 floatLft clr relative">
            <div className="postInfoHead col-100 floatLft relative clr">
              <div className="posHeading col-100 floatLft relative clr">
                <h4>{job.title}</h4>
                <ul>
                  <li>
                    Open positions: <span>{job.positions}</span>
                  </li>
                  <li>{job.experience}</li>
                  <li>{job.location}</li>
                </ul>
                <p>
                  <span>Qualification: </span>{job.qualification}
                </p>
              </div>
              <div className="postApplyBtn floatLft relative clr commSolidBtn">
                <a href="#applyOp" className="floatLft" onClick={handleScrollToApply}>Apply Now</a>
              </div>

            </div>

            <div className="postDetailBox col-100 floatLft relative clr">
              <p>{job.description}</p>

              <div className="psPostBlog employeeType col-100 floatLft relative clr">
                <h4>Employment Type:</h4>
                <p>{job.details.employmentType}</p>
              </div>

              <div className="psPostBlog experienceReq col-100 floatLft relative clr">
                <h4>Experience Required:</h4>
                <p>{job.details.experienceRequired}</p>
              </div>

              <div className="psPostBlog jobLocation col-100 floatLft relative clr">
                <h4>Job Location:</h4>
                <p>{job.details.jobLocation}</p>
              </div>

              <div className="psPostBlog primaryRespo col-100 floatLft relative clr">
                <h4>Primary Responsibility:</h4>
                {Object.entries(job.details.responsibilities).map(([sectionTitle, points], index) => (
                  <div className="repoInfo col-100 floatLft relative clr" key={index}>
                    <h4>{sectionTitle}:</h4>
                    <ul>
                      {points.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="psPostBlog jobSalary col-100 floatLft relative clr">
                <h4>Salary:</h4>
                <p>{job.details.salary}</p>
              </div>

              {job.details.requirements && (
                <div className="psPostBlog jobSalary col-100 floatLft relative clr">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.details.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.details.education && (
                <div className="psPostBlog jobSalary col-100 floatLft relative clr">
                  <h4>Educational Background:</h4>
                  <ul>
                    {job.details.education.map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.details.experience && (
                <div className="psPostBlog jobSalary col-100 floatLft relative clr">
                  <h4>Experience:</h4>
                  <ul>
                    {job.details.experience.map((exp, idx) => (
                      <li key={idx}>{exp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Reuse your form as-is */}
          <div className="psAppForm col-100 floatLft relative clr" id="applyOp" ref={applyNowRef}>
            <div className="psAppFormHead col-100 floatLft relative clr">
              <div className="psAppFormTitle comm_Title black col-100 floatLft clr textCenter spanGredient">
                <h4>Apply for this <span>position</span></h4>
              </div>
              <p>Please fill below details for applying. Our team will get back to you once shortlisted.</p>
            </div>

            <div className="psAppFormBox col-100 relative clr">
              <form action="#">
                <ul className="d-flex justContSpBtw flxFlwRwWrp">
                  <li className="col-100">
                    <div className="contactContFrmFields">
                      <input type="text" placeholder="Full Name" />
                    </div>
                  </li>
                  <li className="col-50">
                    <div className="contactContFrmFields">
                      <input type="text" placeholder="Email Address" />
                    </div>
                  </li>
                  <li className="col-50">
                    <div className="contactContFrmFields">
                      <input type="tel" placeholder="Phone" />
                    </div>
                  </li>
                  <li className="col-50">
                    <div className="contactContFrmFields expYear">
                      <select name="" id="">
                        <option value="" selected="">
                          Years of Experience
                        </option>
                        <option value="">1</option>
                        <option value="">2</option>
                      </select>
                    </div>
                  </li>
                  <li className="col-50">
                    <div className="contactContFrmFields d-flex justContSpBtw psFileUpload">
                      <label>Attach Resume</label>
                      <div className="fileSelect d-flex justContSpBtw">
                        <label htmlFor="careerresume" className="d-flex justContSpBtw">
                          <span id="fileNameText" className="upFileName">{resumeFileName}</span>
                          <img src={fileupload} alt="" />
                        </label>
                        <input
                          type="file"
                          id="careerresume"
                          name="careerresume"
                          style={{ display: 'none' }}
                          onChange={handleResumeChange}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="col-100">
                    <div className="commSolidBtn textCenter">
                      <button>Submit</button>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default JoiningDetails;
