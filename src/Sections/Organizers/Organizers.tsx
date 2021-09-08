import React from 'react';
import { useSelector } from 'react-redux';
import { LangType } from '../../common/Lang/french';
import { RootState } from '../../redux/types';
import Organizer from './components/Organizer/Organizer';
import { Organizer as OrganizerType } from './types';

// Resources
import etudz from '../../resources/Etudz.png';
import mclogo from '../../resources/mc-logo-min.svg';

// Styles
import orgStyle from './Organizers.module.scss';

const Organizers = () => {
  const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
  const language = (useSelector<RootState>((state) => state.common.language) as "english" | "french");
  const org_list: OrganizerType[] = [
    /* MICRO CLUB */
    {
      title: "Event Organizer",
      description: "Micro Club is the first founded scientific club in Algeria, back in March 5th, 1985.\nWe focuse on Computer Science and IT field as we work to popularize among the student community.",
      links: [
        { type: 'instagram', link: 'https://www.instagram.com/microclub_usthb/' },
        { type: 'facebook', link: 'https://www.facebook.com/Micro.Club.USTHB' },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/micro-club-usthb/' },
        { type: 'web', link: 'https://microclub.net/' },
      ],
      image: {
        link: mclogo,
        bg: 'dark'
      },
      orientation: 'left',
    },
    /* MICRO CLUB */
    {
      title: "Event Partner",
      description: "Etudz Academy is a digital professions training institution that uses advanced coaching approaches based in Algeria.",
      links: [
        { type: 'instagram', link: 'https://www.instagram.com/etudzacademy' },
        { type: 'facebook', link: 'https://www.facebook.com/etudz.academy' },
        { type: 'web', link: 'https://etudz.academy/' },
      ],
      image: {
        link: etudz,
        bg: 'light'
      },
      orientation: 'right',
    },
    
  ];
  return (
    <section className={orgStyle.section_container}>
      <div className={orgStyle.title}>
        <h1 className={orgStyle.section_title + (language === "english" ? "" : " " + orgStyle.FR)}>
            {Lang.organizers.title}
        </h1>
      </div>
      <ul className={orgStyle.list}>
        {
          org_list.map((item, index) => (
            <li key={index}> <Organizer {...item} /> </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Organizers;
