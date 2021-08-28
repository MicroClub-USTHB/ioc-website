import React from 'react';
import { LangType } from '../../common/Lang/french';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';

// styles
import videoStyle from './Video.module.scss';

// resources
import video1 from '../../resources/Video1-min.png';
import video2 from '../../resources/Video2-min.png';

const Video = () => {
  const Lang = useSelector<RootState>(state => state.common.Lang) as LangType;

  return (
    <section className={videoStyle.video_section}>
      <div className={videoStyle.left_decoration}>
        <img src={video1} alt="" />
      </div>
      <div className={videoStyle.video_container}>
        <h1>{Lang.video_section_title1} <span className={videoStyle.highlight}>{Lang.video_section_title1_highlight}</span></h1>
        <iframe className={videoStyle.youtube_video} src="https://www.youtube.com/embed/6TEBHQ-qm7c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h1>{Lang.video_section_title2_part1} <span className={videoStyle.highlight}>{Lang.video_section_title2_highlight}</span> {Lang.video_section_title2_part2}</h1>
      </div>
      <div className={videoStyle.right_decoration}>
        <img src={video2} alt="" />
      </div>
    </section>
  );
}

// https://www.youtube.com/watch?v=6TEBHQ-qm7c&t=552s

export default Video;
