import React from 'react';
import { Link } from 'react-router-dom';
import TableHead from '../../components/TableHead/TableHead';
import TableRow from '../../components/TableRow/TableRow';

// Images
import mcLogo from '../../media/mcLogoInvis-min.svg';

// Style
import accountStyle from './MyAccount.module.scss';

const MyAccount = () => {
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
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='01'
                                name="What Happened?"
                                completed="Yes"
                                score="350"
                            />
                        </div>
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='02'
                                name="Find The Mole"
                                completed="Yes"
                                score="250"
                            />
                        </div>
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='03'
                                name="Secret Message"
                                completed="No"
                                score="X"
                            />
                        </div>
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='04'
                                name="Geohash Coordinates"
                                completed="TBA"
                                score="X"
                            />
                        </div>
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='05'
                                name="Protection Layers"
                                completed="TBA"
                                score="X"
                            />
                        </div>
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='06'
                                name="Hide Under The Tree"
                                completed="TBA"
                                score="X"
                            />
                        </div>
                        <div className={accountStyle.rowSeparator}>
                            <TableRow
                                number='07'
                                name="Who Are You?"
                                completed="TBA"
                                score="X"
                            />
                        </div>   
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
                        <div className={accountStyle.accountInfoModuleData}>Nidhal Anis BOUZARA</div>
                    </div>
                    <div className={accountStyle.accountInfoModule}>
                        <div className={accountStyle.accountInfoModuleTitle}>Email</div>
                        <div className={accountStyle.accountInfoModuleData}>nidhalanis.bouzara@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccount;
