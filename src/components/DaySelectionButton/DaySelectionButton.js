import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { chooseDay } from '../../redux/workspaceSlice';
import DaySelectionSymbol from '../DaySelectionSymbol/DaySelectionSymbol';

// Style
import buttonStyle from './DaySelectionButton.module.scss';

const DaySelectionButton = ({dayNumber, minimize, day, dayTitle}) => {
    const dispatch = useDispatch();
    const chosenDay = useSelector(state => state.workspace.chosenDay);

    return (
        <div 
            className={buttonStyle.dayContainer}
            style={{
                backgroundColor: chosenDay === dayNumber && '#9C9C9C'
            }}
        >
            <Link
                to={`/workspace/${dayNumber}`}
                className={buttonStyle.day}
                onClick={() => {
                    dispatch(chooseDay(dayNumber))
                }}
                >
                <DaySelectionSymbol dayNumber={dayNumber} />
                <div
                    style={{
                        width: minimize? '0' : 'fit-content',
                        opacity: minimize? '0' : '1'
                    }}
                    className={!minimize && buttonStyle.dayTextExpand}
                    >
                    <div className={buttonStyle.dayNumber}>{day}</div>
                    <div className={buttonStyle.dayTitle}>{dayTitle}</div>
                </div>
            </Link>
        </div>
    );
}

export default DaySelectionButton;
