import React from "react";
import { useParams } from "react-router-dom";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SingleTeamMemberDetails from "../components/Team/SingleTeamMemberDetails";
import TeamDetailsSlider from "../components/Team/TeamDetailsSlider";

import membersDataRaw from "../dataJson/teamMembersData.json";
const membersData = withBase(membersDataRaw);
import SpecialistTeamMembers from "../components/Team/SpecialistTeamMembers";
import { withBase } from "../helper/assetPath";

const TeamMemberDetails = () => {
  const { teamId } = useParams();
  const team = membersData.find((team) => team.id === parseInt(teamId));

  if (!team) {
    return <p>Team not found</p>;
  }

  return (
    <>
      <CommonPageHero title={"TEAM PAGE"} />
      <SingleTeamMemberDetails team={team} />
      <TeamDetailsSlider />
      <SpecialistTeamMembers styleTypeTwo={true} team={team} />
    </>
  );
};

export default TeamMemberDetails;
