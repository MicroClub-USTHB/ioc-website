import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import LeaderboardHead from '../../components/LeaderboardHead/LeaderboardHead';
import LeaderboardRow from '../../components/LeaderboardRow/LeaderboardRow';

// Style
import boardStyle from './Leaderboard.module.scss';

const Leaderboard = () => {
    const leaderboardArray = useSelector(state => state.workspace.leaderboard);
    return (
        <section className={boardStyle.section}>
            <div>
                <div className={boardStyle.sectionHeader}>
                    <FontAwesomeIcon className={boardStyle.lineTrophy} icon={faTrophy} />
                    <div className={boardStyle.lineDecoration}></div>
                </div>
                <h3 className={boardStyle.subSectionTitle}>Leaderboard</h3>
                <div className={boardStyle.leaderboardTable}>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardHead />
                    </div>
                    {
                        leaderboardArray.map((item, index) => (
                            <div className={boardStyle.rowDividor} >
                                <LeaderboardRow
                                    position={index+1}
                                    fullname={item.fullName}
                                    score={item.score}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Leaderboard;
