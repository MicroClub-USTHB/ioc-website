import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Leaderboard from '../../Sections/Leaderboard/Leaderboard';
import MyAccount from '../../Sections/MyAccount/MyAccount';

// Style
import loungeStyle from './Lounge.module.scss';

const Lounge = () => {
    const user = useSelector(state => state.workspace.user);
    if (!user) {
        return (<Redirect to='/' />)
    } else {
        return (
            <div className={loungeStyle.container}>
                <MyAccount />
                <Leaderboard />
            </div>
        );
    }
}

export default Lounge;
