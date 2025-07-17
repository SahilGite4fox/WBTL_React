import React from 'react';
import { Link } from 'react-router-dom';
import { directorBanner, team1, team2, team3 } from '../assets/images';
import CommonTitle from '../components/common/CommonTitle';
import { teamMember } from '../Data_Content/TeamData';
import TeamMemberCard from '../components/common/TeamMemberCard';
import PageBanner from '../components/common/PageBanner';
import TeamSection from '../components/Management_pages/TeamSection';


const boardMembers = teamMember.filter(member => member.partOf === 'board');

const Board = () => {

    return (
        <main className="col-100 floatLft clr relative">
            <PageBanner
                title="Management"
                bannerImg={directorBanner}
                breadcrumbs={[
                    { label: 'Management' },  // no `to` = just text
                    { label: 'Board of Directors', active: true }, // last breadcrumb
                ]}
            />
            <TeamSection title="*Board Of* Directors" members={boardMembers} />
        </main>
    );
};

export default Board;
