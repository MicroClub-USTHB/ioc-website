import React from 'react';
import { useSelector } from 'react-redux';
import { LangType } from '../../common/Lang/french';
import { RootState } from '../../redux/types';

// resources
import about1 from "../../resources/About1-min.png";
import about2 from "../../resources/About2-min.png";

// Styles
import infoStyle from './Info.module.scss';

const Info = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
    <div className={infoStyle.right_section}>
      <div className={infoStyle.info_box_top}>
          <img src={about1} alt="" />
          <div className={infoStyle.top_description}>
              <h2>{Lang.event.about[0].title}</h2>
              {Lang.event.about[0].description}
          </div>
      </div>
      
      <div className={infoStyle.info_box_bottom}>
          <img src={about2} alt="" />
          <div className={infoStyle.bottom_description}>
              <h2>{Lang.event.about[1].title}</h2>
              {Lang.event.about[1].description}
          </div>
      </div>
  </div>
  );
}

export default Info;
