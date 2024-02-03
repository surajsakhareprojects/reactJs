import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallagne.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {/* <TimerChallenge /> */}
        <TimerChallenge title={'Suraj'} targetTime={1} />
        <TimerChallenge title={'Suvarna'} targetTime={3} />
        <TimerChallenge title={'Viha'} targetTime={7} />
        <TimerChallenge title={'Ram'} targetTime={10} />
      </div>
    </>
  );
}

export default App;
