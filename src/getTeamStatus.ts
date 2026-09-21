import wixData from './wix-data-mock';
import { Permissions, webMethod } from './wix-web-methods-mock';

export const getTeamStatus = webMethod(
  Permissions.Anyone,
  async function getTeamStatus(teamId: string) {
    const team = await wixData.get('Teams', teamId);

    if (!team) {
      return null;
    }

    return {
      id: team._id,
      teamName: team.teamName,
      approved: team.approved,
    };
  },
);
