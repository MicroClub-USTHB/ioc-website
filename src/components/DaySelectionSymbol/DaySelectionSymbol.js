import React from 'react';

// Style
import symbolStyle from './DaySelectionSymbol.module.scss';

const DaySelectionSymbol = ({dayNumber}) => {
    switch (dayNumber) {
        case 1:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanOne}></div>
                </div>
            )
        case 2:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanOne}></div>
                    <div className={symbolStyle.romanOne}></div>
                </div>
            )
        case 3:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanOne}></div>
                    <div className={symbolStyle.romanOne}></div>
                    <div className={symbolStyle.romanOne}></div>
                </div>
                )
        case 4:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanOne}></div>
                    <div className={symbolStyle.romanFive}></div>
                </div>
            )
        case 5:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanFive}></div>
                    <div className={symbolStyle.romanFive}></div>
                </div>
            )
        case 6:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanFive}></div>
                    <div className={symbolStyle.romanOne}></div>
                </div>
            )
        case 7:
            return (
                <div className={symbolStyle.dayCircle}>
                    <div className={symbolStyle.romanFive}></div>
                    <div className={symbolStyle.romanOne}></div>
                    <div className={symbolStyle.romanOne}></div>
                </div>
            )
        
        default:
            return <div>does not exist</div>
    }
}

export default DaySelectionSymbol;
