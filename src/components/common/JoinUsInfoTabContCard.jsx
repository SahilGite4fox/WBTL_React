import React from 'react';
import { Link } from 'react-router-dom';

const JoinUsInfoTabContCard = ({ job }) => {
  return (
    <div className="JoinUsInfoTabContCard col-100 floatLft clr">
      <div className="joinUsPosi col-100 floatLft clr">
        <h5>{job.title}</h5>
      </div>
      <div className="joinUsTags col-100 floatLft clr">
        <ul className="d-flex algnItmCent flxFlwRwWrp">
          <li>Open positions: {job.positions}</li>
          <li>{job.experience}</li>
          <li>{job.location}</li>
        </ul>
      </div>
      <div className="joinUsQualif col-100 floatLft clr">
        <p><span>Qualification: </span>{job.qualification}</p>
      </div>
      <div className="joinUsDesc col-100 floatLft clr">
        <p>{job.description}</p>
      </div>
      <div className="commSolidBtn col-100 floatLft clr">
        <Link to={`/joinus/${job.id}`} className="floatLft">Read More</Link>
      </div>
    </div>
  );
};

export default JoinUsInfoTabContCard;
