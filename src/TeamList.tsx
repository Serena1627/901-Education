import { useState } from 'react';
import TeamCard from './TeamCard';
import type { Team } from './types';

type TeamListProps = {
  teams: Team[];
};

export default function TeamList({ teams }: TeamListProps) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  if (teams.length === 0) {
    return <p>No teams yet.</p>;
  }

  const selectedTeam = teams.find((team) => team.id === selectedTeamId);

  return (
    <div>
      <p style={{ fontWeight: 600, marginBottom: '12px' }}>
        Selected: {selectedTeam ? selectedTeam.teamName : 'none'}
      </p>
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          isSelected={selectedTeamId === team.id}
          onSelect={setSelectedTeamId}
        />
      ))}
    </div>
  );
}
