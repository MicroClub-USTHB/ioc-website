import React from 'react';
import Leaderboard from '../../Sections/Leaderboard/Leaderboard';
import MyAccount from '../../Sections/MyAccount/MyAccount';

// Style
import loungeStyle from './Lounge.module.scss';

const Lounge = () => {
    return (
        <div className={loungeStyle.container}>
            <MyAccount />
            <Leaderboard />
        </div>
    );
}

export default Lounge;
