import React from 'react';

// Style
import lbStyle from './LeaderboardHead.module.scss';

const LeaderboardHead = () => {
    return (
        <div className={lbStyle.headItemContainer}>
            <div className={lbStyle.headItem}>Position</div>
            <div className={lbStyle.headItem}>Name</div>
            <div className={lbStyle.headItem}>Score</div>
        </div>
    );
}

export default LeaderboardHead;
