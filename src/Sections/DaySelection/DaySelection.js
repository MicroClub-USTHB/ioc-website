import React, { useState } from 'react';

// Style
import dayStyle from './DaySelection.module.scss';

// Images
import mcLogo from '../../media/MC LogoWS-min.png';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DaySelectionButton from '../../components/DaySelectionButton/DaySelectionButton';

const DaySelection = () => {
    const [Minimize, setMinimize] = useState(false);
    return (
        <section
            className={`${dayStyle.container} ${Minimize? dayStyle.containerAnimateContract : dayStyle.containerAnimateExpand }`}
            style={{
                width: Minimize? 'fit-content' : '18.5vw',
            }}

        >
            <div className={dayStyle.pageTitle}>
                <div>
                    <Link to="/">
                        <img
                            className={dayStyle.titleImage}
                            src={mcLogo} alt="Micro Club Logo"
                            style={{
                                width: Minimize? '4vw' : '5vw'
                            }}
                        />
                    </Link>
                </div>
                <div
                    className={`${dayStyle.title} ${!Minimize && dayStyle.titleAppear}`}
                    style={{
                        width: Minimize? '0' : 'fit-content'
                    }}
                >Challenges</div>
            </div>
            <div className={dayStyle.days}>
                <DaySelectionButton
                    dayNumber={1}
                    minimize={Minimize}
                    day="Day 1"
                    dayTitle="What Happened?"
                />
                <DaySelectionButton
                    dayNumber={2}
                    minimize={Minimize}
                    day="Day 2"
                    dayTitle="Find The Mole"
                />
                <DaySelectionButton
                    dayNumber={3}
                    minimize={Minimize}
                    day="Day 3"
                    dayTitle="Secret Message"
                />
                <DaySelectionButton
                    dayNumber={4}
                    minimize={Minimize}
                    day="Day 4"
                    dayTitle="Geohash Coordinates"
                />
                <DaySelectionButton
                    dayNumber={5}
                    minimize={Minimize}
                    day="Day 5"
                    dayTitle="Protection Layers"
                />
                <DaySelectionButton
                    dayNumber={6}
                    minimize={Minimize}
                    day="Day 6"
                    dayTitle="Hide Under The Tree"
                />
                <DaySelectionButton
                    dayNumber={7}
                    minimize={Minimize}
                    day="Day 7"
                    dayTitle="Who Are You?"
                />
            </div>
            <button
                className={dayStyle.minimizeContainer}
                onClick={() => {
                    setMinimize(!Minimize)
                }}
            >
                <div
                    className={dayStyle.minimizeSymbol}
                    style={{
                        marginRight: Minimize? '0' : '1vw',
                        position: Minimize? 'static' : 'relative',
                        transform: Minimize && "rotateZ(180deg)"
                    }}
                ></div>
                {
                    !Minimize && 
                    (<div
                        className={dayStyle.minimizeText}
                    >Minimize</div>)
                }
            </button>
        </section>
    );
}

export default DaySelection;
