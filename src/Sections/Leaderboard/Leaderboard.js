import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LeaderboardHead from '../../components/LeaderboardHead/LeaderboardHead';
import LeaderboardRow from '../../components/LeaderboardRow/LeaderboardRow';

// Style
import boardStyle from './Leaderboard.module.scss';

const Leaderboard = () => {
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
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={1}
                            fullname=""
                            score="1850"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={2}
                            fullname=""
                            score="1600"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={3}
                            fullname=""
                            score="1300"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={4}
                            fullname=""
                            score="1300"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={5}
                            fullname=""
                            score="1050"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={6}
                            fullname=""
                            score="1050"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={7}
                            fullname=""
                            score="1050"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={8}
                            fullname=""
                            score="1050"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={9}
                            fullname=""
                            score="1050"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={10}
                            fullname=""
                            score="650"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={11}
                            fullname=""
                            score="650"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={12}
                            fullname=""
                            score="450"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={13}
                            fullname=""
                            score="650"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={14}
                            fullname=""
                            score="450"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={15}
                            fullname=""
                            score="650"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={16}
                            fullname=""
                            score="450"
                        />
                    </div>
                    <div className={boardStyle.rowDividor}>
                        <LeaderboardRow
                            position={17}
                            fullname=""
                            score="450"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Leaderboard;
