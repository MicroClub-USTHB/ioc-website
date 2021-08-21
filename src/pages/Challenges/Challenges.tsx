import React, { useEffect } from 'react';
import NavButton from './components/NavButton/NavButton';
import Challenge from './Sections/Challenge/Challenge';
import { RouteComponentProps } from 'react-router-dom';
import { useGetDaysQuery } from '../../redux/api/backend';

// styles
import challengesStyle from './Challenges.module.scss';

// resources
import logo from '../../resources/Challenges-min.png';
import { UilDashboard, UilEstate } from '@iconscout/react-unicons'

const Challenges = (props: RouteComponentProps) => {
  const {data, isLoading} = useGetDaysQuery(null);
  
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
            {
              isLoading ? <li>Loading...</li> :
              data?.map((day, index) => (
                <li key={day._id}>
                  <NavButton title={`Day ${index + 1}`} iconReplacement={(index + 1).toString()} />
                </li>
              ))
            }
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
