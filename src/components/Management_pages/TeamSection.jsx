import React from 'react';
import CommonTitle from '../common/CommonTitle';
import TeamMemberCard from '../common/TeamMemberCard';

const TeamSection = ({ title, members }) => {
    return (
        <section className="managementTeam sv-secGap col-100 floatLft clr relative">
            <div className="main-wrapper">
                <div className="managementTeamInfo col-100 floatLft clr relative">
                    <div className="manageTeamTitle spanGredient comm_Title black col-100 floatLft clr textCenter">
                        <CommonTitle title={title} />
                    </div>

                    <div className="teamInfoSecCont col-100 floatLft clr">
                        <ul>
                            {members.map((member, index) => (
                                <li key={index}>
                                    <TeamMemberCard
                                        image={member.image}
                                        name={member.name}
                                        position={member.position}
                                        description={member.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
