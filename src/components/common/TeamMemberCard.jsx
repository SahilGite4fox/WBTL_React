import React from 'react';

const TeamMemberCard = ({ image, name, position, description }) => {
    return (
        <div className="teamInfoCont d-flex">
            <div className="teamInfoImg">
                <img src={image} alt={name} />
            </div>
            <div className="teamInfoTxt">
                <div className="teamInfoTxtTitle">
                    <p>{name}</p>
                </div>
                <div className="teamInfoTxtPosi">
                    <p>{position}</p>
                </div>
                <div className="teamInfoTxtDesc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
