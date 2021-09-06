import React, { CSSProperties } from 'react';

// styles
import dayStyle from './Day.module.scss';

interface ChallengeState {
  completed: boolean
  points: number
}

export interface DayProps {
  title: string
  main: ChallengeState
  side: ChallengeState
}

const Day = (props: DayProps) => {
  const { title, main, side } = props;
  const container_style: CSSProperties = {
    backgroundColor: main.completed && side.completed ? '#40CD7D' : !main.completed && !side.completed ? '#0D1B28' : '#BFBFBD',
    color: !main.completed && !side.completed ? 'white' : ''
  };
  const color: CSSProperties = { color: !main.completed && !side.completed ? 'white' : '#0D1B28' };
  const color_green: CSSProperties = { color: '#309A5D' };
  const color_red: CSSProperties = { color: '#CD4040' };
  return (
    <div className={dayStyle.container} style={{...container_style, ...color}}>
      <h2 className={dayStyle.title} style={color}>{title}</h2>
      <div className={dayStyle.challenges}>
        <div className={`${dayStyle.challenge} ${dayStyle.day}`}>
          <span>Main</span>
          <span>Side</span>
        </div>
        <div className={`${dayStyle.challenge} ${dayStyle.status}`}>
          <span style={main.completed ? color_green : color_red}>{ main.completed ? 'Completed' : 'Not Completed' }</span>
          <span style={side.completed ? color_green : color_red}>{ side.completed ? 'Completed' : 'Not Completed' }</span>
        </div>
        <div className={`${dayStyle.challenge} ${dayStyle.score}`}>
          <span style={main.completed ? color_green : color_red}>{`${main.points} Points`}</span>
          <span style={side.completed ? color_green : color_red}>{`${side.points} Points`}</span>
        </div>
      </div>
    </div>
  );
}

export default Day;
