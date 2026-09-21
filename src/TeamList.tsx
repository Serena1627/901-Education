import { useState } from 'react';
import TeamCard from './TeamCard';
import type { Team } from './types';

type TeamListProps = {
  teams: Team[];
  attributes: Record<string, string | null>;
  dispatch: (eventName: string, detail?: unknown) => void;
};

export default function TeamList({ teams, attributes, dispatch }: TeamListProps) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  if (teams.length === 0) {
    return <p>No teams yet.</p>;
  }

  const selectedTeam = teams.find((team) => team.id === selectedTeamId);
  const rawStatus = attributes['team-status'];
  const parsedStatus = rawStatus ? JSON.parse(rawStatus) : null;
  const isStatusForSelectedTeam =
    selectedTeamId && parsedStatus && parsedStatus.id === selectedTeamId;

  const handleSelect = (teamId: string) => {
    setSelectedTeamId(teamId);
    dispatch('requestTeamStatus', { teamId });
  };

  let statusMessage = 'Loading...';

  if (selectedTeamId && isStatusForSelectedTeam) {
    statusMessage = parsedStatus.approved ? 'Approved.' : 'Pending Approval.';
  } else if (!selectedTeamId) {
    statusMessage = 'Selected: none';
  }

  return (
    <div>
      <p style={{ marginTop: '12px', fontWeight: 800, marginBottom: '12px' }}>
        Selected: {selectedTeam ? selectedTeam.teamName : 'none'}
      </p>

      {selectedTeamId && (
          <p style={{ marginTop: '12px', marginBottom: '12px' }}>{statusMessage}</p>
    )}

      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          isSelected={selectedTeamId === team.id}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
