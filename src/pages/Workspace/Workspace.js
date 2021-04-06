import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

// Sections
import DayChallenge from '../../Sections/DayChallenge/DayChallenge';
import DaySelection from '../../Sections/DaySelection/DaySelection';
import DayStory from '../../Sections/DayStory/DayStory';


// HOC
import Layout from '../../hoc/Layout/Layout';

// Style
import workStyle from './Workspace.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { _getChallenges } from '../../redux/workspaceSlice';

const Workspace = () => {
    const user = useSelector(state => state.workspace.user);
    const challenges = useSelector(state => state.workspace.challenges);
    const challengesState = useSelector(state => state.workspace.challengesState);
    const chosenDay = useSelector(state => state.workspace.chosenDay);
    const location = useLocation();
    const dispatch = useDispatch();

    const GetChallengesFailed = (
        <div className={workStyle.loadingContainer}>
            <div className={workStyle.loadingFailedContainer}>
                <div>Loading challenges failed, click below to try again</div>
                <button
                    onClick={() => {
                        dispatch(_getChallenges());
                    }}
                >Reload Challenges</button>
            </div>
        </div>
    )

    const LoadingChallenges = (
        <div className={workStyle.loadingContainer}>
            <FontAwesomeIcon className={workStyle.spinner} icon={faSpinner} />
        </div>
    )

    const mapChallengeToStory = (dayNum, dayTitle, DayStoryText) => {
        const route = (<Route
                path={`/workspace/${dayNum}`}
                render={() => (
                        <DayStory
                            dayNumber={dayNum}
                            day={`Day ${dayNum}`}
                            title={dayTitle}
                            story={DayStoryText}
                        />
                )}
            />)
            return route;
    }

    let mapChallengeToChallenge = (dayNumber, dayChallengeContent) => {
        let route = (
            <Route
                path={`/workspace/${dayNumber}`}
                render={() => (
                    <DayChallenge
                        day={dayNumber}
                    >
                        <div className={workStyle.content}>
                            {ReactHtmlParser(dayChallengeContent)}
                        </div>
                    </DayChallenge>
                )}
            />
        )
        return route;
    }

    return (
        <Layout>
            <div className={workStyle.workspace}>

                {
                    challengesState === 'loading'? LoadingChallenges : challengesState === 'failed'? GetChallengesFailed : null
                }

                {
                    (!user && !localStorage.uid) && (<Redirect to='/' />)
                }

                {
                    (chosenDay !== 0 && location.pathname !== `/workspace/${chosenDay}`)? (<Redirect to={`/workspace/${chosenDay}`} />) : null
                }

                <DaySelection />

                {
                    challenges ? (challenges.map(challenge => mapChallengeToStory(challenge.day, challenge.content.title, challenge.content.story))) : null
                }
                
                {
                    challenges ? (challenges.map(challenge => mapChallengeToChallenge(challenge.day, challenge.content.challenge))) : null 
                }
            </div>
        </Layout>
    );
}

export default Workspace;
