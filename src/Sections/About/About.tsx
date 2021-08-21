import React from 'react';

// resources
import about1 from '../../resources/About1-min.png';
import about2 from '../../resources/About2-min.png';

// styles
import aboutStyle from './About.module.scss';

const About = () => {
  return (
    <section className={aboutStyle.about_container}>
      <div className={aboutStyle.left_section}>
        <h1 className={aboutStyle.section_title}>The Event</h1>
        <p>
          Impact of code is a one week long dev event that consists of daily coding challenges wrapped up in a compelling story scenario under the theme of a post-apocalyptic world in which we follow the steps of a character as he solves his way to escape the end. Each day participants will discover a new primary challenge and a bonus challenge with a chance to win points after each good answer.
          <br/><br/>
          Each day participants will discover a new primary challenge and a bonus challenge with a chance to win points after each good answer.
        </p>
      </div>
      <div className={aboutStyle.right_section}>
        <div className={aboutStyle.info_box_top}>
          <img src={about1} alt="" />
          <div className={aboutStyle.top_description}>
            <h2>Seven Days. Seven Challenges. One Hero, You!</h2>
            Impact of Code features 7 challenges of different domains and difficulties, you don’t have to be a computer science student nor have any coding skills to solve them, a good brain inside your thick skull is all that is required. A new challenge is announced with the coming of each new day, solving the challenges advances the story.
          </div>
        </div>
        <div className={aboutStyle.info_box_bottom}>
          <img src={about2} alt="" />
          <div className={aboutStyle.bottom_description}>
            <h2>Beat the Enemies in the Story. Beat Your Friends on the Leadboard.</h2>
            Impact of Code features 7 challenges of different domains and difficulties, you don’t have to be a computer science student nor have any coding skills to solve them, a good brain inside your thick skull is all that is required. A new challenge is announced with the coming of each new day, solving the challenges advances the story.
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
