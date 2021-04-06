import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TableHead from '../../components/TableHead/TableHead';
import TableRow from '../../components/TableRow/TableRow';

// Images
import mcLogo from '../../media/mcLogoInvis-min.svg';

// Style
import accountStyle from './MyAccount.module.scss';

const MyAccount = () => {
    const user = useSelector(state => state.workspace.user);
    const challenges = useSelector(state => state.workspace.challenges);

    const mapChallengeToRow = (dayNum, dayTitle) => {
        let row = (
            <div
                className={accountStyle.rowSeparator}
            >
                <TableRow
                    number={`0${dayNum}`}
                    name={dayTitle}
                    completed={user.userDB.challengeCompletion[`day${dayNum}`]? 'Yes' : 'No'}
                    score='X'
                />
            </div>
        )
        return row;
    }

    return (
        <section className={accountStyle.sectionContainer}>
            <div className={accountStyle.navigation}>
                <Link className={accountStyle.navigationHeader} to="/">
                    <img className={accountStyle.navigationHeaderImage} src={mcLogo} alt="" />
                    <div className={accountStyle.navigationHeaderTitle}>IOC</div>
                </Link>
                <div className={accountStyle.navigationListContainer}>
                    <ul className={accountStyle.navigationList}>
                        <li>
                            <Link className={accountStyle.navigationListLink} to="/">Landing Page</Link>
                        </li>
                        <li>
                            <Link className={accountStyle.navigationListLink} to="/workspace">Workspace</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={accountStyle.main}>
                <h1 className={accountStyle.sectionTitle}>Lounge</h1>
                <div className={accountStyle.completionContainer}>
                    <h2 className={accountStyle.subSectionTitle}>CHECKLIST</h2>
                    <div className={accountStyle.table}>
                        <div className={accountStyle.rowSeparator}>
                            <TableHead
                                titles={['Day', 'Title', 'Completion', 'Score Earned']}
                            />
                        </div>
                        {
                            challenges? challenges.map(challenge => mapChallengeToRow(challenge.day, challenge.content.title)) : null
                        }
                        <div className={accountStyle.rowTotal}>
                            <div className={accountStyle.rowTotalTitle}>Total Score Earned:</div>
                            <div className={accountStyle.rowTotalScore}>550</div>
                        </div>
                    </div>
                </div>
                <div className={accountStyle.accountInfoContainer}>
                    <h2 className={accountStyle.subSectionTitle}>Account Info</h2>
                    <div className={accountStyle.accountInfoModule}>
                        <div className={accountStyle.accountInfoModuleTitle}>Full Name</div>
                        <div className={accountStyle.accountInfoModuleData}>{ user.userDB.fullName }</div>
                    </div>
                    <div className={accountStyle.accountInfoModule}>
                        <div className={accountStyle.accountInfoModuleTitle}>Email</div>
                        <div className={accountStyle.accountInfoModuleData}>{ user.userDB.email }</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccount;
