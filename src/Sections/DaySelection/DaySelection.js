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
    // const [minimized, setMinimize] = useState(false);
    const minimized = useSelector(state => state.workspace.minimized);
    const dispatch = useDispatch();
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
                <DaySelectionButton
                    dayNumber={1}
                    minimize={minimized}
                    day="Day 1"
                    dayTitle="What Happened?"
                />
                <DaySelectionButton
                    dayNumber={2}
                    minimize={minimized}
                    day="Day 2"
                    dayTitle="Find The Mole"
                />
                <DaySelectionButton
                    dayNumber={3}
                    minimize={minimized}
                    day="Day 3"
                    dayTitle="Secret Message"
                />
                <DaySelectionButton
                    dayNumber={4}
                    minimize={minimized}
                    day="Day 4"
                    dayTitle="Geohash Coordinates"
                />
                <DaySelectionButton
                    dayNumber={5}
                    minimize={minimized}
                    day="Day 5"
                    dayTitle="Protection Layers"
                />
                <DaySelectionButton
                    dayNumber={6}
                    minimize={minimized}
                    day="Day 6"
                    dayTitle="Hide Under The Tree"
                />
                <DaySelectionButton
                    dayNumber={7}
                    minimize={minimized}
                    day="Day 7"
                    dayTitle="Who Are You?"
                />
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
                    >minimized</div>)
                }
            </button>
        </section>
    );
}

export default DaySelection;
