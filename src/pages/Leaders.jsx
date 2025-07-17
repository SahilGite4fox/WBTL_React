import React from 'react';
import { Link } from 'react-router-dom';
import { team4, leadersBanner } from '../assets/images';
import { teamMember } from '../Data_Content/TeamData';
import TeamMemberCard from '../components/common/TeamMemberCard';
import PageBanner from '../components/common/PageBanner';
import CommonTitle from '../components/common/CommonTitle';
import TeamSection from '../components/Management_pages/TeamSection';


const leadershipTeam = teamMember.filter(member => member.partOf === 'leadership');

const Leaders = () => {

    return (
        <main className="col-100 floatLft clr relative">
            <PageBanner
                title="Management"
                bannerImg={leadersBanner}
                breadcrumbs={[
                    { label: 'Management' },  // no `to` = just text
                    { label: 'Leadership Team', active: true }, // last breadcrumb
                ]}
            />
            <TeamSection title="*Leadership* Team" members={leadershipTeam} />
        </main>
    );
};

export default Leaders;
