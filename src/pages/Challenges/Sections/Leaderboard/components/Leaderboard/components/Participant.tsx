import React, { CSSProperties } from 'react';

// Styles
import partStyle from './Participant.module.scss';

interface ParticipantProps {
  position: number
  name: string
  score: number
  isUser?: boolean
}

const Participant = (props: ParticipantProps) => {
  const { name, position, score, isUser } = props;
  const user_className = partStyle.user;
  let position_className: string;
  let name_className: string;
  switch (Number(position)) {
    case 1:
      position_className = `${partStyle.position} ${partStyle.gold}`;
      name_className = `${partStyle.name} ${partStyle.gold}`;
      break;

    case 2:
      position_className = `${partStyle.position} ${partStyle.bronze}`;
      name_className = `${partStyle.name} ${partStyle.bronze}`;
      break;
      
    case 3:
      position_className = `${partStyle.position} ${partStyle.silver}`;
      name_className = `${partStyle.name} ${partStyle.silver}`;
      break;
      
    default:
      position_className = `${partStyle.position}`;
      name_className = `${partStyle.name}`;
      break;
  }
  return (
    <>
      { isUser && <div className={partStyle.user_box}></div> }
      <div className={`${partStyle.container} ${isUser && user_className}`}>
        <span className={position_className}>{position}</span>
        <div className={partStyle.info}>
          <span className={name_className}>{name}</span>
          <span className={partStyle.score}>{score}</span>
        </div>
      </div>
    </>
  );
}

export default Participant;
