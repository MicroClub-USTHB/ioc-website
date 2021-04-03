import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Style
import rowStyle from './LeaderboardRow.module.scss';

const LeaderboardRow = ({position, fullname, score}) => {
    return (
        <div className={rowStyle.leaderboardRow}>
            {
                (position === 1 || position === 2 || position === 3) && 
                <div className={rowStyle.trophy}>
                    <FontAwesomeIcon
                        icon={faTrophy}
                        style={{
                            color: position === 1? '#C9B037' : position === 2? '#B4B4B4' : '#AD8A56'
                        }}
                    />
                </div>
            }
            <div className={rowStyle.rowPosition}>{`${position}`}</div>
            <div>{fullname}</div>
            <div className={rowStyle.rowScore}>{score}</div>    
        </div>
    );
}

export default LeaderboardRow;
