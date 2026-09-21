type TeamRow = {
  _id: string;
  teamName: string;
  school: string;
  approved: boolean;
};

const mockTeams: Record<string, TeamRow> = {
  '1': {
    _id: '1',
    teamName: 'The Phoenixes',
    school: 'North Ridge High School',
    approved: true,
  },
  '2': {
    _id: '2',
    teamName: 'The Falcons',
    school: 'Lakeview Academy',
    approved: true,
  },
  '3': {
    _id: '3',
    teamName: 'The Titans',
    school: 'Cedar Valley Prep',
    approved: true,
  },
  '4': {
    _id: '4',
    teamName: 'The Storm',
    school: 'Maple Grove School',
    approved: true,
  },
  '5': {
    _id: '5',
    teamName: 'The Wolves',
    school: 'Summit Tech Academy',
    approved: true,
  },
};

async function get(collectionId: string, itemId: string): Promise<TeamRow | null> {
  const team = mockTeams[itemId];

  if (team) {
    return team;
  }

  return null;
}

export default {
  get,
};
