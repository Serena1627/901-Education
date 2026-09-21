import { useState } from 'react';
import TeamList from './TeamList';
import { getTeamStatus } from './getTeamStatus';

const teams = [
  { id: '1', teamName: 'The Phoenixes', school: 'North Ridge High School' },
  { id: '2', teamName: 'The Falcons', school: 'Lakeview Academy' },
  { id: '3', teamName: 'The Titans', school: 'Cedar Valley Prep' },
  { id: '4', teamName: 'The Storm', school: 'Maple Grove School' },
  { id: '5', teamName: 'The Wolves', school: 'Summit Tech Academy' },
];

function App() {
  const [teamStatusAttr, setTeamStatusAttr] = useState<string | null>(null);

  const dispatch = (eventName: string, detail?: unknown) => {
    if (eventName === 'requestTeamStatus') {
      const teamId = typeof detail === 'object' && detail !== null && 'teamId' in detail
        ? String((detail as { teamId?: string }).teamId)
        : '';

      if (!teamId) {
        return;
      }

      getTeamStatus(teamId).then((result) => {
        setTeamStatusAttr(JSON.stringify(result));
      });
    }
  };

  return (
    <main>
      <TeamList
        teams={teams}
        attributes={{ 'team-status': teamStatusAttr }}
        dispatch={dispatch}
      />
    </main>
  );
}

export default App;
