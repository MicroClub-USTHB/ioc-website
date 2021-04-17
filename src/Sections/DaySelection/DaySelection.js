import React from 'react';
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
    const isMobile = useSelector(state => state.workspace.isMobile);
    const dispatch = useDispatch();

    const containerStyle = !challenges? {
            width: "100vw",
            height: "100vh",
        } : isMobile? {
            height: minimized? 'fit-content' : '100vh',
            width: '100vw',
        } : {
            height: '100vh',
            width: minimized? 'fit-content' : '19.5vw',
        }

    const logoStyle = isMobile? {
        width: minimized? '5rem' : '5rem',
        margin: '0 1.5rem'
    } : {
        width: minimized? '4vw' : '5vw',
    }

    const minimizeSymbolStyle = isMobile? {
        marginRight: minimized? '0' : '1vw',
        marginBottom: minimized? '1rem' : '0',
        position: minimized? 'static' : 'relative',
        transform: minimized? "rotateZ(-90deg)" : "rotateZ(90deg)",
    } : {
        marginRight: minimized? '0' : '1vw',
        position: minimized? 'static' : 'relative',
        transform: minimized && "rotateZ(180deg)"
    }

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
            style={containerStyle}
        >
            <div className={dayStyle.pageTitle}>
                <div>
                    <Link to="/">
                        <img
                            className={dayStyle.titleImage}
                            src={mcLogo} alt="Micro Club Logo"
                            style={logoStyle}
                        />
                    </Link>
                </div>
                <div
                    className={`${dayStyle.title} ${(!minimized && !isMobile)? dayStyle.titleAppear : ''}`}
                    style={{
                        width: (minimized && !isMobile)? '0' : 'fit-content'
                    }}
                >Challenges</div>
            </div>
            {
                !(minimized && isMobile) && (
                    <div className={dayStyle.days}>
                        {
                            challenges? challenges.map(challenge => mapchallengeToButton(challenge.day, challenge.content.title)) : null
                        }
                    </div>
                )
            }
            <button
                className={dayStyle.minimizeContainer}
                onClick={() => {
                    dispatch(minimize());
                }}
            >
                <div
                    className={dayStyle.minimizeSymbol}
                    style={minimizeSymbolStyle}
                ></div>
                {
                    (!minimized && !isMobile) && 
                    (<div
                        className={dayStyle.minimizeText}
                    >minimize</div>)
                }
            </button>
        </section>
    );
}

export default DaySelection;
