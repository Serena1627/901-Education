import type { Team } from './types';

type TeamCardProps = {
  team: Team;
};

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div>
      <h2>{team.teamName}</h2>
      <p>{team.school}</p>
    </div>
  );
}
