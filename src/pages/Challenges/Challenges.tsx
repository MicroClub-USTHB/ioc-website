import React, { useEffect } from 'react';
import NavButton from './components/NavButton/NavButton';
import Challenge from './Sections/Challenge/Challenge';
import { RouteComponentProps } from 'react-router-dom';

// styles
import challengesStyle from './Challenges.module.scss';

// resources
import logo from '../../resources/Challenges-min.png';
import { UilDashboard, UilEstate } from '@iconscout/react-unicons'

const Challenges = (props: RouteComponentProps) => {
  useEffect(() => {
    // TODO: Create a rtkq endpoint and use it here.
  }, []);

  return (
    <main className={challengesStyle.outer_container}>
      {/* left navigation bar */}
      <div className={challengesStyle.navigation}>
        <div className={challengesStyle.header}>
          <img className={challengesStyle.logo} src={logo} alt="" />
          <h1 className={challengesStyle.title}>IMPACT<br/>OF<br/>CODE</h1>
        </div>
        <div>
          <ul className={challengesStyle.challenges_list}>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="1" />
            </li>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="2" />
            </li>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="3" />
            </li>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="4" />
            </li>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="5" />
            </li>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="6" />
            </li>
            <li>
              <NavButton title="Marcos Marlos" iconReplacement="7" />
            </li>
          </ul>
          <hr className={challengesStyle.divider} />
          <ul className={challengesStyle.navigation_list}>
            <li>
              <NavButton title="Score & Leaderboard" Icon={UilDashboard} />
            </li>
            <li>
              <NavButton title="Landing Page" Icon={UilEstate} />
            </li>
          </ul>
        </div>
      </div>
      {/* right content */}
      <Challenge />
    </main>
  );
}

export default Challenges;
