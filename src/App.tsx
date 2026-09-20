import TeamList from './TeamList';

const teams = [
  { id: '1', teamName: 'The Phoenixes', school: 'North Ridge High School' },
  { id: '2', teamName: 'The Falcons', school: 'Lakeview Academy' },
  { id: '3', teamName: 'The Titans', school: 'Cedar Valley Prep' },
  { id: '4', teamName: 'The Storm', school: 'Maple Grove School' },
  { id: '5', teamName: 'The Wolves', school: 'Summit Tech Academy' },
];

function App() {
  return (
    <main>
      <TeamList teams={teams} />
    </main>
  );
}

export default App;
