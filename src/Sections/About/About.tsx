import React from 'react';
import { useSelector } from 'react-redux';
import { LangType } from '../../common/Lang/french';
import { RootState } from '../../redux/types';

// resources
import about1 from '../../resources/About1-min.png';
import about2 from '../../resources/About2-min.png';

// styles
import aboutStyle from './About.module.scss';

const About = () => {
  const Lang = useSelector<RootState>(state => state.common.Lang) as LangType;
  return (
    <section className={aboutStyle.about_container}>
      <div className={aboutStyle.left_section}>
        <h1 className={aboutStyle.section_title}>{Lang.event_section_title}</h1>
        <p>
          {Lang.event_section_description1}
          <br/><br/>
          {Lang.event_section_description2}
        </p>
      </div>
      <div className={aboutStyle.right_section}>
        <div className={aboutStyle.info_box_top}>
          <img src={about1} alt="" />
          <div className={aboutStyle.top_description}>
            <h2>{Lang.event_section_about1_title}</h2>
            {Lang.event_section_about1_description}
          </div>
        </div>
        <div className={aboutStyle.info_box_bottom}>
          <img src={about2} alt="" />
          <div className={aboutStyle.bottom_description}>
            <h2>{Lang.event_section_about2_title}</h2>
            {Lang.event_section_about2_description}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
