import '../public/App.css';
import LotteryGame from './lotteryGame';
import { sum } from './helper';

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 13;
  }
  return (
    <>
      <LotteryGame n={3} winCondition={winCondition} ></LotteryGame>
    </>
  );
};

export default App;
