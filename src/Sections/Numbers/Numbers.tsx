import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import { LangType } from '../../common/Lang/french';

// styles
import numbersStyle from './Numbers.module.scss';

// resources
import numbers1 from '../../resources/Numbers1-min.png';

// icons
import {
  UilGift,
  UilBackpack,
  UilCalendarAlt
} from '@iconscout/react-unicons';
import Card from './Card/Card';

const Numbers = () => {
  const Lang = useSelector<RootState>(state => state.common.Lang) as LangType;

  return (
    <section className={numbersStyle.section_container}>
      <h1 className={numbersStyle.section_title}>{ Lang.numbers_section_title }</h1>
      <div className={numbersStyle.holder_container}>
        <div className={numbersStyle.cards_holder}>
          <Card
            Icon={UilGift}
            heading={Lang.numbers_section_card1}
            subHeading={Lang.numbers_section_card1_sub}
          />
          <div className={numbersStyle.card_pair}>
            <Card
              Icon={UilBackpack}
              heading={Lang.numbers_section_card2}
            />
            <Card
              Icon={UilCalendarAlt}
              heading={Lang.numbers_section_card3}
            />
          </div>
        </div>
        <img className={numbersStyle.bg_image} src={numbers1} alt="" />
      </div>
    </section>
  );
}

export default Numbers;
