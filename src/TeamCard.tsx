import type { Team } from './types';

type TeamCardProps = {
  team: Team;
  isSelected: boolean;
  onSelect: (teamId: string) => void;
};

export default function TeamCard({ team, isSelected, onSelect }: TeamCardProps) {
  return (
    <div
      onClick={() => onSelect(team.id)}
      style={{
        border: isSelected ? '2px solid #7dd3fc' : 'none',
        boxShadow: isSelected ? '0 0 0 3px rgba(125, 211, 252, 0.35)' : 'none',
        backgroundColor: isSelected ? '#2c668e' : 'transparent',
        padding: isSelected ? '12px' : '0',
        margin: '8px 0',
        cursor: 'pointer',
        borderRadius: '8px',
      }}
    >
      <h2>{team.teamName}</h2>
      <p>{team.school}</p>
    </div>
  );
}
