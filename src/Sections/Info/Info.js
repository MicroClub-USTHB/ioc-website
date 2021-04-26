import React from 'react';
import { useSelector } from 'react-redux';

// Style
import infoStyle from './Info.Module.scss';

// Components
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';

// Images
import infoPhoto1 from '../../media/infoPhoto1-min.png';
import infoPhoto2 from '../../media/infoPhoto2-min.png';
import lineDec from '../../media/decoration-1.svg';

const Info = () => {
    const isMobile = useSelector(state => state.workspace.isMobile);
    return (
        <section className={infoStyle.section}>
            <div data-aos="fade-right" className={infoStyle.titleContent}>
                <h1 className={infoStyle.title}>What is This?</h1>
                <p className={infoStyle.description}>Impact of Code is a series of small programming puzzles for a variety of skill levels. The challenges stretch 7 days with a new challenge being released each new day at exactly 00:00. Accompanying the challenges will be a part of the story of Axios. Enjoy the story as you solve the interesting challenges.</p>
            </div>
            <div className={infoStyle.infoList}>
                <InfoDisplay
                    textIsLeft={true}
                    title="Seven Days. Seven Challenges. One Hero, You!"
                    img={infoPhoto1}
                    altText=""
                    description={"Impact of Code features 7 challenges of different domains and difficulties, you don’t have to be a computer science student nor have any coding skills to solve them, a good brain inside your thick skull is all that is required.\nA new challenge is announced with the coming of each new day, solving the challenges advances the story."}
                />
                <InfoDisplay
                    textIsLeft={false}
                    title={"Beat the Enemies in the Story. Beat Your Friends on the Leadboard."}
                    img={infoPhoto2}
                    altText=""
                    description={"Impact of Code features 7 challenges of different domains and difficulties, you don’t have to be a computer science student nor have any coding skills to solve them, a good brain inside your thick skull is all that is required.\nA new challenge is announced with the coming of each new day, solving the challenges advances the story."}
                />
            </div>
            {
                !isMobile && (
                    <>
                        <img className={`${infoStyle.lineDec} ${infoStyle.lineDecLeft}`} src={lineDec} alt="" />
                        <img className={`${infoStyle.lineDec} ${infoStyle.lineDecRight}`} src={lineDec} alt="" />
                        <div className={`${infoStyle.decorationRect} decorationRect`}></div>
                        <div className={`${infoStyle.decorationRect} decorationRect`}></div>
                    </>
                )
            }
        </section>
    );
}

export default Info;
