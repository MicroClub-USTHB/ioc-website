import React from 'react';
import DaySelectionSymbol from '../../components/DaySelectionSymbol/DaySelectionSymbol';

// Style
import storyStyle from './DayStory.module.scss';

const DayStory = ({dayNumber, day, title, story}) => {

    // Replaces \\n with \n, so that new lines work
    const replaceAll = (string, target, replaceWith) => {
        let stringCopy = string;
        let indexOfMatch = stringCopy.indexOf(target);
        while (indexOfMatch!==-1) {
            stringCopy = stringCopy.replace(target, replaceWith);
            indexOfMatch = stringCopy.indexOf(target);
        }
        return stringCopy;
    }

    return (
        <section className={storyStyle.container}>
            <div className={storyStyle.header}>
                <DaySelectionSymbol dayNumber={dayNumber} />
                <div className={storyStyle.headerTextContainer}>
                    <div className={storyStyle.headerDay}>{day}</div>
                    <div className={storyStyle.headerTitle}>{title}</div>
                </div>
            </div>
            <div className={storyStyle.storySection}>
                <div className={storyStyle.sectionTitle}>The Story</div>
                <div className={storyStyle.storyContent}>{replaceAll(story, '\\n', '\n')}</div>
            </div>
        </section>
    );
}

export default DayStory;
