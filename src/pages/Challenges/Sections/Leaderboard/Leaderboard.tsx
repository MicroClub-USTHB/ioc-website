import React from 'react';

// Components
import Board from './components/Leaderboard/Leaderboard';
import Progress from './components/Progress/Progress';

// Styles
import boardStyle from './Leaderboard.module.scss';

const Leaderboard = () => {
  return (
    <div className={boardStyle.container}>
      <Progress />
      <Board />
    </div>
  );
}

export default Leaderboard;
