import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { minimize } from '../../redux/workspaceSlice';


// Components
import DaySelectionButton from '../../components/DaySelectionButton/DaySelectionButton';

// Style
import dayStyle from './DaySelection.module.scss';

// Images
import mcLogo from '../../media/MC LogoWS-min.png';

const DaySelection = () => {
    const minimized = useSelector(state => state.workspace.minimized);
    const challenges = useSelector(state => state.workspace.challenges);
    const dispatch = useDispatch();
    const mapchallengeToButton = (dayNum, dayTitleText) => {
        let button = (
            <DaySelectionButton
                dayNumber={dayNum}
                minimize={minimized}
                day={`Day ${dayNum}`}
                dayTitle={dayTitleText}
            />
        )
        return button;
    }

    return (
        <section
            className={`${dayStyle.container} ${minimized? dayStyle.containerAnimateContract : dayStyle.containerAnimateExpand }`}
            style={{
                width: minimized? 'fit-content' : '19.5vw',
            }}

        >
            <div className={dayStyle.pageTitle}>
                <div>
                    <Link to="/">
                        <img
                            className={dayStyle.titleImage}
                            src={mcLogo} alt="Micro Club Logo"
                            style={{
                                width: minimized? '4vw' : '5vw'
                            }}
                        />
                    </Link>
                </div>
                <div
                    className={`${dayStyle.title} ${!minimized && dayStyle.titleAppear}`}
                    style={{
                        width: minimized? '0' : 'fit-content'
                    }}
                >Challenges</div>
            </div>
            <div className={dayStyle.days}>
                {
                    challenges? challenges.map(challenge => mapchallengeToButton(challenge.day, challenge.content.title)) : null
                }
            </div>
            <button
                className={dayStyle.minimizeContainer}
                onClick={() => {
                    dispatch(minimize());
                    // setMinimize(!minimized)
                }}
            >
                <div
                    className={dayStyle.minimizeSymbol}
                    style={{
                        marginRight: minimized? '0' : '1vw',
                        position: minimized? 'static' : 'relative',
                        transform: minimized && "rotateZ(180deg)"
                    }}
                ></div>
                {
                    !minimized && 
                    (<div
                        className={dayStyle.minimizeText}
                    >minimize</div>)
                }
            </button>
        </section>
    );
}

export default DaySelection;
